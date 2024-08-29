import React from "react";
import { FaSearch } from "react-icons/fa";
type Props = {};

const SearchBar = (props: Props) => {
  return (
    <>
      <div className="hidden sm:block">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2">
              <FaSearch
                size={20}
                className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              />
            </button>

            <input
              type="text"
              placeholder="Buscar parking"
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
