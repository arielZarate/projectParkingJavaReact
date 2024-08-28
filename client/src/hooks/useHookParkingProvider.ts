"use client";

import React, { useState, useEffect } from "react";
import { data } from "@/services/parkingService";
import { Parking } from "@/types/parking";

//TODO: hook para descentralizar la logica del Provider de parking

export const useHookParkingProvider = () => {
  const [parkings, setParkings] = useState<Parking[]>([]);
  const [loading, setLoading] = useState(false);

  const loadParking = () => {
    setLoading(true);
    setTimeout(() => {
      setParkings(data);

      setLoading(false);
    }, 1000);

    /** fetchParkings()
      .then((data) => {
        setParking(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching parkings", error);
       
      }); */
  };

  useEffect(() => {
    loadParking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //  console.log("Loading parkings...", parkings);

  return {
    parkings,
    loading,
  };
};
