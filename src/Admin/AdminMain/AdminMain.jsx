import React from 'react';
import { Outlet } from 'react-router-dom';
export const AdminMain = () => {

  return (
    <div className='bg-gray-950 h-screen font text-white'>
      <Outlet />
    </div>
  )
}
