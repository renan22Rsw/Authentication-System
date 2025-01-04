import LoginForm from "@/components/auth/login-form";
import React from "react";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/welcome");
  }

  return <LoginForm />;
};

export default LoginPage;
