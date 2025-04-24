"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  const handleLogin = () => {
    signIn();
  };

  return <button onClick={handleLogin}>Log In</button>;
}