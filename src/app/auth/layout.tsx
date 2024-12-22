import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-screen items-center justify-center bg-sky-600">
      {children}
    </div>
  );
};

export default AuthLayout;
