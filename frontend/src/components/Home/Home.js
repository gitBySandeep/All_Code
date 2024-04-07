import "./Home.css";
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import { useState } from "react";

const Home = () => {
    const [homeremedies, setHomeremedies] = useState([1]);
    return (<>
        <Header />
        <div className="home">
            <div className="home-contain ">
                <div className="home-image-section ">
                    <div className="Home-image"></div>
                </div>
                <div className="home-homeremedies text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Home Remedies</span>
                    <div className="mt-3 d-flex justify-content-evenly align-items-center flex-wrap">
                        {homeremedies.map((remede, index) => <div key={index} className="d-flex justify-content-evenly flex-wrap">
                            <div className="remede-box d-flex flex-column align-items-center justify-content-center mt-3 mb-3">
                                <div className="remede-img m-1"></div>
                                <div className="remede-value m-1 d-flex flex-column justify-content-center align-items-center">
                                    <span className="fs-5 fw-bold ms-2 me-2">Turmeric Milk</span>
                                    <span className="d-flex flex-wrap m-2">loasdfha asdfjna adsfa asdfasd asdfasdf asdf asdfasd as asdfasd fbsdfb d dsfgagsd sdsdgsd sdfsdfasdf asdfasdf</span>
                                    <button className="btnn text-white p-3 ps-5 pe-5 m-2">View More</button>
                                </div>
                            </div>
                        </div>)}
                        <div className="remede-arrow mb-4"></div>
                    </div>
                </div>
                <div className="home-products text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Products</span>
                    <div className="mt-3 d-flex justify-content-evenly align-items-center flex-wrap">
                        {homeremedies.map((remede, index) => <div key={index} className="d-flex justify-content-evenly flex-wrap">
                            <div className="remede-box d-flex flex-column align-items-center justify-content-center mt-3 mb-3">
                                <div className="remede-img m-1"></div>
                                <div className="remede-value m-1 d-flex flex-column justify-content-center align-items-center">
                                    <span className="fs-5 fw-bold ms-2 me-2">Turmeric Milk</span>
                                    <span className="d-flex flex-wrap m-2">loasdfha asdfjna adsfa asdfasd asdfasdf asdf asdfasd as asdfasd fbsdfb d dsfgagsd sdsdgsd sdfsdfasdf asdfasdf</span>
                                    <button className="btnn text-white p-3 ps-5 pe-5 m-2">View More</button>
                                </div>
                            </div>
                        </div>)}
                        <div className="remede-arrow mb-4"></div>
                    </div>
                </div>
                <div className="home-yoga text-center">
                    <span className="text-center fs-1 fw-bold border-bottom border-dark border-3 pt-1 ps-4 pe-4 ">Yoga</span>
                    <div className="mt-3 d-flex justify-content-evenly align-items-center flex-wrap">
                        {homeremedies.map((remede, index) => <div key={index} className="d-flex justify-content-evenly flex-wrap">
                            <div className="remede-box d-flex flex-column align-items-center justify-content-center mt-3 mb-3">
                                <div className="remede-img m-1"></div>
                                <div className="remede-value m-1 d-flex flex-column justify-content-center align-items-center">
                                    <span className="fs-5 fw-bold ms-2 me-2">Turmeric Milk</span>
                                    <span className="d-flex flex-wrap m-2">loasdfha asdfjna adsfa asdfasd asdfasdf asdf asdfasd as asdfasd fbsdfb d dsfgagsd sdsdgsd sdfsdfasdf asdfasdf</span>
                                    <button className="btnn text-white p-3 ps-5 pe-5 m-2">View More</button>
                                </div>
                            </div>
                        </div>)}
                        <div className="remede-arrow mb-4"></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
};

export default Home;
