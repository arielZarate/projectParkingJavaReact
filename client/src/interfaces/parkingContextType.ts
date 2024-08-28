import { Parking } from "@/types/parking";

export interface ParkingContextType {
  parkings: Parking[];
  loading: boolean;
}
