import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormLayout from "@/components/Z-components/FormLayout";

//=================METADATA===============================
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Parking",
  description: "Esta es el formulario de gestiona la entrada de Vehiculos",
};
//=================METADATA===============================

const PageEntryVehicle = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Ingreso de Vehiculos" />
      <FormLayout />
    </DefaultLayout>
  );
};

export default PageEntryVehicle;
