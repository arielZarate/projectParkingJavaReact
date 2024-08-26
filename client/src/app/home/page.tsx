import React from "react";
//import ECommerce from "@/components/Dashboard/E-commerce";
import TableParking from "@/components/Tables/Tableparkig";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
type Props = {};

export const metadata: Metadata = {
  title: "Parking Cars",
  description: "",
};

const Home = (props: Props) => {
  return (
    <div>
      <DefaultLayout>
        <TableParking />
      </DefaultLayout>
    </div>
  );
};

export default Home;
