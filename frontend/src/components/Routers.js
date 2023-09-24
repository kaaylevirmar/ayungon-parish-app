import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Login from '../views/Login';
import Signup from '../views/Signup';
import Dashboard from '../views/Dashboard';
import Schedule from '../views/Schedule';
import MassIntentions from '../views/MassIntentions';

const Routers = () => {
  const location = useLocation();
  const hideSidebarRoutes = ['/login'];

  return (
    <div className='flex flex-row'>
      {/* Conditionally render the Sidebar */}
      {!hideSidebarRoutes.includes(location.pathname) && (
        <div>
          <Sidebar />
        </div>
      )}

      <div className='Content'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/mass-intentions' element={<MassIntentions />} />
        </Routes>
      </div>
    </div>
  );
}

export default Routers;
