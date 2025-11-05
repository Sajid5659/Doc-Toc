import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';

export const router= createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        index: true,
        loader: ()=>fetch('doctorsData.json'),
        path:'/',
        Component:Home
      },
      {
        path:'/blogs',
        loader:()=>fetch('blogs.json'),
        Component:Blogs
      },
      {
        path:'/contact',
        Component:ErrorPage
      }
    ]
  },
]);


