import React from 'react';
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout