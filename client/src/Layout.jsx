// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx'; // Assuming your header is in the components folder
import Footer from './components/Footer/Footer.jsx'; // Assuming your footer is in the components folder

const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet />
    </div>
  );
};

export default Layout;
