"use client";

import React, { createContext, ReactNode } from "react";
import { ParkingContextType } from "@/interfaces/parkingContextType";

//======================HOOK==================================
import { useHookParkingProvider } from "@/hooks/useHookParkingProvider";
//================================
interface ParkingProvidersProps {
  children: ReactNode;
}

//====================CONTEXTO=================================
export const ParkingContext = createContext<ParkingContextType | undefined>(
  undefined,
);

const ParkingProvider: React.FC<ParkingProvidersProps> = ({ children }) => {
  const { parkings, loading } = useHookParkingProvider();
  return (
    <ParkingContext.Provider value={{ parkings, loading }}>
      {children}
    </ParkingContext.Provider>
  );
};

export default ParkingProvider;
