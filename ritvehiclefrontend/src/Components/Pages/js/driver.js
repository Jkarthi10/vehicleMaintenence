import '../css/driver.css'
import Searchbar from './searchbar.js';
import { useState } from 'react';

function Driver(){
    const [searchVehicle, setVehicleVehicle] = useState('');
    return (
        <div className='driver-details'>
            <h1>Driver Details</h1>
            <Searchbar placeholder="search driver"
            onSearch={setVehicleVehicle}
            />
        </div>
    )
}

export default Driver;