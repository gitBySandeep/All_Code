import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import UserLogIn from './components/User/LogIn.js';
import UserForgetPassword from './components/User/ForgetPassword.js';
function App() {
  return <>
    <Routes>
      <Route path='/' element={<UserLogIn />} />
      <Route path='/forgetpassword' element={<UserForgetPassword />} />
    </Routes>
  </>
}

export default App;
