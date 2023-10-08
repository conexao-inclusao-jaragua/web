import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const PageLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
