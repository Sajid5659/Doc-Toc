import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Doctors from '../Doctors/Doctors';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Doctors key={data.id} data={data}></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;