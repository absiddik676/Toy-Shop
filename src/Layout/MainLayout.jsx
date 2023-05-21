/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../page/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../page/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;