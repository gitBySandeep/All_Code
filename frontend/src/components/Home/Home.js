import "./Home.css";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    const [product, setproduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const [productreting, setproductreting] = useState([1, 2, 3, 4]);
    
    const [homeremedies, setHomeremedies] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/homeremedy/homeremedylist")
        .then(response => {
            setHomeremedies(response.data.HomeRemedyList)
        }).catch(err => {
            console.log(err);
        })
    }, []);
    
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
            <div className="home-contain ">
                <div className="home-image-section ">
                    <div className="Home-image"></div>
                </div>
                <div className="home-homeremedies text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Home Remedies</span>
                    <div className="containerr mt-3 mb-3 d-flex align-items-center">
                        <div className="containerr-inline d-flex align-items-center mb-3">
                            {homeremedies.map((remedy, index) => <div key={index}>
                                <div className="remede-box d-flex flex-column align-items-center justify-content-start">
                                    <div className="remede-img m-1"><img src={remedy.imageUrl} style={{ height: "100%", width: '100%' }} /></div>
                                    <div className="remede-value h-100 m-1 d-flex flex-column justify-content-evenly align-items-center">
                                        <span className="fs-5 fw-bold ms-2 me-2">{remedy.remedyName.slice(0, 25)}</span>
                                        <span className="d-flex flex-wrap m-2">{remedy.description.slice(0, 80)}</span>
                                        <button className="btnn text-white m-2">View More</button>
                                    </div>
                                </div>
                            </div>)}
                        </div>  
                        <div className="remede-arrow p-4"></div>
                    </div>
                </div>
                <div className="home-products text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Products</span>
                    <div className="containerr mt-3 mb-3 d-flex align-items-center">
                        <div className="containerr-inline d-flex align-items-center mb-3">
                            {product.map((remedy, index) => <div key={index}>
                                <div className="remede-box d-flex flex-column align-items-center justify-content-center">
                                    <div className="remede-img m-1"></div>
                                    <div className="remede-value m-1 d-flex flex-column justify-content-center align-items-center">
                                        <span className="fs-5 fw-bold ms-2 me-2">Turmeric Milk</span>
                                        <span className="fs-5 fw-bold ms-2 me-2" style={{ color: "var(--green)" }}>1200 Rs</span>
                                        <span className="d-flex flex-wrap m-2">loasdfha asdfjna adsfa asdfasd asdfasdf asdf asdfasd as asdfasd fbsdfb d dsfgagsd sdsdgsd sdfsdfasdf asdfasdf</span>
                                        <div className="w-100 d-flex align-items-center justify-content-center">
                                            {productreting.map((r, i) => <div key={i} className="d-flex">
                                                <span className="product-reting text-center m-2"></span>
                                            </div>)}
                                        </div>
                                        <div className="d-flex justify-content-evenly w-100">
                                            <button className="btnn addtocart-btn text-white m-2">Add To cart</button>
                                            <button className="btnn buynow-btn text-white m-2">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className="remede-arrow p-4"></div>
                    </div>
                </div>
                <div className="home-yoga text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Yoga</span>
                    <div className="containerr mt-3 mb-3 d-flex align-items-center">
                        <div className="containerr-inline d-flex align-items-center mb-3">
                            {yoga.map((yogaa, index) => <div key={index}>
                                <div className="remede-box d-flex flex-column align-items-center justify-content-start">
                                    <div className="remede-img m-1"><img src={yogaa.imageUrl} style={{ height: "100%", width: '100%' }} /></div>
                                    <div className="remede-value m-1 d-flex flex-column justify-content-evenly h-100 align-items-center">
                                        <span className="fs-5 fw-bold ms-2 me-2">{yogaa.yogaName.slice(0, 25)}</span>
                                        <span className="d-flex flex-wrap m-2">{yogaa.benefits.slice(0, 110)}</span>
                                        <button className="btnn text-white m-2">Get Start</button>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                        <div className="remede-arrow p-4"></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Home;
