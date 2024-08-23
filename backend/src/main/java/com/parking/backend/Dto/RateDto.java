package com.parking.backend.Dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RateDto {
    private Long id;
    private String typeVehicle; // Usar String para representar el Enum
    private Double costPerHour;
}