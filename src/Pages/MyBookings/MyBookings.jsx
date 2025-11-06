import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getAppointedDoctors, removeFromStoreDb } from '../../Utility/addtodb';
import { ToastContainer, toast } from 'react-toastify';
import { BarChart,Bar, XAxis, YAxis,CartesianGrid,Tooltip,ResponsiveContainer,Cell} from 'recharts';

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path
      d={`M${x},${y + height}L${x + width / 2},${y}L${x + width},${y + height}Z`}
      stroke="none"
      fill={fill}
    />
  );
};


const colors = ['blue', 'orange', 'green', 'red', 'purple', 'teal'];

const MyBookings = () => {
  const allDoctors = useLoaderData();
  const [bookedDoctors, setBookedDoctors] = useState([]);

  useEffect(() => {
    const storedIds = getAppointedDoctors();
    const convertedIds = storedIds.map((id) => parseInt(id));
    const appointedDoctors = allDoctors.filter((doctor) =>
      convertedIds.includes(doctor.id)
    );
    setBookedDoctors(appointedDoctors);
  }, [allDoctors]);

  const handleCancel = (id) => {
    removeFromStoreDb(id);
    setBookedDoctors(bookedDoctors.filter((doctor) => doctor.id !== id)); // remove from UI instantly
    toast.error('Appointment Cancelled!');
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center m-8">My Today Appointments</h1>
      <p className="m-8 text-center text-gray-600">
        Our platform connects you with verified, experienced doctors across various
        specialties — all at your convenience.
      </p>

      {bookedDoctors.length === 0 ? (
        <p className="text-center text-gray-500">No appointments booked yet.</p>
      ) : (
        <>
        {/* Funnel-Shaped Bar Chart */}
          <div className="bg-white p-3 rounded-2xl shadow-xl mx-8">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={bookedDoctors}
                margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 13 }} />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="consultationFee"
                  shape={<TriangleBar />}
                  label={{ position: 'top', fill: '#555', fontSize: 12 }}
                >
                  {bookedDoctors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Booked doctor list */}
          <div className="flex flex-col gap-8 m-8 p-5">
            {bookedDoctors.map((doctor) => (
              <div key={doctor.id} className="p-5 bg-white rounded-2xl shadow-xl">
                <h1 className="text-xl font-bold mb-3">{doctor.name}</h1>
                <div className="text-gray-500 flex justify-between">
                  <p>{doctor.education}</p>
                  <p>Appointment Fee: {doctor.consultationFee}</p>
                </div>
                <button
                  onClick={() => handleCancel(doctor.id)}
                  className="btn border border-red-600 text-red-600 w-full my-3 rounded-xl bg-white"
                >
                  Cancel appointment
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default MyBookings;
