import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SigUpForm from "@/components/FomAuth/SigUpForm";

export const metadata: Metadata = {
  title: "Next.js SignUp Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

const SignUp: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Registro" />

      <SigUpForm />
    </DefaultLayout>
  );
};

export default SignUp;
