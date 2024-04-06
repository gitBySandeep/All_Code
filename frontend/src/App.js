<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserForgetPassword from "./components/User/ForgetPassword.js";
import UserLogIn from "./components/User/LogIn.js";
=======
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import UserLogIn from './components/User/LogIn.js';
import UserForgetPassword from './components/User/ForgetPassword.js';
>>>>>>> 846ccc491092429a608d1dabf994222fb1cd2acf
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLogIn />} />
        <Route path="/forgetpassword" element={<UserForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
