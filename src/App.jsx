import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import UserPage from './Pages/UserPage'
import ProfileDashboard from './Components/UserPageComponents/ProfileDashboard'
import VendorPage from './Pages/Vendor'
import VendorProfile from './Components/VendorComponents/VendorProfile'
import AdminLogin from './Pages/AdminLogin'
import AdminPage from './Pages/AdminPage'

function App() {
 
  return (
    <>
      <div> 
      <BrowserRouter>
         <Routes>
               <Route index element={<Home />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/Register" element={<Register />} />
               <Route path="/UserPage" element={<UserPage />} />
               <Route path="/ProfileDashboard" element={<ProfileDashboard />} />
               <Route path='/VendorPage' element={<VendorPage />} />
               <Route path="/VendorProfile" element={<VendorProfile />} />
               <Route path='/AdminLogin' element={<AdminLogin />} />
               <Route path='/AdminPage' element={<AdminPage />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
