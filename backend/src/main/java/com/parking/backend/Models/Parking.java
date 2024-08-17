package com.parking.backend.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.parking.backend.Enum.STATUS_PARKING;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;


@Entity
@Table(name = "Parking")
public class Parking {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "entryTime",nullable = true)
    private LocalDateTime entryTime;


    @Column(name = "exitTime",nullable = true)
    private LocalDateTime exitTime;


    @ManyToOne(fetch = FetchType.EAGER) //// Un parking está asociado a un solo vehículo
    @JoinColumn(name = "vehicle", nullable = false)
    //@JsonBackReference
    private Vehicle vehicle;


    @ManyToOne(fetch = FetchType.EAGER) // Un parking está gestionado por un solo empleado
    @JoinColumn(name = "employee",nullable = false)
    private Employee employee;


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "rate", nullable = false)
    private Rate rate;


    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private STATUS_PARKING status ;


    @Column(name = "hours" ,nullable = true)
    private Long hours;

    @Column(name = "cost", nullable = true) // Costo calculado del estacionamiento
    private Double cost=0.0;



    public Parking(){
    }

    public Parking(Long id, LocalDateTime entryTime, LocalDateTime exitTime, Vehicle vehicle, Employee employee, Rate rate, STATUS_PARKING status, Long hours, Double cost) {
        this.id = id;
        this.entryTime = entryTime;
        this.exitTime = exitTime;
        this.vehicle = vehicle;
        this.employee = employee;
        this.rate = rate;
        this.status = status;
        this.hours = hours;
        this.cost = cost;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
   //===================================================================
    public LocalDateTime getEntryTime() {
        return entryTime;
    }

    public void setEntryTime(LocalDateTime entryTime) {

        //truncatedTo(ChronoUnit.MINUTES):
        // Este método trunca el LocalDateTime a la precisión más cercana de minutos, eliminando los segundos y milisegundos.
        this.entryTime = entryTime.truncatedTo(ChronoUnit.MINUTES);
    }

    public LocalDateTime getExitTime() {
        return exitTime;
    }

    public void setExitTime(LocalDateTime exitTime) {
        this.exitTime = exitTime.truncatedTo(ChronoUnit.MINUTES);
    }


    /*    public void showEntryTime(Parking parking) {
        LocalDateTime entryTime = parking.getEntryTime();
        String formattedEntryTime = entryTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm"));
        System.out.println("Tiempo de entrada: " + formattedEntryTime);
    }*/
   //=================================================================
    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Rate getRate() {
        return rate;
    }

    public void setRate(Rate rate) {
        this.rate = rate;
    }

    public STATUS_PARKING getStatus() {
        return status;
    }

    public void setStatus(STATUS_PARKING status) {
        this.status = status;
    }

    public Long getHours() {
        return hours;
    }

    public void setHours(Long hours) {
        this.hours = hours;
    }

    public Double getCost() {
        return cost;
    }


    public void setCost(Double cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "Parking{" +
                "id=" + id +
                ", entryTime=" + entryTime +
                ", exitTime=" + exitTime +
                ", vehicle=" + vehicle +
                ", employee=" + employee +
                ", rate=" + rate +
                ", status=" + status +
                ", hours=" + hours +
                ", cost=" + cost +
                '}';
    }


}




