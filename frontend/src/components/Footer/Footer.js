import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer border" style={{ backgroundColor: "var(--green)", color: "var(--white)", width: "99vw" }}>
            <div className="footer-inner m-2">
                <div className="footer-top d-flex justify-content-between flex-wrap">
                    <div className="footer-customersupport  d-flex flex-column p-3">
                        <h2>Customer Support</h2>
                        <span className="footer-values fs-7 links ps-3">Contact Us</span>
                        <span className="footer-values fs-7 links ps-3">FAQ</span>
                        <span className="footer-values fs-7 links ps-3">Track Order</span>
                        <span className="footer-values fs-7 links ps-3">Return & Exchange</span>
                        <span className="footer-values fs-7 links ps-3">Shipping Location</span>
                    </div>
                    <div className="footer-aboutus  d-flex flex-column p-3">
                        <h2>About Us</h2>
                        <span className="footer-values fs-7 links ps-3">Our Story</span>
                        <span className="footer-values fs-7 links ps-3">Blogs</span>
                        <span className="footer-values fs-7 links ps-3">Ingredients Index</span>
                        <span className="footer-values fs-7 links ps-3">Hotel & Spa</span>
                        <span className="footer-values fs-7 links ps-3">Media</span>
                    </div>
                    <div className="footer-account  d-flex flex-column p-3">
                        <h2>Your Account</h2>
                        <span className="footer-values fs-7 links ps-3">My Account</span>
                    </div>
                    <div className="footer-privacypolicy ">
                        <div className="footer-privacypolicy-top  d-flex flex-column p-3">
                            <h2>Privacy and Terms</h2>
                            <span className="footer-values fs-7 links ps-3">Privacy Policy</span>
                            <span className="footer-values fs-7 links ps-3">Terms & Conditions</span>
                        </div>
                        <div className="footer-privacypolicy d-flex justify-content-evenly flex-wrap social-icons">
                            <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark icon-google"></div>
                            <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark icon-facebook"></div>
                            <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark icon-git"></div>
                            <div style={{ filter: "invert(98%) sepia(57%) saturate(10%) hue-rotate(227deg) brightness(104%) contrast(102%)" }} className="border-dark icon-linkedin"></div>
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
