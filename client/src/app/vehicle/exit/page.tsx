import React from "react";
import FormElements from "@/components/Z-components/FormElements";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

//=================METADATA===============================
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
export const metadata: Metadata = {
  title: "Parking",
  description: "Esta es el formulario de gestiona la  salida de Vehiculos",
};
//=================METADATA===============================
const PageExitVehicle = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Salida de Vehiculos" />
      <FormElements />
    </DefaultLayout>
  );
};

export default PageExitVehicle;
