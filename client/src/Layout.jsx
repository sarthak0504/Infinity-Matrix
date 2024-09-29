// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx'; // Assuming your header is in the components folder

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
