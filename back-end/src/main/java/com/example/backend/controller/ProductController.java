package com.example.backend.controller;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/petshop")
@CrossOrigin("http://127.0.0.1:5173/")
public class ProductController {

    @Autowired
    ProductRepository productRepository ;

    @PostMapping("/product")
    Product addProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping("/product")
    List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/getProductById")
    Product getProductById(@RequestParam long id){
        return productRepository.findById(id);
    }

//    @GetMapping("/getProductsByCategory")
//    List<Product> getProductCategories(@RequestParam String category) {
//        return productRepository.findByCategories(category);
//    }


}
