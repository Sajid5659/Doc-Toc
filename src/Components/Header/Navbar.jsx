import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../../src/assets/logo.png';

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "My Bookings", to: "/bookings" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contacts", to: "/contact" },
  ];

  const getNavLinkClass = (isActive) =>
    isActive ? "text-blue-500 underline mr-5" : "mr-5 text-gray-800 hover:text-blue-500";

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
      <div className="navbar-start flex items-center gap-2">
        <img className="w-[25px]" src={logo} alt="Doc Toc Logo" />
        <p className="text-xl font-bold">Doc Toc</p>
      </div>

      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 font-semibold flex items-center">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={({ isActive }) => getNavLinkClass(isActive)}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
