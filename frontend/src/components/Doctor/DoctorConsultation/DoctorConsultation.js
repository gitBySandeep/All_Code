import axios from "axios";
import { useEffect, useState } from "react";

const DoctorConsultation = () => {
    const [doctorConsultation, setDoctorConsultation] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/consult/getconsultdata")
            .then(response => {
                setDoctorConsultation(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th> Patient Name</th>
                        <th>Phone Number</th>
                        <th>Symptoms</th>
                    </tr>
                </thead>
            </table>
            {doctorConsultation.map((patient, index) => (
                <div key={index}>



                </div>

            ))}
        </div>
    </>


}
export default DoctorConsultation;



