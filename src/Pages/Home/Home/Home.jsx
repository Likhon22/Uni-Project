import React from "react";
import Rating from "../Rating/Rating";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../../../Components/WhyChooseUS.JSX";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Rating></Rating>
    </div>
  );
};

export default Home;
