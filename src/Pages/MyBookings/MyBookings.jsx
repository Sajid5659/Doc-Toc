import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getAppointedDoctors } from '../../Utility/addtodb';

const MyBookings = () => {
    const allDoctors = useLoaderData();
    const [bookedDoctors, setBookedDoctors]=useState([]);

    useEffect(()=>{
        const storedIds = getAppointedDoctors();
        const convertedIds = storedIds.map(id=>parseInt(id));
        const appointedDoctors = allDoctors.filter((doctor)=>convertedIds.includes(doctor.id));
        setBookedDoctors(appointedDoctors);
    },[]);


    return (
        <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center m-8">My Today Appointments</h1>
      <p className='m-8 text-center text-gray-600'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>

      {bookedDoctors.length === 0 ? (
        <p className="text-center text-gray-500">No appointments booked yet.</p>
      ) : (
        <div className="flex flex-col gap-8 m-8 p-5">
          {bookedDoctors.map((doctor) => (
            <div className='p-5 bg-white rounded-2xl shadow-xl'>
                <h1 className='text-xl font-bold mb-3'>{doctor.name}</h1>
                <div className='text-gray-500 flex justify-between'>
                    <p>{doctor.education}</p>
                    <p> Appointment Fee : {doctor.consultationFee}</p>
                </div>
                <button className='btn border border-red-600 text-red-600 w-full my-3 rounded-xl bg-white'>Cancel appointment</button>
            </div>
          ))}
        </div>
      )}
    </div>
    );
};

export default MyBookings;