"use client";

import { Button } from "./ui/button";
import { signOutAction } from "./sign-out-buttom";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="m-4 flex items-center justify-between">
      <h1 onClick={() => router.push("/")} className="cursor-pointer">
        Home
      </h1>
      <Button onClick={() => signOutAction()}>Sign Out</Button>
    </nav>
  );
};

export default NavBar;
