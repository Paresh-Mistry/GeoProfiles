import React from 'react'
import { Dashboard } from './Components/Routes/Dashboard'
import Navbar from './Components/Navigations/Header'
import 'leaflet/dist/leaflet.css';
import { Route , Routes , Link, BrowserRouter} from 'react-router-dom';
import MapPage from './Components/Routes/MapPage';
import Userdetails from './Components/Routes/Userdetails';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<Dashboard/>}/>
        <Route path='/userlocation' element={<MapPage/>}/>
        <Route path='/userdetails/:sno' element={<Userdetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
