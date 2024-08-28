"use client";

import React, { useState, useEffect } from "react";
import { fetchParkings, data } from "@/services/parkingService";
import { Parking } from "@/types/parking";

//TODO: hook para descentralizar la logica del Provider de parking

export const useHookParkingProvider = () => {
  const [parkings, setParkings] = useState<Parking[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // setParkings(data);

    setTimeout(() => {
      setParkings(data);

      setLoading(false);
    }, 1000);
    /** fetchParkings()
      .then((response) => {
        //  console.log("data", response);
        setParkings(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching parkings", error);
      }); */
  }, []);

  // console.log("Loading parkings...", parkings);

  return {
    parkings,
    loading,
  };
};
