"use client";

import { Box } from "@/app/components/Box";
import { LinkWithStyles } from "@/app/components/LinkWithStyles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignIn() {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session]);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("google", {redirect: false});
      if (result?.ok) {
        router.push("/dashboard")
      } else if (result?.error) {
        setError("Something is wrong, please try again");
      }
    } catch (err) {
      console.error(err);
      setError("Something is wrong, please try again");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box>
      <h1>Sign In</h1>
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        style={{
          cursor: loading ? "none" : "pointer",
          maxWidth: "150px"
        }}
      >
        {loading ? "Signing in..." : "Sign in via Google"}
      </button>
      <br></br>
      <LinkWithStyles href="/" text="Back to Home"/>
    </Box>
  );
}
