import React from 'react';

const Doctor = ({doctor}) => {
    // console.log(doctor)
    const {image,name,education,experience,
speciality,registrationNumber}=doctor;
    // console.log(education)
    return (
        <div className="card bg-base-100  shadow-lg shadow-gray-400 rounded-xl">
            <figure className="pt-5">
                <img
                src={image}
                alt="Shoes"
                className="rounded-xl w-[300px] h-[250px]" />
            </figure>
            <div className="card-body">
                <div className='flex w-2/3 gap-4'>
                <p className='text-center text-green-500 border border-green-500 rounded-xl'>Available</p>
                <p className='text-center text-blue-500 border border-blue-500 rounded-xl'>{experience}</p>
                </div>
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-400'>{education}</p>
                <p className='text-gray-400'> Reg No : {registrationNumber}</p>
                <div className="card-actions border-t border-dashed">
                </div>
                <button className="btn bg-white text-blue-500 border border-blue-500 rounded-xl">view Details</button>
            </div>
        </div>
    );
};

export default Doctor;