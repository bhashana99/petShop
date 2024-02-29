package com.example.backend.registration.token;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface VerificationTokenRepository extends JpaRepository<VerificationToken,Long> {

}
