const getAppointedDoctors =()=>{
    const appointedDoctorStr = localStorage.getItem("doctorList");
    if(appointedDoctorStr){
        return JSON.parse(appointedDoctorStr);
    }
    else{
        return [];
    }
}

const addToStoreDb = (id)=>{
    const appointedDoctorData = getAppointedDoctors();
    if(appointedDoctorData.includes(id)){
        alert("Already exists");
    }
    else{
        appointedDoctorData.push(id);
        localStorage.setItem("doctorList", JSON.stringify(appointedDoctorData));
        alert('Doctor appointment done');
    }
}

export { addToStoreDb , getAppointedDoctors };