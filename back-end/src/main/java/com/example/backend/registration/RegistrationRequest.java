package com.example.backend.registration;

public record RegistrationRequest( String email,
        String username,
         String password,
         String role) {
}
