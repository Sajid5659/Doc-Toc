import React from 'react';
import bannerImg from '../../assets/banner-img-1.png';

const Banner = () => {
    return (
        <div className="mx-auto mt-5 max-w-7xl flex flex-col p-8 bg-white shadow-xl rounded-xl">
            <div className="hero-content text-center">
                <div className="max-w-mid px-10">
                <h1 className="text-3xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
                <p className="py-6 text-sm">
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
                <div className='flex gap-4 p-10 items-center justify-center '>
                    <input className='bg-white w-2/3 rounded-lg border border-black p-2' type="search" placeholder='Search any doctor' />
                    <button className="btn btn-primary">Search Now</button>
                </div>
                </div>
            </div>
            <div className='flex justify-between my-5'>
                <img className='shadow-gray-400 shadow-lg' src={bannerImg} alt="" />
                 <img className='shadow-gray-400 shadow-lg' src={bannerImg} alt="" />        
            </div>
        </div>
    );
};

export default Banner;