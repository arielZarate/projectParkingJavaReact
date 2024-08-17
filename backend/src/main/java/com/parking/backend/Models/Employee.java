package com.parking.backend.Models;

import com.parking.backend.Enum.ROLE;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "Employee")
public class Employee extends User implements Serializable {

   @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

// @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<Parking> parkings;

    public Employee(){
        super();
    }


    //=======SOBRECARGA ==========
    public Employee(String email, String password, ROLE roleUser) {
        super(roleUser);
        this.email = email;
        this.password = password;
    }


    //=======SOBRECARGA ==========
    public Employee(Long id, String fullName, String dni, String phoneNumber, ROLE roleUser, String email, String password) {
        super(id, fullName, dni, phoneNumber, roleUser);
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Employee{" +
                super.toString() +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}



//**
// // Creando un Employee con rol USER
//Employee employee1 = new Employee("user@example.com", "password123", ROLE.USER);
//
//// Creando un Employee con rol ADMIN
//Employee employee2 = new Employee("admin@example.com", "adminpassword", ROLE.ADMIN);
//
// *//