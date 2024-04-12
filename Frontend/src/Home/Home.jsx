import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Freebook from "../component/Freebook";
import Banner from "../component/Banner";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
};

export default Home;
