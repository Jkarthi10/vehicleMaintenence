
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidenavbar.css'; // Style it however you like

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
        <li><Link to="/maintenence">Maintenance</Link></li>
        <li><Link to="/drivers">Drivers</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
