//import ECommerce from "@/components/Dashboard/E-commerce";
import ECommerce from "@/components/Tables/Tableparkig";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Parking Cars",
  description: "",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/**aca debe estar el login y si inicio sesion se va al dashboard */}
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
