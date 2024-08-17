package com.parking.backend.Models;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.parking.backend.Enum.COLOR;
import com.parking.backend.Enum.TYPE_VEHICLE;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Vehicle")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    @Column(name="type_vehicle",nullable = false)
    private TYPE_VEHICLE typeVehicle;
    @Column(name="licence_plate",nullable = false,unique = true)
    private String licencePlate;
    @Enumerated(EnumType.STRING)
    @Column(name="color",nullable = true)
    private COLOR color;
    @Column(name="note",nullable = true)
    private String note;



    //@OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  // @JsonManagedReference
     //private List<Parking> parkings;


    // Constructor por defecto
    public Vehicle() {}

    // Constructor completo (sin id, ya que se genera automáticamente)
    public Vehicle(TYPE_VEHICLE typeVehicle, String licencePlate, COLOR color,String note) {
        this.typeVehicle = typeVehicle;
        this.licencePlate = licencePlate;
        this.color = color;
        this.note=note;
    }

    // Constructor con campos obligatorios
    public Vehicle(TYPE_VEHICLE typeVehicle, String licencePlate) {
        this.typeVehicle = typeVehicle;
        this.licencePlate = licencePlate;
    }

    // Constructor con tipo de vehículo, placa, color
    public Vehicle(TYPE_VEHICLE typeVehicle, String licencePlate, COLOR color) {
        this.typeVehicle = typeVehicle;
        this.licencePlate = licencePlate;
        this.color = color;
    }


    // Constructor con tipo de vehículo, placa y note
    public Vehicle(TYPE_VEHICLE typeVehicle, String licencePlate, String note) {
        this.typeVehicle = typeVehicle;
        this.licencePlate = licencePlate;
        this.note = note;
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

    public String getLicencePlate() {
        return licencePlate;
    }

    public void setLicencePlate(String licencePlate) {
        this.licencePlate = licencePlate;
    }

    public COLOR getColor() {
        return color;
    }

    public void setColor(COLOR color) {
        this.color = color;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

  /*
  *   public List<Parking> getParkings() {
        return parkings;
    }

    public void setParkings(List<Parking> parkings) {
        this.parkings = parkings;
    }
  * */

    @Override
    public String toString() {
        return "Vehicle{" +
                "id=" + id +
                ", typeVehicle=" + typeVehicle +
                ", licencePlate='" + licencePlate + '\'' +
                ", color=" + color +
                ", note='" + note + '\'' +
            //    ", parkings=" + parkings +
                '}';
    }
}
