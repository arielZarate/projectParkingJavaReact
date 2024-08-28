import React from "react";

import { TYPE_VEHICLE } from "@/enum/typeVehicle";
import { Color } from "@/enum/colorVehicle";
interface Props {}

const EntryVehicleForm = (props: Props) => {
  return (
    <>
      <div className="flex justify-start md:ml-20 lg:ml-20">
        <div className="w-full max-w-lg">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full ">
              <div className="my-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="flex items-start justify-between rounded-t border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="text-xl font-semibold">Crear Parking</h3>
                </div>

                <div className="mx-auto space-y-6 p-10">
                  <form action="#">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="licencePlate"
                          className="text-gray-900 mb-2 block text-sm font-medium"
                        >
                          Patente
                          <span className="mx-2 font-bold text-danger">
                            * requerido
                          </span>
                        </label>
                        <input
                          type="text"
                          name="licencePlate"
                          id="licencePlate"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-slate-700 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:text-white dark:focus:border-primary"
                          placeholder="AXXX-XXX"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <h2 className="text-gray-900 mb-2 block text-sm font-medium">
                          Tipo de Vehiculo
                          <span className="mx-2 font-bold text-danger">
                            * requerido
                          </span>
                        </h2>

                        <div className="flex gap-x-0.5 rounded-lg border-[1.5px] border-stroke bg-transparent p-1 dark:border-form-strokedark">
                          <div className="mr-0.5">
                            <label className="bg-gray-100 my-1 flex cursor-pointer rounded-md px-1 py-1 text-slate-700 hover:bg-slate-200 dark:hover:bg-graydark">
                              <input
                                type="radio"
                                name="typeVehicle"
                                value={TYPE_VEHICLE.CAR}
                                className="accent-green-500"
                              />
                              <i className="pl-1">Auto</i>
                            </label>
                            <label className="bg-gray-100 my-1 flex cursor-pointer rounded-md px-1 py-1 text-slate-700 hover:bg-slate-200 dark:hover:bg-graydark">
                              <input
                                type="radio"
                                name="typeVehicle"
                                value={TYPE_VEHICLE.MOTORCYCLE}
                                className="accent-green-500"
                              />
                              <i className="pl-1">Motocicleta</i>
                            </label>
                          </div>
                          <div>
                            <label className="bg-gray-100 my-1 flex cursor-pointer rounded-md py-1 text-slate-700 hover:bg-slate-200 dark:hover:bg-graydark ">
                              <input
                                type="radio"
                                name="typeVehicle"
                                value={TYPE_VEHICLE.BICYCLE}
                                className="accent-green-500"
                              />
                              <i className="pl-1">Bicicleta</i>
                            </label>

                            <label className="bg-gray-100 my-1 flex cursor-pointer rounded-md py-1 text-slate-700 hover:bg-slate-200 dark:hover:bg-graydark ">
                              <input
                                type="radio"
                                name="typeVehicle"
                                value={TYPE_VEHICLE.TRUCK}
                                className="accent-green-500"
                              />
                              <i className="pl-1">Utilitario</i>
                            </label>
                          </div>
                        </div>

                        {/** */}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="color"
                          className="text-gray-900 mb-2 block text-sm font-medium"
                        >
                          Color de vehiculo
                          <span className="mx-2 font-medium text-warning">
                            (Opcional)
                          </span>
                        </label>

                        <select
                          name="color"
                          id="color"
                          className="w-52 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-slate-600 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary   lg:w-100"
                        >
                          <option value="" disabled selected>
                            Elija color de vehículo
                          </option>
                          {Object.entries(Color).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="col-span-full">
                        <label
                          htmlFor="note"
                          className="text-gray-900 mb-2 block text-sm font-medium"
                        >
                          Descripción{" "}
                          <span className="mx-1 font-medium text-warning">
                            (Opcional)
                          </span>
                        </label>
                        <textarea
                          id="note"
                          name="note"
                          rows={3}
                          placeholder="Ingrese una descripción si es necesario"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-slate-700 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        ></textarea>
                      </div>
                    </div>

                    <div className="relative mt-8">
                      <div className="absolute left-0 right-0 -mx-10 border-t border-stroke dark:border-strokedark"></div>
                    </div>
                    <div className="flex justify-start  py-4">
                      <button
                        className="text-medium rounded-lg bg-primary px-5 py-2.5 text-center font-medium text-white hover:font-semibold hover:opacity-80 focus:ring-4 focus:ring-green-700"
                        type="submit"
                      >
                        Crear Parking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** */}
    </>
  );
};
//border-gray-200 rounded-b border-t border-stroke px-6.5 py-4 dark:border-strokedark
export default EntryVehicleForm;
