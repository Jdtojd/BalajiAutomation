import React from "react";
import Error404 from "../Components/Error404";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Error = () => {
  return (
    <>
    <Navbar/>
      <Error404/>
      <Footer/>
    </>
  );
};

export default Error;
