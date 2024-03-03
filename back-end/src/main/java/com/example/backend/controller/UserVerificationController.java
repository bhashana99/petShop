package com.example.backend.controller;

import com.example.backend.entity.UserVerification;
import com.example.backend.repo.UserRepository;
import com.example.backend.repo.UserVerificationRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Date;
import java.util.Random;

@RestController
@RequestMapping("/userVerification")
@CrossOrigin("http://localhost:5173")
public class UserVerificationController {
    private final UserRepository userRepository;

    private final UserVerificationRepository userVerificationRepository;




    public UserVerificationController(UserRepository userRepository, UserVerificationRepository userVerificationRepository) {
        this.userRepository = userRepository;
        this.userVerificationRepository = userVerificationRepository;

    }

    @GetMapping("/verifyOtp/{otp}/{email}")
    public ResponseEntity<String> verifyOtp(@PathVariable Integer otp, @PathVariable String email) {
        com.example.backend.entity.User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Please provide a valid email!"));

        UserVerification uv = userVerificationRepository.findByOtpAndUser(otp,user)
                .orElseThrow(() -> new RuntimeException("Invalid OTP for email: " + email));

        if (uv.getExpirationTime().before(Date.from(Instant.now()))) {
            userVerificationRepository.deleteById(uv.getVid());
            return new ResponseEntity<>("OTP has expired!", HttpStatus.EXPECTATION_FAILED);
        }

        // OTP verified, update user's verification status
        user.setVerified(true);
        userRepository.save(user); // Save the changes to the database

        return ResponseEntity.ok("OTP verified! User is now verified.");
    }
    private Integer otpGenerator() {
        Random random = new Random();
        return random.nextInt(100_000, 999_999);
    }

}
