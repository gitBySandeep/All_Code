import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer " style={{ backgroundColor: "#35754A", color: "white" }}>
            <div className="footer-inner m-2">
                <div className="footer-top d-flex justify-content-between flex-wrap">
                    <div className="footer-customersupport  d-flex flex-column p-3">
                        <h2>Customer Support</h2>
                        <span className="footer-values fs-7">Contact Us</span>
                        <span className="footer-values fs-7">FAQ</span>
                        <span className="footer-values fs-7">Track Order</span>
                        <span className="footer-values fs-7">Return & Exchange</span>
                        <span className="footer-values fs-7">Shipping Location</span>
                    </div>
                    <div className="footer-aboutus  d-flex flex-column p-3">
                        <h2>About Us</h2>
                        <span className="footer-values fs-7">Our Story</span>
                        <span className="footer-values fs-7">Blogs</span>
                        <span className="footer-values fs-7">Ingredients Index</span>
                        <span className="footer-values fs-7">Hotel & Spa</span>
                        <span className="footer-values fs-7">Media</span>
                    </div>
                    <div className="footer-account  d-flex flex-column p-3">
                        <h2>Your Account</h2>
                        <span className="footer-values fs-7">My Account</span>
                    </div>
                    <div className="footer-privacypolicy ">
                        <div className="footer-privacypolicy-top  d-flex flex-column p-3">
                            <h2>Privacy and Terms</h2>
                            <span className="footer-values fs-7">Privacy Policy</span>
                            <span className="footer-values fs-7">Terms & Conditions</span>
                        </div>
                        <div className="footer-privacypolicy-  d-flex justify-content-between flex-wrap social-icons">
                            <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fab fa-github"></i></a>
                            <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom d-flex align-items-center flex-wrap">
                    <div className="footer-logo m-3"></div>
                    <div className="footer-text d-flex flex-wrap m-3">
                        <h5>Worldwide Copyright © The Great Ayurveda  (brand owners of The Great Ayurveda). All rights reserved.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
