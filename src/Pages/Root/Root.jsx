import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
    const location = useLocation();
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
    setLoading(true);
    // simulate small loading delay when route changes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5s spinner

    return () => clearTimeout(timer);
  }, [location.pathname]);
    return (
        <div className='bg-gray-200'>
            <Navbar></Navbar>
            {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                <div className="w-16 h-16 border-4 border-dashed border-gray-400 gap-2 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <Outlet />
            )}
            {location.pathname === "/" && <Footer />}
        </div>
    );
};

export default Root;