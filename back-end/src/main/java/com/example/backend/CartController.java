package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://127.0.0.1:5173/")
@RequestMapping("/api/v1/cart")
public class CartController {
    CartRepository cartRepository;

    @Autowired
    public CartController(CartRepository repo){
        this.cartRepository = repo;
    }
    @GetMapping("/cart")
    public Cart getCart(@RequestParam int cartId){
        return cartRepository.findById(cartId);
    }

    @GetMapping("/getcartpid")
    public List<Cart> getProductId(@RequestParam int productId){
        return cartRepository.findByProductId(productId);
    }

    @PostMapping("/addToCart/{userId}")
    public void addCart(@RequestBody Cart cart){
        cartRepository.save(cart);
    }
    @PostMapping("/removeCart/{cartId}")
    public void removeCart(@RequestBody Cart cart){
        cartRepository.delete(cart);
    }


}
