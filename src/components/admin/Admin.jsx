import React from "react";
import { Outlet } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import AdminHeader from "./header/AdminHeader.jsx";
import "./Admin.scss";

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <Scrollbars
        style={{ height: "100vh" }}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={500}
      >
        <Outlet />
      </Scrollbars>
    </div>
  );
};

export default Admin;
