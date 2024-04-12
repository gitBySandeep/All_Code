import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import axios from "axios";
import { useEffect, useState } from "react";

const Disease = () => {

    const [diseases, setDiseases] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/category/list")
            .then(response => {
                console.log(response.data.categories);
                setDiseases(response.data.categories)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (<>
        <Header />
        <div className="home">
            <div className="containerr d-flex align-items-center justify-content-center flex-wrap">
                <div className="containerr-inline d-flex align-items-center justify-content-center m-1 flex-wrap" style={{ gap: "0" }}>
                    {diseases.map((disease, index) => <div key={index}>
                        <div className="remede-box d-flex flex-column align-items-center justify-content-start m-5">
                            <div className="remede-img m-1"><img src={disease.imageUrl} style={{ height: "100%", width: '100%' }} /></div>
                            <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center text-center">
                                <span className="fs-5 fw-bold ms-2 me-2">{disease.categoryName.slice(0, 25)}</span>
                                <span className="d-flex flex-wrap m-2">{disease.Causes.slice(0, 100)}</span>
                                <span className="d-flex flex-wrap m-2">{disease.Precaution.slice(0, 100)}</span>
                                <button className="btnn text-white m-2">Solution</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Disease;
