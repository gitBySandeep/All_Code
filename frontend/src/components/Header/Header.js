import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {

    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/category/list")
            .then(response => {
                console.log(response);
                setCategoryList(response.data.categories)
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="header mb-1">
            <div className="header-top">
                <div className="header-logo">
                    <div className="logo"></div>
                </div>
                <div className="header-content">
                    <div className="header-search">
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
                        <div className="cart-icon"></div>
                        <span className="cart-text">Cart</span>
                    </div>
                    <div className="header-manu">
                        <div className="manu-icon"></div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/">Home</Link></span>
                <span>Disease</span>
                <span>Products</span>
                <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/yoga">Yoga</Link></span>
                <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/homeremedy">Homeremedies</Link></span>
                <span><Link  style={{ color: "var(--white)", textDecoration: "none" }} to="/aboutUs">About Us</Link></span>
                <span>Doctor Consult</span>
                <span><Link style={{ color: "var(--white)", textDecoration: "none" }} to="/contact">Contact</Link></span>
            </div>
        </div>
    );
};

export default Header;
