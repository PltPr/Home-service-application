import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useAuth } from '../../Context/useAuth';

const Navbar = () => {
  const {isLoggedIn,logout}=useAuth();
  return (
    <nav className="p-3 bg-gradient-to-t from-gray-300 to-white">
      <div className="navbar-container">
        <Link to="/" >
          <h1 className="middle none center mr-4 border rounded-md border-black bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Home</h1>
        </Link>
        <div className="navbar-links">
          <ul>
            {isLoggedIn() ? 
            (
            <>
            <Link to ="my-reservations-page">
            <h1 className=" middle none center mr-4 border rounded-md border-black bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">My reservations</h1>
            </Link>

            <li onClick={logout} className="cursor-pointer middle none center mr-4 border rounded-md border-black bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Logout</li>
            </>
            )
            :
            (<>
            <Link to="login-page">
              <li className="middle none center mr-4 border rounded-md border-black bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Login</li>
            </Link>
            <Link to="register-page">
              <li className="middle none center mr-4 border rounded-md border-black bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black shadow-md shadow-grey-500/20 transition-all hover:shadow-lg hover:shadow-grey-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Register</li>
            </Link>
            </>)}
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
