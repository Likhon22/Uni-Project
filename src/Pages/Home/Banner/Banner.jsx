import { Link } from "react-router-dom";
import banner from "../../../assets/donation.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

import Container from "./../../../Components/Container";

const Banner = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <Container>
        {" "}
        <div className="flex pt-24 items-center justify-center gap-14">
          <div className="flex-1">
            <h2 className="text-[#fb8300] font-bold text-4xl">Be The Reason</h2>
            <h3 className="font-bold text-4xl text-blue-950 mt-4">
              Someone Smiles Today!
            </h3>
            <p className="my-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              quaerat error doloremque sit quia, a consequuntur unde, provident
              at ipsa laudantium assumenda quo dolore ex dignissimos eos iure
              tenetur illo? Totam a aliquam fuga adipisci deleniti iure repellat
              inventore soluta modi ut ex libero sint alias excepturi blanditiis
              voluptatum, voluptatem beatae eos illum expedita quas et sit
              cumque asperiores? Ratione!
            </p>
            <button className="btn bg-blue-950 rounded-full text-white border-none hover:bg-blue-900">
              Donate Now{" "}
              <FaArrowAltCircleRight className="text-xl "></FaArrowAltCircleRight>
            </button>
          </div>
          <div className="flex-1">
            <img src={banner} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
