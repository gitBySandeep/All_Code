import "./Header.css";

const Header = () => {
    return (
        <div className="header">
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
                        <span className="login-text">Login</span>
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
                <span>Home</span>
                <span>Disease</span>
                <span>Products</span>
                <span>Yoga</span>
                <span>Homeremedies</span>
                <span>About Us</span>
                <span>Doctor Consult</span>
                <span>Contact</span>
            </div>
        </div>
    );
};

export default Header;
