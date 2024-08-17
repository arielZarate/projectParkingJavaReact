package com.parking.backend.Models;

import com.parking.backend.Enum.TYPE_VEHICLE;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "Rate")
public class Rate implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Enumerated(EnumType.STRING)
    @Column(name="type_vehicle",nullable = false)
    private TYPE_VEHICLE typeVehicle;

    @Column(name="cost_per_hour",nullable = false)
    private  Double costPerHour;


    public Rate(){}

    public Rate(TYPE_VEHICLE typeVehicle, Double costPerHour) {

        this.typeVehicle = typeVehicle;
        this.costPerHour = costPerHour;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TYPE_VEHICLE getTypeVehicle() {
        return typeVehicle;
    }

    public void setTypeVehicle(TYPE_VEHICLE typeVehicle) {
        this.typeVehicle = typeVehicle;
    }


    public Double getCostPerHour() {
        return costPerHour;
    }

    public void setCostPerHour(Double costPerHour) {
        this.costPerHour=costPerHour;
    }

    @Override
    public String toString() {
        return "Rate{" +
                ", typeVehicle=" + typeVehicle +
                ", CostPerHour=" + costPerHour +
                '}';
    }
}
