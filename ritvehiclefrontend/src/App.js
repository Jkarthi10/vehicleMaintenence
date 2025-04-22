import './App.css';
import LoginPage from './Components/Pages/js/loginPage.js';
import Header from './Components/Pages/js/header.js';
import Sidebar from './Components/Pages/js/sidenavbar.js';
import Dashboard from './Components/Pages/js/dashboard.js';
import Maintenence from './Components/Pages/js/maintenence.js';
import Driver from './Components/Pages/js/driver.js'
import Vehicle from './Components/Pages/js/vehicle.js'

import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login'
  return (
    <div>
      <Routes>
        <Route path = '/login' element={<LoginPage/>}/>
      </Routes>

      {!hideLayout && <Header/>}

      <div className = 'container' >

        {!hideLayout && <Sidebar/>}
        <div className='pages'>
          <Routes>            
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/maintenence" element={<Maintenence/>}/>
            <Route path="/drivers" element = {<Driver/>}/>
            <Route path="/vehicles" element = {<Vehicle/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
