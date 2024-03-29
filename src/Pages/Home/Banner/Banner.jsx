import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <img className=" h-[800px] w-full" src={banner} alt="" />
      <div className="absolute bg-black   w-full bottom-0 top-0 bg-opacity-50    flex items-center justify-center    px-4 hover:w-full">
        <div>
          <h2 className=" text-xl md:text-2xl lg:text-4xl text-cyan-400 font-medium uppercase text-center mb-4  ">
            Fight against hunger donate food today
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-extrabold text-white text-center">
            Build a Beautiful World
          </h2>
          <div className=" text-center">
            <Link to="/add">
              <button className="btn btn-accent rounded-full mt-8 text-white">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
