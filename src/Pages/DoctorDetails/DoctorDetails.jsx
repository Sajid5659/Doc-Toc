import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb, getAppointedDoctors } from '../../Utility/addtodb';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const DoctorDetails = () => {
    const {id}=useParams();
    const doctorId = parseInt(id);
    const data = useLoaderData();
    const singleDoc = data.find(doctor => doctor.id==doctorId);
    console.log(singleDoc);

    const [isBooked, setIsBooked]= useState(false);

    useEffect(()=>{
        const storedIds = getAppointedDoctors().map(id => parseInt(id)); 
        if (storedIds.includes(doctorId)) {
            setIsBooked(true);
        }
    },[])

    const handleAppointment =(id)=>{
        addToStoreDb(id);
        setIsBooked(true);
        toast.success("Appointment booked successfully!");
    }

    const {image,education,experience,name,registrationNumber,speciality,hospital,availability,consultationFee} = singleDoc;
    return (
        <div className='bg-gray-200 min-h-screen'>
            <Helmet>
                <title>Doc Toc | Doctor - {name} Details</title>
            </Helmet>
            <div className='text-center rounded-2xl shadow-xl p-6 m-8 bg-white '>
                <h1 className='text-3xl font-bold mb-5'>Doctor's profile Details</h1>
                <p className='text-sm text-gray-500'>Our experienced doctors are here to provide trusted care and expert guidance for your health.</p>
            </div>
            <div className="card card-side bg-white shadow-xl m-8 p-5">
                <figure className='w-1/3 rounded-xl'>
                    <img src={image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{education}</p>
                    <p>{speciality}</p>
                    <p>Working at : {hospital}</p>
                    <p className='border-y border-dashed border-gray-400 my-3'>Reg No : {registrationNumber}</p>
                    <div className='flex gap-2 flex-wrap my-3'>
                            <p className="font-medium text-xl">Available : </p>
                            {
                            availability.map((available,index)=>(
                                <p key={index}className='text-orange-400 border border-orange-300 p-1 rounded-xl text-sm text-center'>{available}</p>
                            ))
                        }
                    </div>
                    <p className='text-blue-600 font-bold'>Consultation Fee :{consultationFee}</p>
                </div>
            </div>
            <div className='bg-white m-8 p-5 rounded-2xl shadow-xl'>
                <h1 className='text-center text-2xl font-bold'>Book an Appointment</h1>
                <div>
                    {/* <p>Availability</p> */}
                    <button
                    onClick={() => handleAppointment(id)}
                    disabled={isBooked}
                    className={`btn w-full my-4 rounded-2xl ${isBooked ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-blue-600 text-white'}`}
                    >
                    {isBooked ? "Already Booked": "Book Appointment"}
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;