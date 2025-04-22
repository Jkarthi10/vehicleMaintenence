import '../css/header.css';
import ritLogo from '../../../assets/rit-logo-new.png'; 

function Headers(){
    return (
        <div className="header">
          <div className="logo-section">
            <img src={ritLogo} alt="RIT Logo" className="logo" />  
          </div>
          <h1 className="title">Transport Maintenance</h1>
        </div>
    );
}
export default Headers;