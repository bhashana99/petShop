package com.example.backend.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.NaturalId;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_info")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="user_id")
    private Long id;
    @NaturalId(mutable = true)
    private String email;
    private String username;
    private String password;
    private String role;
    private Boolean isEnable=false;
}
