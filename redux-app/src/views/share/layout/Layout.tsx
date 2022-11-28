import React from 'react';
import Navbar from '../../pages/components/nav-bar/Navbar';
import {Outlet } from "react-router-dom";


function Layout() {
    return (
        <div className="container">
            <Navbar></Navbar>
            <hr/>
            <Outlet />
        </div>
    );
}

export default Layout;
