import React from "react";
import Head from "next/head";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import TransitionEffect from "./TransitionEffect";
import Header from "../sections/Header";
import ScrollingContent from "../sections/ScrollingContent";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Sustained - 2024</title>
        <meta
          name="description"
          content="Conference Website - Sustained-2024"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        {/* <ScrollingContent /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
