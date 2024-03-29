import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Register = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <div className="md:w-3/5 mx-4 md:mx-auto items-center my-20 py-16 bg-cyan-400 rounded-xl">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-white">
            Register now!
          </h1>
        </div>
        <div className="card md:w-3/4  lg:w-1/2  shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <div className="flex items-center relative">
                <input
                  type={toogle ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
                {toogle ? (
                  <AiOutlineEyeInvisible
                    onClick={() => setToggle(!toogle)}
                    className="relative right-6 cursor-pointer"
                  ></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye
                    onClick={() => setToggle(!toogle)}
                    className="relative right-6 cursor-pointer"
                  ></AiOutlineEye>
                )}
              </div>
            </div>
            <div className="form-control mt-3">
              <button
                type="submit"
                className="btn btn-secondary bg-cyan-400 hover:bg-cyan-600 border-none "
              >
                Register
              </button>
            </div>
          </form>

          <p className="text-center mx-6 md:mx-0 mb-4">
            Already have an account? Please{" "}
            <NavLink
              to="/login"
              className="text-blue-700 hover:border-b border-black"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
