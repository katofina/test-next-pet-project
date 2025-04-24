"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ redirect: false });
    redirect("/");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        maxWidth: "100px",
      }}
    >
      Log Out
    </button>
  );
}
