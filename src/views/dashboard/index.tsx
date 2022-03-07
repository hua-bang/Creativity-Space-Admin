import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Demo from './subViews/demo';
import Home from './subViews/home';


const DashBoard: React.FC = () => {
  console.log('dashBoard');

  return (
    <div>
      DashBoard
      <div>
        <Routes>
          <Route
            path='demo'
            element={<Demo />}
          />
          <Route
            path='home'
            element={<Home />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;