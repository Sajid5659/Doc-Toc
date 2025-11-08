import React from 'react';
import { useLoaderData } from 'react-router'; 
import Blog from '../Blog/Blog'; 
import { Helmet } from 'react-helmet-async';
const Blogs = () => { 
    const data = useLoaderData(); 
    return ( 
    <div className='bg-gray-200 p-5 mx-auto'>
        <Helmet>
            <title>Doc Toc | Blogs</title>
        </Helmet>
         <h1 className='text-center text-4xl font-bold bg-white p-2 mx-8'>Blogs</h1> 
         <div className='p-8 flex flex-col gap-8'>
             { data.map((blog)=>
                <Blog key={blog.id} blog={blog}></Blog>
                ) 
             } 
         </div> 
    </div> 
 ); 
 };
 export default Blogs;