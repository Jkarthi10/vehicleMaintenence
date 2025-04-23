import '../css/searchbar.css';
import React from 'react';

function Searchbar({placeholder, onSearch}){
    return (
        <div className='search-bar'>
            <input type = "text" placeholder={placeholder || "searching..."} onChange={(e)=>onSearch(e.target.value)}/>
        </div>
    );
}

export default Searchbar;