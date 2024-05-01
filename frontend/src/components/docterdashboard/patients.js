import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import './DoctorDashboard.css'

const PatientInformation = () => {
    const [patient, setpatient] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/doctor/appointmentList")
            .then(response => {
                // console.log(response.data.Data);
                // console.log(response.data.object);
                setpatient(response.data.Data);
                
            }).catch(err => {
                console.log(err);
            })
    }, []);
    

    return <>
    <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-center m-1 flex-wrap" style={{ gap: "0" }}>
                    {patient.map((patientsinfo, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center justify-content-start m-5 text-center">
                            <div className="remede-img m-1"> <FaRegUserCircle style={{ height: "100%", width: '100%' }} /></div>
                            <div className="remede-value m-1 d-flex flex-column justify-content-center align-items-center">
                                <span className="fs-5 fw-bold ms-2 me-2">{patientsinfo.name}</span>
                                <span className="fs-5 fw-bold ms-2 me-2" style={{ color: "var(--green)" }}>{patientsinfo.age} Rs</span>
                                <span className="d-flex flex-wrap m-2">{patientsinfo.phone}</span>
                                <span className="d-flex flex-wrap m-2">{patientsinfo.email}</span>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </>
}
export default PatientInformation;