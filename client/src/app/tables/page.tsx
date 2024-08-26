import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import TableParking from "@/components/Tables/Tableparkig";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Parking System Manager",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableParking />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
