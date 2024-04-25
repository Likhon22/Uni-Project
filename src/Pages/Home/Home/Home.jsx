import React from "react";
import Rating from "../Rating/Rating";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../../../Components/WhyChooseUS.JSX";
import SatisfiedSection from "../../../Components/SatisfiedSection/SatisfiedSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <SatisfiedSection></SatisfiedSection>
      <Rating></Rating>
    </div>
  );
};

export default Home;
