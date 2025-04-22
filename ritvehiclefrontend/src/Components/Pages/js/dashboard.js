import '../css/dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="mainContent">
      <h1>Hi, Admin</h1>
      <div className="dashboard-cards">
        <Link to="/tasks" className="card">Today's Tasks</Link>
        <Link to="/vehicles" className="card">Total Vehicles</Link>
        <Link to="/diesel" className="card">Diesel</Link>
        <Link to="/Issues" className="card">Issues</Link>
        <Link to="/Orders" className="card">Orders</Link>
      </div>
    </div>
  );
}

export default Dashboard;