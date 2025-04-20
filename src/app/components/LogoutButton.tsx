"use client";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = () => {
    signOut();
  };

  return <button onClick={handleLogout}>Log Out</button>;
}