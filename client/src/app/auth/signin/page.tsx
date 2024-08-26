import React from "react";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SignInForm from "@/components/FomAuth/SignInForm";

export const metadata: Metadata = {
  title: "Parking ",
  description: "inicio de sesion de parking",
};

const SignIn: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Iniciar Sesion" />
      <SignInForm />
    </DefaultLayout>
  );
};

export default SignIn;
