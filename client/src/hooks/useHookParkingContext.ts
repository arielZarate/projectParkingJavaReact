"use client";

import React, { useContext } from "react";

import { ParkingContext } from "@/context/ParkingContext";
import { ParkingContextType } from "@/interfaces/parkingContextType";

// Hook para usar el contexto de Parking con validación
export const useHookParkingContext = (): ParkingContextType => {
  const context = useContext(ParkingContext);
  // console.log("hook", context);
  if (context === undefined) {
    throw new Error(
      "useParkingContext debe ser usado dentro de un ParkingProvider",
    );
  }
  return context;
};

//TODO: importo del Contexto y paso a hook para ser uaso por los components
