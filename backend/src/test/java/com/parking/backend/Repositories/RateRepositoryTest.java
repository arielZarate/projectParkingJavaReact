package com.parking.backend.Repositories;

import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;



//@DataJpaTest
@SpringBootTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)

class RateRepositoryTest {

    @Autowired
    private RateRepository rateRepository;


    @BeforeEach
    public void setUp() {
/*        Rate rate1 = new Rate();
        rate1.setTypeVehicle(TYPE_VEHICLE.CAR);
        rate1.setCostPerHour(45.0);
        rateRepository.save(rate1);

        Rate rate2 = new Rate();
        rate2.setTypeVehicle(TYPE_VEHICLE.BICYCLE);
        rate2.setCostPerHour(25.0);
        rateRepository.save(rate2);*/
    }
   
    /*
     * 
     *  @Test
    void findByTypeVehicle() {

        // Buscar por tipo de vehículo
        Optional<Rate> carRate = rateRepository.findByTypeVehicle(TYPE_VEHICLE.CAR);
        assertThat(carRate).isPresent();
        assertThat(carRate.get().getCostPerHour()).isEqualTo(40.0);
        System.out.println("car:"+carRate);
        Optional<Rate> bicycleRate = rateRepository.findByTypeVehicle(TYPE_VEHICLE.BICYCLE);
        assertThat(bicycleRate).isPresent();
        assertThat(bicycleRate.get().getCostPerHour()).isEqualTo(20.0);
        System.out.println("bicycle:"+ bicycleRate);
        // Buscar por un tipo de vehículo que no existe
        Optional<Rate> truckRate = rateRepository.findByTypeVehicle(TYPE_VEHICLE.TRUCK);
        assertThat(truckRate).isPresent();

       // System.out.println(truckRate);
    }
     * 
     */
}