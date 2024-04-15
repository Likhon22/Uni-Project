import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Container from "../../Components/Container";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/available">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/add-food">Add Food</NavLink>
      </li>
      <li>
        <NavLink to="/manage">Manage My Foods</NavLink>
      </li>
      <li>
        <NavLink to="/request">My Food Request</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-cyan-300 text-white">
      <Container>
        <nav className="navbar   ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-blue-950 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#fb8300] font-bold text-3xl">Zero</p>
              <p className="text-blue-950 font-medium">Hunger</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg gap-2 text-blue-950 py-4">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <div>
              <Link to="/login">
                <button className="btn">Login</button>
              </Link>
            </div>

            {/* <div className="flex items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[60px] h-[60px] rounded-full" src="" alt="" />
            <h2 className="text-white font-medium">{users?.displayName}</h2>
          </div>
          <button className="btn">Logout</button> */}
            {/* </div> */}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
