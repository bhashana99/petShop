package com.example.backend;

import org.springframework.web.bind.annotation.RequestBody;

public class CartDto {
    private int productId;
    private int quantity;

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public CartDto(@RequestBody CartDto CartDto){
        this.productId=productId;
        this.quantity= quantity;

    }
}
