"use client";
import React from "react";
//import ECommerce from "@/components/Dashboard/E-commerce";
import TableParking from "@/components/Vehicle/Tableparkig";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
type Props = {};
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

//===============METADATA=======================

/*
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parking", // Título general
  description: "Panel de control de parking", // Descripción general del sitio
};
*/

//===================================

const Home = (props: Props) => {
  //TODO:solo en el home necesitare acceso al contexto global de los parkings
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
