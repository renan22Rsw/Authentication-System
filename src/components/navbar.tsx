"use client";

import { Button } from "./ui/button";
import { signOutAction } from "./sign-out-buttom";

const NavBar = () => {
  return (
    <nav className="m-4 flex items-center justify-between">
      <h1>Home</h1>
      <Button onClick={() => signOutAction()}>Sign Out</Button>
    </nav>
  );
};

export default NavBar;
