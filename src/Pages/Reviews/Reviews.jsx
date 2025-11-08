import React from 'react';
import successPng from '../../assets/success-doctor.png';
import reviewPng from '../../assets/success-review.png';
import patientPng from '../../assets/success-patients.png';
import stuffsPng from '../../assets/success-staffs.png';
import CountUp from 'react-countup';

const Reviews = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto p-10 max-w-7xl gap-5'>
            <div className='bg-white flex  flex-col items-center justify-center p-5 gap-2 rounded-2xl'>
                <img src={successPng} alt="" className='w-[50px]'/>
                <h1 className='text-3xl font-bold'><CountUp end={199} duration={3} />+</h1>
                <p className='text-sm'>Total Doctors</p>
            </div>
            <div className='bg-white flex  flex-col items-center p-5 gap-2 rounded-2xl'>
                <img src={reviewPng} alt="" className='w-[50px]'/>
                <h1 className='text-3xl font-bold'><CountUp end={467}  duration={3}/>+</h1>
                <p className='text-sm'>Total Reviews</p>
            </div>
            <div className='bg-white flex  flex-col items-center justify-center p-5 gap-2 rounded-2xl '>
                <img src={patientPng} alt="" className='w-[50px]'/>
                <h1 className='text-3xl font-bold'><CountUp end={1900} duration={3} />+</h1>
                <p className='text-sm text-gray-400'>Patients</p>
            </div>
            <div className='bg-white flex  flex-col items-center justify-center p-5 gap-2 rounded-2xl '>
                <img src={stuffsPng} alt="" className='w-[50px]'/>
                <h1 className='text-3xl font-bold'><CountUp end={300} duration={3}/>+</h1>
                <p className='text-sm'>Total Stuffs</p>
            </div>
            
        </div>
    );
};

export default Reviews;