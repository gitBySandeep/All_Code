import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserForgetPassword from "./components/user/ForgetPassword.js";
import UserLogIn from "./components/user/LogIn.js";
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
import Consult from "./components/Consult/Consult.js";
import Appointment from "./components/Appointment/Appointment.js";
import ChatBot from "./components/ChatBot/ChatBot.js";
import DoctorDashboard from "./components/Doctor/DoctorDashboard.js";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeremedy/" element={<Homeremedy />} />
          <Route path='ViewMore' element={<ViewMore />} />

          <Route path="/yoga" element={<Yoga />} />
          <Route path='/getstart' element={<GetStart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/disease" element={<Disease />} />
          <Route path="/product" element={<Product />} />
          <Route path="/user" element={<UserLogIn />} />
          <Route path="/forgetpassword" element={<UserForgetPassword />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctorconsult" element={<DoctorConsult />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/Chatbot" element={<ChatBot />} />
          {/* <Route path="/appointmentDetails" element={<AppointmentDetails />} /> */}
          <Route path="/doctorDashboard" element={<DoctorDashboard/>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
