/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../page/shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;