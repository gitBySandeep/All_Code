import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserForgetPassword from "./components/User/ForgetPassword.js";
import UserLogIn from "./components/User/LogIn.js";
import Contact from "./components/Contact/Contact.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserLogIn />} />
        <Route path="/forgetpassword" element={<UserForgetPassword />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
