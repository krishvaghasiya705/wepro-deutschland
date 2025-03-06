"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import Header from "./common/header";
import Footer from "./common/footer";
import Loader from "@/components/loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => setLoading(false);
    const timer = setTimeout(handleComplete, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html>
      <Head>
        <meta name="description" content="This is a test application." />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />
        <main className="layout-main">{loading ? <Loader /> : children}</main>
        <Footer />
      </body>
    </html>
  );
}
