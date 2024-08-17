package com.parking.backend.Repositories;

import com.parking.backend.Models.Rate;
import com.parking.backend.Enum.TYPE_VEHICLE;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RateRepository extends JpaRepository<Rate,Long> {

    // Puedes añadir métodos de consulta personalizados si lo necesitas
    Optional<Rate> findByTypeVehicle(TYPE_VEHICLE typeVehicle);
}
