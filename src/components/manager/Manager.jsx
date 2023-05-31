import React from "react";
import { Outlet } from "react-router-dom";
// import { Scrollbars } from "react-custom-scrollbars-2";
import ManagerHeader from "./header/ManagerHeader";
import "./Manager.scss";

const Manager = () => {
  return (
    <div>
      <ManagerHeader />
      {/* <Scrollbars
        style={{ height: "100vh" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={500}
      > */}
      <Outlet />
      {/* </Scrollbars> */}
    </div>
  );
};

export default Manager;
