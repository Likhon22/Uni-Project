import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../Components/Loader/Loader";
const DonorRouter = ({ children }) => {
  const [role, loading] = useRole();
  if (loading) {
    return <Loader></Loader>;
  }
  if (role === "user") {
    return <Navigate to={"/dashboard/user-profile"}></Navigate>;
  }
  if (role === "admin") {
    return <Navigate to={"/dashboard/admin-profile"}></Navigate>;
  }

  return children;
};

export default DonorRouter;
