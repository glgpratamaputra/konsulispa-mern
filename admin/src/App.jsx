import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddKlinikApotek from './pages/Admin/AddKlinikApotek';
import KlinikApotekList from './pages/Admin/KlinikApotekList';
import { KlinikApotekContext } from './context/KlinikApotekContext';
import KlinikApotekDashboard from './pages/KlinikApotek/KlinikApotekDashboard';
import KlinikApotekAppointments from './pages/KlinikApotek/KlinikApotekAppointments';
import KlinikApotekProfile from './pages/KlinikApotek/KlinikApotekProfile';
import AddObat from './pages/Admin/AddObat';
import ObatList from './pages/Admin/ObatList';


const App = () => {

  const { aToken } = useContext(AdminContext)
  const { kToken } = useContext(KlinikApotekContext)

  return aToken || kToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          {/* Admin Route */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-klinikapotek' element={<AddKlinikApotek />} />
          <Route path='/klinikapotek-list' element={<KlinikApotekList />} />
          <Route path='/add-obat' element={<AddObat />} />
          <Route path='/obat-list' element={<ObatList />} />

          {/* Klinik Apotek Route */}
          <Route path='/klinikapotek-dashboard' element={<KlinikApotekDashboard />} />
          <Route path='/klinikapotek-appointments' element={<KlinikApotekAppointments />} />
          <Route path='/klinikapotek-profile' element={<KlinikApotekProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App