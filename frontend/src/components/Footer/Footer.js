import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-customersupport">
                        <h3>Customer Support</h3>
                        <span className="footer-values">Contact Us</span>
                        <span className="footer-values">FAQ</span>
                        <span className="footer-values">Track Order</span>
                        <span className="footer-values">Return & Exchange</span>
                        <span className="footer-values">Shipping Location</span>
                    </div>
                    <div className="footer-aboutus">
                        <h3>About Us</h3>
                        <span className="footer-values">Our Story</span>
                        <span className="footer-values">Blogs</span>
                        <span className="footer-values">Ingredients Index</span>
                        <span className="footer-values">Hotel & Spa</span>
                        <span className="footer-values">Media</span>
                    </div>
                    <div className="footer-account">
                        <h3>Your Account</h3>
                        <span className="footer-values">My Account</span>
                    </div>
                    <div className="footer-privacypolicy">
                        <div className="footer-privacypolicy-top">
                            <h3>Privacy and Terms</h3>
                            <span className="footer-values">Privacy Policy</span>
                            <span className="footer-values">Terms & Conditions</span>
                        </div>
                        <div className="footer-privacypolicy-icons">
                            <div className="footer-1-icon"></div>
                            <div className="footer-2-icon"></div>
                            <div className="footer-3-icon"></div>
                            <div className="footer-4-icon"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-logo"></div>
                    <div className="footer-text">
                        <h5>Worldwide Copyright © The Great Ayurveda  (brand owners of The Great Ayurveda). All rights reserved.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
