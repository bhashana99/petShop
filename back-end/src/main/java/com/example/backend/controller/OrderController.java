package com.example.backend.controller;
import com.example.backend.model.Order;
import com.example.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController

@CrossOrigin("http://127.0.0.1:5173")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/Order")
    Order getOrders(@RequestBody Order orderRegister){
        return orderRepository.save(orderRegister);
    }

    @GetMapping("/Orders")
    List<Order> allOrders(){
        return orderRepository.findAll();
    }


     


}
