import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";

import handleServiceError from "@/utils/handleServiceError";
import useHookParkingContext from "@/context/parking/useHookParkingContext";

type Props = {};
interface SearchProp {
  licencePlate: string;
}

const SearchBar = (props: Props) => {
  const { searchParking } = useHookParkingContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchProp>();

  const findParking = (data: SearchProp) => {
    try {
      console.log(data.licencePlate);
      // searchParking(data.licencePlate);
    } catch (error) {
      handleServiceError(error);
    }
  };

  return (
    <>
      {/** <div className="sm:block">
        <form onSubmit={handleSubmit(findParking)}>
          <div className="relative">
            <button className="absolute top-2 mx-1 w-40 px-2">
              <FaSearch
                size={20}
                className="fill-body  hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                type="submit"
              />
            </button>

            <input
              type="text"
              placeholder="Buscar por matricula"
              className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-4 font-medium focus:outline-none xl:w-125"
              {...register("licencePlate", {
                required: "Puede ingresar una licencia",
              })}
            />
            {errors.licencePlate && (
              <span className="mx-2 rounded-md  py-2 text-center text-sm text-slate-400">
                {errors.licencePlate.message}
              </span>
            )}
          </div>
        </form>
      </div> */}

      <form onSubmit={handleSubmit(findParking)}>
        <label className="mb-1 block text-sm font-medium text-body dark:text-white">
          Busqueda por matricula
        </label>
        <div className="flex w-96 rounded-lg border border-stroke bg-transparent outline-none  transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input   dark:text-white dark:hover:border-primary  md:w-96">
          <button
            type="submit"
            className=" rounded-lg border border-stroke bg-transparent px-3 outline-none transition  focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white   md:px-3 md:py-0 "
          >
            <FaSearch
              size={20}
              className="  hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              type="submit"
            />
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            className="h-12 rounded-lg bg-transparent px-3 font-medium  focus:outline-none  md:w-80 "
            {...register("licencePlate", {
              required: "Ingrese matricula",
            })}
          />

          {errors.licencePlate && (
            <span className="mx-2 text-center text-[14px] text-secondary dark:text-primary ">
              {errors.licencePlate.message}
            </span>
          )}
        </div>
      </form>
    </>
  );
};

export default SearchBar;
