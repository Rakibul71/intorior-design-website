import React from "react";
import Slider from "./Slider/Slider";
import Clients from "./Clients/Clients";
import Team from "./Team/Team";
import Aim from "./Aim/Aim";
import Footer from "./Footer/Footer";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Slider />
      {/* <Team /> */}
      {/* <Clients /> */}
      {/* <Aim /> */}
      <Hero></Hero>
      <Footer />
    </>
  );
};

export default Home;
