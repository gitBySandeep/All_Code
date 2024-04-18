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
            }).catch(err => {
                console.log(err);
            })
    }, []);


    useEffect(() => {
        const userId = localStorage.getItem("userId");
        axios.get(`http://localhost:3005/cart/fetchCartItems/${userId}`)
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
        <div className="header mb-1">
            <div className="header-contain">
                <div className="header-top">
                    <div className="header-logo">
                        <div className="logo"></div>
                    </div>
                    <div className="header-content">
                        <div className="header-search" >
                            <input placeholder="What are you looking for ?" />
                            <div className="search">
                                <div className="search-icon"></div>
                                <span className="search-text">Search</span>
                            </div>
                        </div>
                        <div className="header-login">
                            <div className="login-icon"></div>
                            <span className="login-text">LogIn</span>
                            <div className="login-hover d-flex align-items-end justify-content-center">
                                <div className="hover-down d-flex align-items-center justify-content-evenly flex-column">
                                    <div className="hover-user d-flex pb-1 align-items-center w-75">
                                        <div className="login-user"></div>
                                        <span className="login-texth ms-2"><Link style={{ color: "var(--green)", textDecoration: "none" }} to="/user">User</Link></span>
                                    </div>
                                    <div className="hover-doctor d-flex pb-1 align-items-center w-75">
                                        <div className="login-doctor"></div>
                                        <span className="login-texth ms-2"><Link style={{ color: "var(--green)", textDecoration: "none" }} to="">Doctor</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-cart">
                            <div className="cart-icon" onClick={() => viewcart()} style={{ fontSize: "19px" }}></div>
                            <span className="cart-text" onClick={() => viewcart()}><button type="button" class="btn btn-success position-relative">Cart
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{fontSize:"18px"}}>
                                    {cartItemList.length}
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button></span>
                        </div>
                        <div className="header-manu">
                            <div className="manu-icon"></div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/">Home</Link></span>
                    <span className="disease">Disease
                        <div className="disease-hover">
                            <div className="d-hover d-flex flex-wrap align-items-center justify-content-between p-1">
                                {diseases.map((disease, i) => <div key={i} className="d-flex flex-wrap">
                                    <span className=" d-hover-values" style={{ color: "var(--green)", width: "14vmax" }}><Link style={{ color: "var(--green)", textDecoration: "none" }} to="/disease">{disease.categoryName}</Link></span>
                                </div>)}
                            </div>
                        </div>
                    </span>
                    <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/product">Products</Link></span>
                    <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/yoga">Yoga</Link></span>
                    <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/homeremedy">Homeremedies</Link></span>
                    <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/aboutUs">About Us</Link></span>
                    <span>Doctor</span>
                    <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/contact">Contact</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
