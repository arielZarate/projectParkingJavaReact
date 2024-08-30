"use client";
import React, { ChangeEvent, useState, FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import STATUS_VEHICLE from "@/enum/statusVehicle";

import IStatusVehicleProp from "@/interfaces/IStatusVehicle";
import { GrStatusWarning } from "react-icons/gr";

const SelectStatusVehicle: FC = () => {
  const { register, watch } = useForm<IStatusVehicleProp>();

  // Observa el valor seleccionado
  const selectedStatusVehicle = watch("status");

  useEffect(() => {
    if (selectedStatusVehicle) {
      console.log("Selected vehicle type:", selectedStatusVehicle);
      // Aquí puedes manejar el filtro o la lógica que necesites
    }
  }, [selectedStatusVehicle]);

  //==========opcion2 (la vieja y conocida)=============
  /*
  const handleChangeVehicle = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };
*/

  return (
    <div>
      <div className="relative z-20  bg-transparent  md:w-70">
        <label className="mb-1 block text-sm font-medium text-body dark:text-white">
          Estado de Vehiculo
        </label>
        <select
          defaultValue=""
          {...register("status")}
          className={`}z-20 w-70 appearance-none rounded-md border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input 
             dark:text-white dark:focus:border-primary
          md:w-70`}
          //onChange={handleChangeVehicle} //opcion de vieja y conocida
        >
          <option
            value={STATUS_VEHICLE.DEFAULT}
            className="text-body dark:text-bodydark"
          >
            Todos
          </option>
          <option
            value={STATUS_VEHICLE.COMPLETED}
            className="text-body dark:text-bodydark"
          >
            Finalizado ✅
          </option>
          <option
            value={STATUS_VEHICLE.IN_PROGRESS}
            className="text-body dark:text-bodydark"
          >
            En Proceso 🕓
          </option>
          {/**
             <option
            value={STATUS_VEHICLE.CANCELED}
            className="text-body dark:text-bodydark"
          >
            cancelado
          </option>
             */}
        </select>
        <span className="absolute top-10  -translate-x-8 transform">
          <GrStatusWarning
            size={18}
            className="text-secondary dark:text-primary"
          />
        </span>
      </div>
    </div>
  );
};

export default SelectStatusVehicle;
