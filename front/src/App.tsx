import React from 'react';
import CardList from './Components/CardList/CardList';
import { Outlet } from 'react-router-dom';



function App() {
  return (
   <div>
    <Outlet></Outlet>
    </div>
  );
}

export default App;
