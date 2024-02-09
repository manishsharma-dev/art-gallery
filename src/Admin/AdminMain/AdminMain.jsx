import React from 'react'
import { Outlet } from 'react-router-dom'
import { getToken } from "../../Util/AdminHelper"
import Header from "../common/components/Header/Header";
import Sidebar from '../common/components/Sidebar/Sidebar';
export const AdminMain = () => {
  const token = getToken();
  return (
    <>
      {/* {token ?
        <div>
          <Header />
          <Sidebar />
          <Outlet />
        </div>
        :
        <Outlet />} */}
        <Outlet />
    </>
  )
}
