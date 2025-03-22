import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import "./Navbar.css"
import { useAuth } from '../../Context/useAuth';

const Navbar = () => {
  const {isLoggedIn,user,logout}=useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>MyApp</h1>
        </Link>
        <div className="navbar-links">
          <ul>
            {isLoggedIn() ? 
            (<li onClick={logout} className="logout-btn">Logout</li>)
            :
            (<><li><Link to="login-page">Login</Link></li>
              <li><Link to="register-page">Register</Link></li></>)}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
