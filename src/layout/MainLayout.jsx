import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import images from "../assets/images";

const MainLayout = () => {
  return (
    <Fragment>
      <div className="translator-wrap" style={{ display: "block !important" }}>
        <img src={images.globe} alt="" />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default MainLayout;
