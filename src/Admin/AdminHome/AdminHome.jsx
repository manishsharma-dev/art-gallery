import { Route, Routes } from 'react-router-dom';
import Header from "../common/components/Header/Header";
import Sidebar from "../common/components/Sidebar/Sidebar";
import Dashboard from "../pages/dashboard/Dashboard";
import React from 'react'

function AdminHome() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        <Dashboard />
      </div>
      <Routes>
        <Route path='/admin' Component={Dashboard} />
      </Routes>
    </div>
  )
}

export default AdminHome
