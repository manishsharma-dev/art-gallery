import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "./AdminMain.scss";
export const AdminMain = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Outlet />
      </div>
    </div>
  );
};
