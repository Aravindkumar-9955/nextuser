// components/Layout.js
import React from 'react';
import { useRouter } from 'next/router';

import HomePage from './Homepage'
import Dashboard from './Dashbord/dashbord';
import Profile from './Profile';

const Layout = ({ children }) => {
  const router = useRouter();
  const userRole = 'admin'; // Example: 'admin', 'user', or 'default'

  const renderComponent = () => {
    switch (router.pathname) {
      case '/admin':
        return userRole === 'admin' ? <Profile /> : null;
      case '/homepage':
        return userRole === 'admin' ? <HomePage /> : null;
      case '/homepage':
        return userRole === 'user' ? <HomePage /> : null;
      case '/dashboard':
        return userRole === 'user' ? <Dashboard /> : null;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>hi i am sidebar</div>
      {renderComponent() || children}
    </div>
  );
};

export default Layout;
