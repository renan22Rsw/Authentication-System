import React from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/navbar";
import UserInfo from "@/components/userInfo";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import UserImage from "@/components/user-image";

import noPicture from "../../../public/no-user-picture.jpg";
import { existingUser } from "@/actions/idUser";

const WelcomePage = async () => {
  const session = await auth();
  const idUser = await existingUser(session?.user?.id as string);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <NavBar />

      <main className="flex h-screen flex-col items-center justify-center space-y-4">
        <UserInfo user={session.user?.name as string} />
        {idUser.sucess ? (
          <Link href={"/settings"}>
            <Button>Settings</Button>
          </Link>
        ) : null}
        <UserImage
          img={session.user?.image ? (session.user.image as string) : noPicture}
        />
      </main>
    </>
  );
};
export default WelcomePage;
