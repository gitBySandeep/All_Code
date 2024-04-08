import "./Homeremedy.css";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import axios from "axios";
import { useEffect, useState } from "react";

const Homeremedy = () => {
    const [homeremedies, setHomeremedies] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/homeremedy/homeremedylist")
            .then(response => {
                setHomeremedies(response.data.HomeRemedyList)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (<>
        <Header />
        <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-evenly m-1 flex-wrap" style={{ gap: "0" }}>
                    {homeremedies.map((remedy, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center mb-2 mt-2">
                            <div className="remede-img m-1" style={{ height: "200px", width: '98%' }}><img src={remedy.imageUrl} height={"100%"} width={"100%"} /></div>
                            <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center text-center">
                                <span className="fs-5 fw-bold ms-2 me-2">{remedy.remedyName.slice(0, 30)}</span>
                                <span className="d-flex flex-wrap m-2">{remedy.description.slice(0, 80)}</span>
                                <button className="btnn text-white m-2">View More</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Homeremedy;
