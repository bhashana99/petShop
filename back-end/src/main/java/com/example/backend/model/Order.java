package com.example.backend.model;
import jakarta.persistence.*;

@Entity
@Table(name = "orderInfo")
public class Order {
    @GeneratedValue
    @Id
    private long id;

    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String phoneNumber;
    @Column
    private String email;
    @Column
    private String address;
    @Column
    private String city;
    @Column
    private String state;
    @Column
    private String zipCode;

    public void setId(long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

}
