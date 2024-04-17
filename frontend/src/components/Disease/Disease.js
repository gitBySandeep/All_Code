import { useLocation } from "react-router-dom"
import './Disease.css';
import './d.js';

const Disease = () => {

    const { state } = useLocation();
    console.log(state);

    return (<>
        <div className="d-flex flex-column">
            <div className="disease-card my-3 d-flex justify-content-center align-items-center flex-wrap">
                <div className="card text-center shadow" style={{ width: "18rem" }}>
                    <img src={state.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{state.categoryName}</h4>
                    </div>
                </div>
                <div className="">
                    <div className="disease-solution d-flex justify-content-evenly align-items-center flex-wrap">
                        <div className="m-1" style={{ width: "140px", cursor: "pointer" }}>
                            <div className="card p-2 py-2 text-center shadow">
                                <div className="img mb-2 ">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QQbSnnjMnohvzKczvN802rHDKmsR6J2vPJbnphi2BRpWO5_P1_YlKvd8klM3wVIRblg&usqp=CAU" width="62" className="rounded-circl" />
                                </div>
                                <h5 className="mb-0 ">Causes</h5>
                            </div>
                        </div>
                        <div className="m-1" style={{ width: "140px", cursor: "pointer" }}>
                            <div className="card p-2 py-2 text-center shadow">
                                <div className="img mb-2 ">
                                    <img src="data:image/png;base64,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" width="70" className="rounded-circle" />
                                </div>
                                <h5 className="mb-0 ">Doctor</h5>
                            </div>
                        </div>
                        <div className="m-1" style={{ width: "140px", cursor: "pointer" }}>
                            <div className="card p-2 py-2 text-center shadow">
                                <div className="img mb-2 ">
                                    <img src="https://cdn-icons-png.freepik.com/512/6138/6138019.png" width="70" style={{ background: "var(--white-2)" }} className="rounded-circle" />
                                </div>
                                <h5 className="mb-0 ">Yoga</h5>
                            </div>
                        </div>
                        <div className="m-1" style={{ width: "140px", cursor: "pointer" }}>
                            <div className="card p-2 py-2 text-center shadow">
                                <div className="img mb-2 ">
                                    <img src="https://thumb.ac-illust.com/f0/f008f92f0b1bf8d3f1da37d0a1fbb15a_t.jpeg" width="70" className="rounded-circl" />
                                </div>
                                <h5 className="mb-0 ">Medicine</h5>
                            </div>
                        </div>
                        <div className="m-1" style={{ width: "140px", cursor: "pointer" }}>
                            <div className="card p-2 py-2 text-center shadow">
                                <div className="img mb-2 ">
                                    <img src="https://us.123rf.com/450wm/tadanoe/tadanoe2203/tadanoe220300737/184167437-image-illustration-to-protect-against-viruses-by-infection-prevention.jpg?ver=6" width="70" className="rounded-circle" />
                                </div>
                                <h5 className="mb-0  ">Precaution</h5>

                            </div>
                        </div>
                        <div className="m-1" style={{ width: "140px", cursor: "pointer" }}>
                            <div className="card p-2 py-2 text-center shadow">
                                <div className="img mb-2 ">
                                    <img src="https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2021/opinion/YunimaDownShutterstock-1626663833.jpg&w=900&height=601" width="70" className="rounded-circl" />
                                </div>
                                <h5 className="mb-0 ">Home Remedies</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-3 d-flex justify-content-center text-white">
                <div className="container row shadow rounded" style={{ background: "var(--green)" }}>
                    <div className="p-2 py-5 text-center" >
                        <h5 className="fw-bold">CAUSES</h5>
                        <small>{state.Causes}</small>
                    </div>
                </div>
            </div>
            <div className="my-3 d-flex justify-content-center text-whit">
                <div className="container row rounded" style={{ background: "var(--white)", boxShadow: "2px 2px 15px 2px var(--gray)" }}>
                    <div className="p-2 py-5 text-center">
                        <h5 className="fw-bold">PRECAUTION</h5>
                        <small>{state.Precaution}</small>
                    </div>
                </div>
            </div>
            <div className="my-3 d-flex justify-content-center text-whit">
                <div className="container row rounded" style={{ background: "var(--white)", boxShadow: "2px 2px 15px 2px var(--gray)" }}>
                    <div className="p-2 py-5 text-center">
                        <h5 className="fw-bold">Remedy</h5>
                        <h6>{state.categoryName}</h6>
                    </div>
                </div>
            </div>
        </div>
        {/* ================================== */}
        <div class="multiple-card-slider border border-dark container">
            <div id="carouselExampleControls3" class="carousel" data-bs-ride="false">
                <div class="carousel-inner border border-dark d-flex">
                    <div class="carousel-item border border-primary active">
                        <div className="d-flex justify-content-between">
                            <div class="card border border-warning" style={{ width: "300px" }} >
                                <div class="card-body border border-dark">
                                    <h5 class="card-title">Card title 1-1</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div class="card border border-warning" style={{ width: "300px" }} >
                                <div class="card-body border border-dark">
                                    <h5 class="card-title">Card title 1-2</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div class="card border border-warning" style={{ width: "300px" }} >
                                <div class="card-body border border-dark">
                                    <h5 class="card-title">Card title 1-3</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item border border-primary">
                        <div class="d-flex justify-content-between">
                            <div class="card border border-warning" style={{ width: "300px" }} >
                                <div class="card-body border border-dark">
                                    <h5 class="card-title">Card title 2-1</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div class="card border border-warning" style={{ width: "300px" }} >
                                <div class="card-body border border-dark">
                                    <h5 class="card-title">Card title 2-2</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div class="card border border-warning" style={{ width: "300px" }} >
                                <div class="card-body border border-dark">
                                    <h5 class="card-title">Card title 2-3</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* ================================== */}
    </>);
};

export default Disease;