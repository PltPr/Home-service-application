import React from 'react';
import CardList from './Components/CardList/CardList';
import { Outlet } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './Context/useAuth';


function App() {
  return (
   <div>
    <UserProvider>
    <Outlet/>
    <ToastContainer/>
    </UserProvider>
    </div>
  );
}

export default App;
