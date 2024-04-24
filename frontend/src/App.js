import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserForgetPassword from "./components/User/ForgetPassword.js";
import UserLogIn from "./components/User/LogIn.js";
import AboutUs from "./components/AboutUs/About.js";
import Contact from "./components/Contact/Contact.js";
import Home from "./components/Home/Home.js";
import Homeremedy from "./components/Homeremedy/Homeremedy.js";
import Yoga from "./components/Yoga/Yoga.js";
import Product from "./components/Product/Product.js";
import GetStart from "./components/Yoga/yogadescription.js";
import Disease from "./components/Disease/Disease.js";
import DoctorConsult from "./components/DoctorConsult/DoctorConsult.js";
import ViewMore from "./components/Homeremedy/HomeremedyDescription.js";
import Viewcart from "./components/Product/Viewcart.js";
import Checkout from "./components/Product/CheckOut.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeremedy" element={<Homeremedy />} />
          <Route path='/ViewMore' element={<ViewMore />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path='/getstart' element={<GetStart />} />
          <Route path="/product" element={<Product />} />
          <Route path='/getstart' element={<GetStart />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<UserLogIn />} />
          {/* <Route path="/search/:term" element={<SearchItem/>} /> */}
          <Route path="/forgetpassword" element={<UserForgetPassword />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewcart" element={<Viewcart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/doctorconsult" element={<DoctorConsult />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}


export default App;