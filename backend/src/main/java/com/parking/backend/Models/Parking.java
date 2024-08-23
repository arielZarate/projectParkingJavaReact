package com.parking.backend.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.parking.backend.Enum.STATUS_PARKING;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;


@Entity
@Table(name = "Parking")
@Data
@NoArgsConstructor //constructor sin parametros
@AllArgsConstructor
@Builder //patron builder
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



    // ===podria haber echo la relacion en Rate definiendo @OneToMany  es lo mismo=======0
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "rate",
            referencedColumnName = "id",  // esta es la id de la tabla de Rate
            nullable = false)
    private Rate rate;


    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private STATUS_PARKING status ;


    @Column(name = "hours" ,nullable = true)
    private Long hours;

    @Column(name = "cost", nullable = true) // Costo calculado del estacionamiento
    private Double cost=0.0;




    public void setEntryTime(LocalDateTime entryTime) {

        //truncatedTo(ChronoUnit.MINUTES):
        // Este método trunca el LocalDateTime a la precisión más cercana de minutos, eliminando los segundos y milisegundos.
        this.entryTime = entryTime.truncatedTo(ChronoUnit.MINUTES);
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



  /*

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


  * */






}




