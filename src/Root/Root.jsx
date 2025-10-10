import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import '../index.css';


const Root = () => {
    return (
        <div className='open-sans-font'>
            <Navbar></Navbar>
          <div className=' mx-auto'>
              <Outlet></Outlet>
          </div>
            <Footer></Footer>
      

        </div>
    );
};

export default Root;