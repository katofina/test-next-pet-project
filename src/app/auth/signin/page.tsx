"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}