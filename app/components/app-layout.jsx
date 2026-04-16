import React from "react";
import ScrollTopButton from "./scroll-top-button";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default AppLayout;
