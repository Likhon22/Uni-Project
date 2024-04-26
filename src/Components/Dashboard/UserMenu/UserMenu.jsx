import { NavLink } from "react-router-dom";
import "../dashboard.css";

const UserMenu = () => {
  return (
    <div className="flex flex-col gap-5" id="menu">
      <NavLink to={"/dashboard/user-profile"}>User Profile</NavLink>
      <NavLink to={"/dashboard/order-status"}>Order Status</NavLink>
      <NavLink to={"/dashboard/user-rating"}>User Rating</NavLink>
    </div>
  );
};

export default UserMenu;
