package com.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart ,Integer> {
    Cart findById(int cartId);

    List<Cart> findByProductId(int productId);
}
