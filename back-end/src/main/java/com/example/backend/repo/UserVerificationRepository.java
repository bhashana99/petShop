package com.example.backend.repo;

import com.example.backend.entity.User;
import com.example.backend.entity.UserVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserVerificationRepository extends JpaRepository<UserVerification, Integer> {
    @Query("select uv from UserVerification uv where uv.otp = ?1 and uv.user = ?2")
    Optional<UserVerification> findByOtpAndUser(Integer otp, User user);

}
