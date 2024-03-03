package com.example.backend;

import jakarta.persistence.*;

@Entity
@Table(name="cart")
public class Cart {
    @Id
    @GeneratedValue
    private int cartId;

    @Column
    private int userId;

    @Column
    private int productId;

    @Column
    private int cartQty;

    public int getCartQty() {
        return cartQty;
    }

    public void setCartQty(int cartQty) {
        this.cartQty = cartQty;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }
}


