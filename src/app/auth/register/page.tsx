import React from "react";
import RegisterForm from "@/components/auth/register-form";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/welcome");
  }

  return <RegisterForm />;
};

export default RegisterPage;
