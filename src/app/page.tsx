"use client"

import Link from "next/link";
import styles from "./page.module.css";
import { SessionProvider } from "next-auth/react";

export default function Home() {

  return (
    <SessionProvider>
      <div className={styles.page}>
        <p>Main page</p>
        <p>
          Page with redirect: <Link href="/dashboard">Dashboard</Link>
        </p>
      </div>
    </SessionProvider>
  );
}
