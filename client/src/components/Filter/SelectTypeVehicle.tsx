"use client";
import React, { ChangeEvent, useState, FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import TYPE_VEHICLE from "@/enum/typeVehicle";
import { FaParking } from "react-icons/fa";
import ITypeVehicleProp from "@/interfaces/ITypeVehicleProp";

const SelectTypeVehicle: FC = () => {
  const { register, watch } = useForm<ITypeVehicleProp>();

  // Observa el valor seleccionado
  const selectedTypeVehicle = watch("typeVehicle");

  useEffect(() => {
    if (selectedTypeVehicle) {
      console.log("Selected vehicle type:", selectedTypeVehicle);
      // Aquí puedes manejar el filtro o la lógica que necesites
    }
  }, [selectedTypeVehicle]);

  //==========opcion2 (la vieja y conocida)=============
  /*
  const handleChangeVehicle = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };
*/

  return (
    <div className="relative z-20  bg-transparent  md:w-70">
      <label className="mb-1 block text-sm font-medium text-body dark:text-white">
        Tipo de Vehiculo
      </label>
      <select
        defaultValue=""
        {...register("typeVehicle")}
        className={`}z-20 w-70 appearance-none rounded-md border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input 
             dark:text-white dark:focus:border-primary
          md:w-70`}
        //onChange={handleChangeVehicle} //opcion de vieja y conocida
      >
        <option
          value={TYPE_VEHICLE.DEFAULT}
          className="text-body dark:text-bodydark"
        >
          Todos
        </option>
        <option
          value={TYPE_VEHICLE.CAR}
          className="text-body dark:text-bodydark"
        >
          Auto 🚗
        </option>
        <option
          value={TYPE_VEHICLE.MOTORCYCLE}
          className="text-body dark:text-bodydark"
        >
          Moto 🏍️
        </option>
        <option
          value={TYPE_VEHICLE.TRUCK}
          className="text-body dark:text-bodydark"
        >
          Utilitario 🚚
        </option>
        <option
          value={TYPE_VEHICLE.BICYCLE}
          className="text-body dark:text-bodydark"
        >
          Bicicleta 🚲
        </option>
      </select>
      <span className="absolute top-10  -translate-x-8 transform">
        <FaParking size={18} className="text-secondary dark:text-primary" />
      </span>
    </div>
  );
};

export default SelectTypeVehicle;
