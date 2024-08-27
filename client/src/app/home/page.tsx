import React from "react";
//import ECommerce from "@/components/Dashboard/E-commerce";
import TableParking from "@/components/Tables/Tableparkig";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
type Props = {};

//===============METADATA=======================

import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Parking", // Título general
  description: "Panel de control de parking", // Descripción general del sitio
};

//===================================

const Home = (props: Props) => {
  return (
    <div>
      <DefaultLayout>
        <Breadcrumb pageName="Listado de Parking" />
        <TableParking />
      </DefaultLayout>
    </div>
  );
};

export default Home;
