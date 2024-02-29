package com.example.backend.user;

import com.example.backend.exception.UserAlreadyExistsException;
import com.example.backend.registration.RegistrationRequest;
import com.example.backend.registration.token.VerificationToken;
import com.example.backend.registration.token.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements IUserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final VerificationTokenRepository tokenRepository;
    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User registerUser(RegistrationRequest request) {
        Optional<User> user = this.findByEmail(request.email());
        if(user.isPresent()){
            throw new UserAlreadyExistsException("User with email " + request.email() + "already exists");
        }

        var newUser =new User();
        newUser.setEmail(request.email());
        newUser.setUsername(request.username());
        newUser.setPassword(passwordEncoder.encode(request.password()));
        newUser.setRole(request.role());
        return userRepository.save(newUser);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void saveUserVerificationToken(User theUser, String token) {
        var verificationToken = new VerificationToken(token,theUser);
        tokenRepository.save(verificationToken);
    }
}
