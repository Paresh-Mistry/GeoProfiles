import React, { useContext } from 'react'
import { Dashboard } from './Components/Routes/Dashboard'
import Navbar from './Components/Navigations/Header'
import 'leaflet/dist/leaflet.css';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import MapPage from './Components/Routes/MapPage';
import Userdetails from './Components/Routes/Userdetails';
import { context } from './Components/context/Createcontext';
import ErrorPage from './Components/Routes/ErrorPage';

function App() {

  return (
    <context.Provider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Dashboard />} />
          <Route path='/userlocation/:name/:long/:lat' element={<MapPage />} />
          <Route path='/userdetails/:sno' element={<Userdetails />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  )
}

export default App
