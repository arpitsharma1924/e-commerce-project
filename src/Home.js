import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Service from "./components/Service";
import FeatureProducts from "./components/FeatureProducts";

const Home = () => {
  const data = {
    name: "E'Store",
  };
  return (
    <>
      <HeroSection mydata={data} />
      <FeatureProducts />
      <Service />
      <Trusted />
    </>
  );
};

export default Home;
