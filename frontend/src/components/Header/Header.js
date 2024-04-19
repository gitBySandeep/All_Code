import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Viewcart from "../Product/Viewcart";

const Header = () => {
    const [diseases, setDiseases] = useState([]);
    const [search, setsearch] = useState([]);
    const [cartItemList, setCartItemList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3005/category/list")
            .then(response => {
                setDiseases(response.data.categories)
                // console.log(response.data.categories)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    const Solution = (disease) => {
        let categoryName = disease.categoryName;
        axios.post("http://localhost:3005/category/data", { categoryName })
            .then(response => {
                // console.log(response.data.categories)
                navigate("/disease", { state: response.data.categories });
            }).catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        axios.get("http://localhost:3005/cart/fetchCartItems/${userId}")
            .then(response => {
                for (let product of response.data.data) {
                    product.qty = 1;

                    cartItemList.push(product);
                }
                setCartItemList([...cartItemList]);
            }).catch(err => {
                console.log(err);
            })
    }, []);


    const viewcart = () => {
        navigate("/ViewCart");
    }

    return (
        <div className="headernav" style={{ height: "130px" }}>
            <div className="fixed-top">
                <nav className="navbar-m navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container-fluid navbar-collapse">
                        <span className="navbar-brand">
                            <img src="./images/A2.png" height={60} width={100} alt="Avatar Logo" style={{}} />
                        </span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{}} id="mynavbar">
                            <form className="header-sch me-auto d-flex bg-light" style={{ borderRadius: "50px", marginLeft: "17vw", width: "45%" }}>
                                <input className="form-control me-2" style={{ borderRadius: "50px", border: "none" }} type="text" placeholder="What are you looking for ?" />
                                <button className="btnn text-white" style={{ borderRadius: "50px" }} type="button">Search</button>
                            </form>
                            <ul className="navbar-nav navv d-flex align-items-sta" style={{}}>
                                <li className="nav-list nav-item dropdown me-5">
                                    <div className="nav-link d-flex align-items-center dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="login-icon"></div>
                                        <span className="login-text">LogIn</span>
                                    </div>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="dropdown-item d-flex align-items-center">
                                                <div className="login-user"></div>
                                                <span className="login-texth ms-2"><Link style={{ color: "var(--green)", textDecoration: "none" }} to="/user">User</Link></span>
                                            </div>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <div className="dropdown-item d-flex align-items-center">
                                                <div className="login-doctor"></div>
                                                <span className="login-texth ms-2"><Link style={{ color: "var(--green)", textDecoration: "none" }} to="">Doctor</Link></span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item d-flex align-items-center">
                                    <div className="cart-icon" onClick={() => viewcart()} style={{ fontSize: "19px" }}></div>
                                    <span className="cart-text" onClick={() => viewcart()}><button type="button" class="btn btn-success position-relative">Cart
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{fontSize:"18px"}}>
                                      {cartItemList.length}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: "var(--green)" }}>
                    <div className="container-fluid d-flex justify-content-end">
                        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="text-white">Menu</span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="container-fluid nav-li navbar-nav nav-justified navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/">Home</Link></li>
                                <li className="nav-item btn-group dropdown">
                                    <span className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">Disease</span>
                                    <ul className="dropdown-menu">
                                        <li className="d-flex flex-wrap justify-content-between dropdownlist" style={{ width: "60vw" }}>
                                            {diseases.map((disease, i) => <span key={i}>
                                                <span className="dropdown-item dlivalu" onClick={() => Solution(disease)} style={{ width: "200px", margin: ".5vw" }}>{disease.categoryName}</span>
                                            </span>)}
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/product">Products</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/yoga">Yoga</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/homeremedy">Homeremedies</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/aboutUs">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/doctorconsult">Doctor</Link></li>
                                <li className="nav-item"><Link className="nav-link" style={{ color: "var(--white)" }} to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;