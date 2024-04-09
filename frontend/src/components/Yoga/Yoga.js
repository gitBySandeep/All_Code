import "./Yoga.css";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Yoga.css"
const Yoga = () => {
    const [yogalist, setYoga] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/yoga/yogalist")
            .then(response => {
                console.log(response.data.YogaList);
                setYoga(response.data.YogaList);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const navigate = useNavigate();
    const getStart = (yoga) => {
        navigate("/getstart", { state: yoga });
    }
    return (<>
        <Header />
        <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-center m-1 flex-wrap" style={{ gap: "0" }}>
                    {yogalist.map((yoga, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center justify-content-start m-5" id="yoga_hover" >
                            <div className="remede-img m-1"><img src={yoga.imageUrl} style={{ height: "100%", width: '100%' }}  onClick={() => getStart(yoga)}/></div>
                            <i className="fa-solid fa-play youtube-icon fa-2xl" style={{color:"var(--green)", cursor:"pointer"}} onClick={() => getStart(yoga)}></i>
                            <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center text-center">
                                <span className="fs-5 fw-bold ms-2 me-2">{yoga.yogaName.slice(0, 25)}</span>
                                <span className="d-flex flex-wrap m-2">{yoga.benefits.slice(0, 110)}</span>
                                <button className="btnn text-white m-2" onClick={() => getStart(yoga)}>Get Start</button>
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