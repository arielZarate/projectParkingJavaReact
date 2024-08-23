package com.parking.backend.Controllers;


import com.parking.backend.Exceptions.CustomException;
import com.parking.backend.Models.Rate;
import com.parking.backend.Enum.TYPE_VEHICLE;
import com.parking.backend.Services.RateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rates")
public class RateController {


    @Autowired
    private RateService rateService;



    // Crear o actualizar una tarifa
    @PostMapping
    public ResponseEntity<List<Rate>> createOrUpdateRate(@RequestBody Object rates) {
        List<Rate> savedRate = this.rateService.saveOrUpdateRate(rates);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedRate);
    }

    // Obtener una tarifa por ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getRateById(@PathVariable Long id) {
        Optional<Rate> rate = rateService.findById(id);
        if (rate.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarifa por id "+id+ " no encontrada");
        }
        return ResponseEntity.status(HttpStatus.OK).body(rate.get());

    }

    // Obtener una tarifa por tipo de vehículo
    @GetMapping("/typeVehicle/{type}")
    public ResponseEntity<Rate> getRateByTypeVehicle(@PathVariable TYPE_VEHICLE type) {
        Optional<Rate> rateOpt = rateService.getRateByTypeVehicle(type);

        return rateOpt.map(rate -> ResponseEntity.status(HttpStatus.OK).body(rate))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());

    }

    // Obtener todas las tarifas
    @GetMapping
    public ResponseEntity<List<Rate>> getAllRates() {
        List<Rate> rates = rateService.findAll();
        return new ResponseEntity<>(rates, HttpStatus.OK);
    }

    // Eliminar una tarifa por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRateById(@PathVariable Long id) {
     //el service me devuelve true/false
        boolean rateDeleted=  this.rateService.deleteById(id);
        if(!rateDeleted)
        {

            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tarifa con id "+ id +" no encontrado.");
        }
        return ResponseEntity.ok().body("Tarifa Eliminada correctamente");
    }

}
