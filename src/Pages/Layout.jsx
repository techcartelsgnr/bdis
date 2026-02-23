import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import About from './About/About';


const Layout = () => {
  return (
    <div className='maincontainer' >
      <Header />
       <div >
       <Outlet />
       </div>
       <Footer />
     
    </div>
  )
}

export default Layout