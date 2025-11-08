import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Helmet>
                <title>Doc Toc | Home</title>
                <meta name="description" content="Your trusted online doctor booking platform" />
            </Helmet>
            <Banner></Banner>
            <Doctors key={data.id} data={data}></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;