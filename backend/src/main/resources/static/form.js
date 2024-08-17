import React, { useState } from 'react';
import axios from 'axios';

function ParkingForm() {
  const [vehicleType, setVehicleType] = useState('');
  const [licencePlate, setLicencePlate] = useState('');
  const [color, setColor] = useState('');
  const [note, setNote] = useState('');
  const [employeeId] = useState(localStorage.getItem('employeeId')); // O sessionStorage

  const handleSubmit = async (event) => {
    event.preventDefault();

    const vehicleData = {
      typeVehicle: vehicleType,
      licencePlate: licencePlate,
      color: color,
      note: note
    };

    try {
      const response = await axios.post(`/api/parking/save/${employeeId}`, vehicleData);
      console.log('Parking creado:', response.data);
    } catch (error) {
      console.error('Error creando parking:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tipo de Vehículo</label>
        <input
          type="text"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        />
      </div>
      <div>
        <label>Licencia</label>
        <input
          type="text"
          value={licencePlate}
          onChange={(e) => setLicencePlate(e.target.value)}
        />
      </div>
      <div>
        <label>Color (opcional)</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div>
        <label>Nota (opcional)</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button type="submit">Crear Parking</button>
    </form>
  );
}

export default ParkingForm;
