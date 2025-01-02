import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-sky-600">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Welcome Back!
        </h1>
        <p className="text-lg text-white">Your secure authentication portal</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
