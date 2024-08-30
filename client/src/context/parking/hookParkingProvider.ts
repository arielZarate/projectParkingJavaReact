"use client";

import { fetchParkings, getParkingByLicencePlate } from "@/services/parkingService";
import { Parking } from "@/types/parking";
import { useEffect, useState } from "react";

//TODO: hook para descentralizar la logica del Provider de parking

 const HookParkingProvider = () => {
  const [parkings, setParkings] = useState<Parking[]>([]);
  const [loading, setLoading] = useState(false);



  // Función para cargar todos los parkings
  const loadParkings = async () => {
    setLoading(true);
    try {
     const result = await fetchParkings();
     setParkings(result);
    } catch (error) {
      //usar toast
      console.error("Error fetching parkings", error);
    } finally {
      setLoading(false);
    }
  };


   // Función para buscar parkings por licencia
   const searchParking = async (licencePlate: string) => {
    //setLoading(true);
    try {
     // const parkingFound = await getParkingByLicencePlate(licencePlate);
       //console.log(parkingFound)
      // setParkings(parkingFound);
    
   } catch (error) {
      console.error("Error searching parking by licence plate", error);
      alert(error);
    } finally {
     setLoading(false);
 }
     
  };

//carga los parkings
  useEffect(() => {
  loadParkings();
  }, []);


  return {
    //cada elemento que devuelva debo declararlo con su type en el provider
    parkings,
    loading,
    searchParking
  };
};



export default HookParkingProvider;