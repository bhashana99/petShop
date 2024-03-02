package com.example.backend.controller;

import com.example.backend.dto.MailBody;
import com.example.backend.entity.RefreshToken;
import com.example.backend.entity.UserVerification;
import com.example.backend.repo.UserRepository;
import com.example.backend.repo.UserVerificationRepository;
import com.example.backend.service.AuthService;
import com.example.backend.service.EmailService;
import com.example.backend.service.JwtService;
import com.example.backend.service.RefreshTokenService;
import com.example.backend.utils.AuthResponse;
import com.example.backend.utils.LoginRequest;
import com.example.backend.utils.RefreshTokenRequest;
import com.example.backend.utils.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Optional;
import java.util.Random;

@RestController
@RequestMapping("/api/v1/auth/")
@CrossOrigin("http://localhost:3000")
public class AuthController {
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final EmailService emailService;
    @Autowired


    private final UserVerificationRepository userVerificationRepository;


    @Autowired
    private final AuthService authService;
    private final RefreshTokenService refreshTokenService;
    private final JwtService jwtService;

    public AuthController(UserRepository userRepository, EmailService emailService, UserVerificationRepository userVerificationRepository, AuthService authService, RefreshTokenService refreshTokenService, JwtService jwtService) {
        this.userRepository = userRepository;
        this.emailService = emailService;

        this.userVerificationRepository = userVerificationRepository;
        this.authService = authService;
        this.refreshTokenService = refreshTokenService;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {

        String email = registerRequest.getEmail();
        String username = registerRequest.getUsername();

        Optional<com.example.backend.entity.User> existingUserOptional = userRepository.findByEmail(email);
        if (existingUserOptional.isPresent()) {
            // If the email already exists, return a response indicating that
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email already exists");
        }

        Optional<com.example.backend.entity.User> existingUserByUsername = userRepository.findByUsername(username);
        if (existingUserByUsername.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }

        ResponseEntity.ok(authService.register(registerRequest) );
        com.example.backend.entity.User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Please provide an valid email!" + email));

        int otp = otpGenerator();
        MailBody mailBody = MailBody.builder()
                .to(email)
                .text("Click the following link to Verify Your Email: <a href='http://localhost:8080/userVerification/verifyOtp/" + otp + "/" + email + "'>Verify Your Email</a>")
                .subject("Verification email")
                .build();

        UserVerification uv = UserVerification.builder()
                .otp(otp)
                .expirationTime(new Date(System.currentTimeMillis() + 24 * 60 * 60 *1000))
                .user(user)
                .build();

        emailService.sendSimpleMessage(mailBody);
        userVerificationRepository.save(uv);


        return ResponseEntity.ok("Email sent successfully" );
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        ResponseEntity<?> response = authService.login(loginRequest);

        if (response.getStatusCode() == HttpStatus.OK) {
            // If login was successful, return the AuthResponse
            return ResponseEntity.ok(response.getBody());
        } else {
            // If login failed due to unverified email, return a custom response
            return response;
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {

        RefreshToken refreshToken = refreshTokenService.verifyRefreshToken(refreshTokenRequest.getRefreshToken());
        com.example.backend.entity.User user = refreshToken.getUser();

        String accessToken = jwtService.generateToken(user);

        return ResponseEntity.ok(AuthResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken.getRefreshToken())
                .build());
    }
    private Integer otpGenerator() {
        Random random = new Random();
        return random.nextInt(100_000, 999_999);
    }

}
