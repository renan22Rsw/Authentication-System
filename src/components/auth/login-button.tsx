"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  asChild,
  mode = "redirect",
}: LoginButtonProps) => {
  const router = useRouter();

  if (mode === "modal") {
    return <span>TODO: implement modal</span>;
  }

  const clickAction = () => {
    router.push("/auth/login");
  };

  return (
    <span onClick={clickAction} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
