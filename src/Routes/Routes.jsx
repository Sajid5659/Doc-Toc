import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';

import MyBookings from '../Pages/MyBookings/MyBookings';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';

export const router= createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children : [
      {
        index: true,
        loader: ()=>fetch('doctorsData.json'),
        path:'/',
        element:<Home/>
      },
      {
        path:'/blogs',
        loader:()=>fetch('blogs.json'),
        element:<Blogs/>
      },
      {
        path:'/contact',
        element:<ErrorPage/>
      },
      {
        path:'/doctorDetails/:id',
        loader: ()=>fetch('doctorsData.json'),
        element:<DoctorDetails/>
      },
      {
        path:'/myBookings',
        loader:()=>fetch('doctorsData.json'),
        element:<MyBookings/>
      }
    ]
  },
]);


