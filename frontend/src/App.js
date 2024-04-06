import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import UserForgetPassword from "./components/User/ForgetPassword.js";
import UserLogIn from "./components/User/LogIn.js";
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
