package com.parking.backend.Services;

import com.parking.backend.Models.Parking;
import com.parking.backend.Repositories.ParkingRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;


//@DataJpaTest
//@SpringJUnitConfig
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
//@Import(ParkingService.class)  //ota forma de importar
class ParkingServiceTest {


    @Autowired
    private ParkingService parkingService;

    @Autowired
    private ParkingRepository parkingRepository;

   @BeforeEach
    void setUp() {
        // Clean up the database before each test
      //  parkingRepository.deleteAll();
    }


    @Test
    @DisplayName("Test para traer todos los parking")
    void findAllParking() {

        // Arrange
      //  Parking parking1 = new Parking();
      //  parking1.setEntryTime(LocalDateTime.now());
      //  parking1.setStatus(STATUS_PARKING.IN_PROGRESS);
      //  parkingRepository.save(parking1);


        // Act
        List<Parking> result = parkingService.findAllParking();
        // Assert
        assertNotNull(result);
        assertFalse(result.isEmpty());
     //   assertEquals(2, result.size());

        System.out.println("**********parking Datos<********\n"+ result);
    }

   @Test
    void getParkingById() {

       Long id=1L;
      Optional<Parking> opt =parkingService.getParkingById(id);

         assertTrue(opt.isPresent(),"El parking deberia estar presente con el id: "+ id);
          assertEquals(1,opt.get().getId(),"El id del parking deberia coindidir con el id proporcionado ");

       System.out.println("parking encontrado: " + opt.get());

    }

    @Test
    void getParkingByLicencePlate() {

        String licencePlate = "RJI730";  // Matrícula que estás buscando
        List<Parking> listParking = parkingService.getParkingByLicencePlate(licencePlate);


        //Assert
        assertNotNull(listParking, "La lista de parking no deberia ser nula");
        assertFalse(listParking.isEmpty(), "la lista no deberia estar vacia ");


        // Verificar que todos los objetos en la lista tengan la matrícula correcta
        for (Parking parking : listParking) {
            assertEquals(licencePlate, parking.getVehicle().getLicencePlate(),
                    "La matrícula debería coincidir con " + licencePlate);
        }


        // Opcional: Puedes imprimir los resultados para inspección visual
        System.out.println("Parkings encontrados con matrícula " + licencePlate + ": " + listParking);

    }
}