import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const WelcomePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-3xl font-semibold">Welcome {session?.user?.name}</h1>
    </div>
  );
};

export default WelcomePage;
