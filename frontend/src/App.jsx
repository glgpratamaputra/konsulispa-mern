import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Diagnosa from './pages/Diagnosa'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyDiagnosa from './pages/MyDiagnosa'
import Obat from './pages/Obat'
import Navbar from './components/Navbar'
import DaftarObat from './pages/DaftarObat'
import Footer from './components/Footer'
import KlinikApotek from './pages/KlinikApotek'
import DaftarKlinikApotek from './pages/DaftarKlinikApotek'
import MyAppointment from './pages/MyAppointment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Obat' element={<Obat />} />
          <Route path='/Obat/:Category' element={<Obat />} />
          <Route path='/Daftar-Obat/:medicineId' element={<DaftarObat />} />
          <Route path='/KlinikApotek' element={<KlinikApotek />} />
          <Route path='/KlinikApotek/:Category' element={<KlinikApotek />} />
          <Route path='/Daftar-KlinikApotek/:placeId' element={<DaftarKlinikApotek />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/My-Profile' element={<MyProfile />} />
          <Route path='/Diagnosa' element={<Diagnosa />} />
          <Route path='/My-Diagnosa' element={<MyDiagnosa />} />
          <Route path='/My-Appointment' element={<MyAppointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App