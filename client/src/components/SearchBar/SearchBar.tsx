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
      searchParking(data.licencePlate);
    } catch (error) {
      handleServiceError(error);
    }
  };

  return (
    <>
      <div className="sm:block">
        <form onSubmit={handleSubmit(findParking)}>
          <div className="relative">
            <button className="absolute top-2 mx-1 px-2">
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
      </div>
    </>
  );
};

export default SearchBar;
