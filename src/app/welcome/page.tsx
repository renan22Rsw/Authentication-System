import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/navbar";
import UserInfo from "@/components/userInfo";

const WelcomePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <NavBar />
      <UserInfo user={session.user?.name as string} />
    </>
  );
};

export default WelcomePage;
