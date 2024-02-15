import React from 'react';
import { Outlet } from 'react-router-dom';
export const AdminMain = () => {

  return (
    <div className='body-dark'>
      <Outlet />
    </div>

  )
}
