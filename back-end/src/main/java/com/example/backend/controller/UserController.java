package com.example.backend.controller;

import com.example.backend.dto.UserDto;
import com.example.backend.repositories.UserRepo;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;
    private UserRepo userRepo;

    @Autowired
    public UserController(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    @PostMapping("/register")
    public void userRegister(@RequestBody UserDto userDto){
        userService.userRegister(userDto);
    }
}
