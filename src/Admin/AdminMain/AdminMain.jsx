import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import "./AdminMain.scss";
import { Navbar } from "../components/Navbar/Navbar";
export const AdminMain = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
