"use client";

import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";
import { LinkWithStyles } from "./components/LinkWithStyles";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.page}>
      <p>Main page</p>
      <p>
        Page with redirect: <LinkWithStyles href="/dashboard" text="Dashboard"/>
      </p>
      {session ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
