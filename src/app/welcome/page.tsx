import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/navbar";
import UserInfo from "@/components/userInfo";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const WelcomePage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  console.log(session.user);

  return (
    <>
      <NavBar />

      <main className="flex h-screen flex-col items-center justify-center space-y-4">
        <UserInfo user={session.user?.name as string} />
        <Link href={"/settings"}>
          <Button>Settings</Button>
        </Link>
      </main>
    </>
  );
};
export default WelcomePage;
