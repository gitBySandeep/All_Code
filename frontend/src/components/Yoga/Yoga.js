import "./Yoga.css";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import axios from "axios";
import { useEffect, useState } from "react";

const Yoga = () => {

    window.alert("hello")

    const [yoga, setYoga] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/yoga/yogalist")
            .then(response => {
                console.log(response.data.YogaList);
                setYoga(response.data.YogaList);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (<>
        <Header />
        <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-center m-1 flex-wrap" style={{ gap: "0" }}>
                    {yoga.map((yog, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center justify-content-start m-5">
                            <div className="remede-img m-1"><img src={yog.imageUrl} style={{ height: "100%", width: '100%' }} /></div>
                            <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center text-center">
                                <span className="fs-5 fw-bold ms-2 me-2">{yog.yogaName.slice(0, 25)}</span>
                                <span className="d-flex flex-wrap m-2">{yog.benefits.slice(0, 110)}</span>
                                <button className="btnn text-white m-2">Get Start</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Yoga;
