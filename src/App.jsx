
import './App.css'
import {Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import WhoWeAre from './pages/WhoWeAre'
import Donation from './pages/Donation'
import Profile from './pages/Profile'
import FoodDonation from './pages/FoodDonation'
import DonetionHistory from './pages/DonetionHistory'
import Volunteers from './pages/Volunteers'
import 'leaflet/dist/leaflet.css';
import { useAuth } from './Routes/AuthContext'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'

function App() {
  const { currentUser } = useAuth();

  return (
    <>
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/who-we-are' element={currentUser ? <WhoWeAre/> : <Navigate to="/login" />}/>
        <Route path='/dashboard' element={currentUser ? <Dashboard/> : <Navigate to="/login" />}/>
        <Route path='/donation' element={currentUser ? <Donation/> : <Navigate to="/login" />}/>
        <Route path='/volunteers' element={currentUser ? <Volunteers/> : <Navigate to="/login" />}/>
        <Route path='/profile' element={currentUser ? <Profile/> : <Navigate to="/login" />}/>
        <Route path='/profile/donation-history' element={currentUser ? <DonetionHistory/> : <Navigate to="/login" />}/>
        <Route path='/food-donation' element={currentUser ? <FoodDonation/> : <Navigate to="/login" />}/>
      </Routes>
    </>
  )
}

export default App
