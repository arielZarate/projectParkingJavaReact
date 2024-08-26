import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import TableParking from "@/components/Tables/Tableparkig";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Parking",
  description: "Listado de parking",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Listado de Parking" />

      <div className="flex flex-col gap-10">
        <TableParking />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
