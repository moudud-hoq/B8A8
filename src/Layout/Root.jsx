import { Outlet } from "react-router-dom";
import NavBar2 from "../Pages/Shared/NavBar/NavBar2";

const Root = () => {
  return (
    <div>
      <NavBar2 />
      <Outlet />
    </div>
  );
};

export default Root;
