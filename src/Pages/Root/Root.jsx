import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
    const location = useLocation();
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {location.pathname === "/" && <Footer />}
        </div>
    );
};

export default Root;