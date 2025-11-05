import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {location.pathname === "/" && <Footer />}
        </div>
    );
};

export default Root;