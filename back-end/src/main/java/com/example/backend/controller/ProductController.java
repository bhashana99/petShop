package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @GetMapping("/product")
    public List<Product> getProduct(){
        return List.of(
                new Product(
                        1,
                        " Dog-Belt",
                        "Rs.1450",
                        20,
                        "Belt",
                        "Leather black belt for dogs",
                        "/images/cat food 1.jpg"
                        )
        );
    }
}
