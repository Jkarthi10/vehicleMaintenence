import '../css/vehicle.css'
import Searchbar from './searchbar';
import { useState } from 'react';

function Vehicle(){
    const[searchTerm, setSearchTerm] = useState('');
    return (
        <div className='vehicle-details'>
            <h1>Vehicle Details</h1>
            <Searchbar placeholder="search vehicle" 
            onSearch={(term)=>setSearchTerm(term)}/>
            
        </div>
    )
}

export default Vehicle;