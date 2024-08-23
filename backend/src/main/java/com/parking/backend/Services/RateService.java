package com.parking.backend.Services;


import com.parking.backend.Exceptions.CustomException;
import com.parking.backend.Models.Rate;
import com.parking.backend.Enum.TYPE_VEHICLE;
import com.parking.backend.Repositories.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class RateService {

    @Autowired
    private RateRepository rateRepository;


    // Crear o actualizar una tarifa
    @org.springframework.transaction.annotation.Transactional

    //rates puede recibir tanto un solo Objeto o una lista de tarifas a actualizar con su tipo
    public List<Rate> saveOrUpdateRate(Object rates) {
        try{
           List<Rate> rateList=new ArrayList<>();

           if(rates instanceof Rate){
               rateList.add((Rate) rates);//casting
           }else if(rates instanceof List<?>){
             for(Object obj :(List<?>)rates)
             {
                 if(obj instanceof Rate)
                 {
                     rateList.add((Rate)obj);
                 }
                 else{
                     throw new CustomException("El objeto en la lista no es de tipo Rate.");
                 }
             }

           }else{
               throw new CustomException("El objeto proporcionado no es un tipo Rate ni una lista de Rates.");
           }


             //============VALIDACIONES========
            validateRate(rateList);

          List<Rate> updatedRates = new ArrayList<>();

            for (Rate rate : rateList) {

                // Buscar la tarifa existente por el tipo de vehículo
                   Optional<Rate> existingRateOpt = rateRepository.findByTypeVehicle(rate.getTypeVehicle());
                   //    System.out.println("********La tarifa por vehiculo****** \n" + existingRateOpt.get());
                   if(existingRateOpt.isPresent())
                    {
                        // System.out.println("Tarifa: "+ existingRateOpt.get());
                        Rate existingRate= existingRateOpt.get();
                        existingRate.setTypeVehicle(rate.getTypeVehicle());
                        existingRate.setCostPerHour(rate.getCostPerHour());

                        // Guardar la tarifa actualizada en la lista
                        updatedRates.add(rateRepository.save(existingRate));

                    } else{
                    // Si la tarifa no existe, créala
                   updatedRates.add(rateRepository.save(rate));
                }
            }
            return updatedRates;
        } catch (CustomException e) {
            throw e;
        }
        catch (Exception e) {
            //el catch captura el error del throw y lo devuelve por aca
            throw new RuntimeException( e.getMessage(),e);
        }
    }

    // Obtener una tarifa por ID NO ES USUAL QUE SE BUSQUE POR ID MAS QUE NADA POR TYPE DE VEHICULO
    @org.springframework.transaction.annotation.Transactional
    public Optional<Rate> findById(Long id) {
        try{
            return this.rateRepository.findById(id);
        } catch (CustomException e) {
            throw e;
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            throw new CustomException(e.getMessage());
        }
    }

    // =========Obtener una tarifa por tipo de vehículo============
    public Optional<Rate> getRateByTypeVehicle(TYPE_VEHICLE typeVehicle) {
        try{
            return this.rateRepository.findByTypeVehicle(typeVehicle);
        }catch (CustomException e) {
            throw e;
        }
        catch (Exception e) {
            System.out.println(e.getMessage());
            throw new CustomException(e.getMessage());
        }

    }

    // Obtener todas las tarifas
    public List<Rate> findAll() {
        try {
            return rateRepository.findAll();
        } catch (CustomException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }
    // Eliminar una tarifa por ID
    @org.springframework.transaction.annotation.Transactional
    public boolean deleteById(Long id) {
       // rateRepository.deleteById(id);
        try{
            Optional<Rate> rateOptional = findById(id);
            if (rateOptional.isPresent()) {
                this.rateRepository.delete(rateOptional.get());
                return true;
            }else {
                return false;
            }
        } catch (CustomException e) {
            throw e;
        }
        catch (Exception e) {
            //el catch captura el error del throw y lo devuelve por aca
            throw new RuntimeException( e.getMessage(),e);
        }
    }


    private void validateRate(List<Rate> rates) throws CustomException {
        for (Rate rate : rates) {
            // System.out.println("Validando tarifa: " + rate);
            // Verificar que el tipo de vehículo no sea nulo
            // EN REALIDAD NO HARIA FALTA YA QUE ESTE DATO EN EL FRONT ES STATICO
            if (rate.getTypeVehicle() == null) {
                throw new CustomException("El tipo de vehículo no puede ser nulo.");
            }


            // Verificar que el costo por hora no sea nulo y sea positivo
            if (rate.getCostPerHour() == null || rate.getCostPerHour() < 0) {
                throw new CustomException("El costo por hora debe ser un valor positivo.");
            }


        }

    }

}
