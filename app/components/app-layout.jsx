import React from "react";
import ScrollTopButton from "./scroll-top-button";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import WhatsAppButton from "./whatsapp-button";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      {/* <ScrollTopButton /> */}
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default AppLayout;
