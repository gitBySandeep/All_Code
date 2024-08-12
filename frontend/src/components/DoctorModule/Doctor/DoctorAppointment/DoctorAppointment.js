import axios from "axios";
import { useEffect, useState } from "react";
const DoctorAppointment = () => {
    const doctorId = localStorage.getItem("doctorId");
    const [doctorAppointment, setDoctorAppointment] = useState([]);
    useEffect(() => {
        axios.post("http://localhost:3005/doctor/appointmentList",{doctorid:doctorId})
            .then(response => {
                console.log(response.data.Data);
                setDoctorAppointment(response.data.Data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return <>
        <div>
        <h1 className="d-flex justify-content-center align-items-center">Appointment</h1>
            <div className="container  border shadow-lg p-3 mt-2 b
            g-body rounded ">
                <table className="table ">
                    <thead> 
                        <tr>
                            <th> Patient Name</th>
                            <th>Appointment Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorAppointment.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.name}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.message}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    </>
 

}
export default DoctorAppointment;



