// types/parkingTypes.ts

export interface Vehicle {
  id: number;
  typeVehicle: string;
  licencePlate: string;
  color: string;
  note: string;
}

export interface Employee {
  id: number;
  fullName: string;
  dni: string;
  phoneNumber: string;
  roleUser: string;
  email: string;
  password: string;
}

export interface Rate {
  id: number;
  typeVehicle: string;
  costPerHour: number;
}

export interface Parking {
  id: number;
  entryTime: string; // Puede ser Date si prefieres convertirlo
  exitTime: string; // Puede ser Date si prefieres convertirlo
  vehicle: Vehicle;
  employee: Employee;
  rate: Rate;
  status: string;
  hours: number;
  cost: number;
}
