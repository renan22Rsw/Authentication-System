"use client";

import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { signIn } from "next-auth/react";

const Social = () => {
  return (
    <div className="flex w-full items-center justify-center gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>

      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => signIn("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;
