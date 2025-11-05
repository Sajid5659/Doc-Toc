import React, { useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {
    const [showAll , setShowAll]= useState(false);
    // Slice the data: show first 6 if showAll is false
    const doctorsToShow = showAll ? data : data.slice(0, 6);
    return (
        <div className='mx-auto p-5 max-w-7xl mt-10'>
            <h1 className='text-3xl text-center font-bold mt-8'>Our Best Doctors</h1>
            <p className="py-6 text-sm">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                     doctorsToShow.map((doctor) => (
                     <Doctor key={doctor.id} doctor={doctor} />
                ))}
            </div>
            {/* Show button only if more than 6 doctors */}
            {data.length > 6 && (
                <div className="text-center">
                <button onClick={() => setShowAll(!showAll)} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    {showAll ? "Show Less" : "Show All Doctors"}
                </button>
                </div>
            )}
        </div>
    );
};

export default Doctors;