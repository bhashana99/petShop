package com.example.backend.service.impl;

import com.example.backend.dto.UserDto;
import com.example.backend.model.User;
import com.example.backend.repositories.UserRepo;

import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public void userRegister(UserDto userDto) {
        User user=new User(
                userDto.getId(),
                userDto.getEmail(),
                userDto.getUsername(),

                this.passwordEncoder.encode(userDto.getPassword())
        );

        userRepo.save(user);

    }
}
