package com.parking.backend.Repositories;

import com.parking.backend.Models.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VehicleRepository extends JpaRepository<Vehicle,Long> {

  Optional<Vehicle> findByLicencePlate(String licence);

}
