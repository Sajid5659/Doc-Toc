import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "My Bookings", to: "/myBookings" },
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  // Function to handle active link styling
  const getLinkClass = (isActive) =>
      isActive? "text-blue-500 underline": "text-gray-800 hover:text-blue-500";
  

  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      
      <nav className="grid grid-flow-col gap-4 font-bold">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => getLinkClass(isActive)}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <nav className="mt-4">
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="https://github.com/Sajid5659"
            className="hover:text-gray-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/md.shajedul.5686/"
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/"    className="hover:text-pink-500"><FaInstagram />
          </a>
        </div>
      </nav>

      <aside className="mt-4">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
