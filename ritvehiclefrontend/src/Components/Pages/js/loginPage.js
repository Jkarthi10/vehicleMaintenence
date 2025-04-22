import React, { useState } from 'react';
import '../css/loginPage.css';
import Header from './header.js'; // Assuming you'll have the logo in this path

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', { userId, password });
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password clicked');
  };

  return (
    <div className="login-container">
      <div className="content-wrapper">
          <Header/>
      </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="USER ID"
              className="input-field"
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className="input-field"
            />
          </div>
          
          <div className="buttons">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="forgot-btn"
            >
              Forget password
            </button>
            
            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>
          </div>
        </form>
      </div>
  );
}

export default LoginPage;