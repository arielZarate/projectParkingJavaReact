import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="min-w-2xl  mx-auto min-h-screen  bg-slate-700 ">
      <div className="p-7 text-center">
        <h1 className=" text-white">
          Contactese con la administracion de parking
        </h1>

        <Link href={"/"}>
          <button
            type="button"
            className=" rounded-md border p-[1px] text-sm text-white hover:text-primary"
          >
            volver
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Contact;
