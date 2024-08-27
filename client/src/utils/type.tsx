// Enum o constante para STATUS_PARKING en React
export const STATUS_PARKING = {
  IN_PROGRESS: "IN_PROGRESS",
  COMPLETED: "COMPLETED",
};

// Enum o constante para TYPE_VEHICLE en React
export const TYPE_VEHICLE = {
  CAR: "CAR",
  MOTORBIKE: "MOTORBIKE",
  TRUCK: "TRUCK",
  // Otros tipos...
};

import React, { useState } from "react";
//import { STATUS_PARKING } from './enums';

function ParkingStatusSelector() {
  const [selectedStatus, setSelectedStatus] = useState(
    STATUS_PARKING.IN_PROGRESS,
  );

  const handleStatusChange = (event: any) => {
    setSelectedStatus(event.target.value);
  };

  const sendStatusToBackend = async () => {
    try {
      const response = await fetch(`/api/parking/status/${selectedStatus}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching parking status:", error);
    }
  };

  return (
    <div>
      <select value={selectedStatus} onChange={handleStatusChange}>
        <option value={STATUS_PARKING.IN_PROGRESS}>In Progress</option>
        <option value={STATUS_PARKING.COMPLETED}>Completed</option>
      </select>
      <button onClick={sendStatusToBackend}>Check Parking Status</button>
    </div>
  );
}

export default ParkingStatusSelector;
