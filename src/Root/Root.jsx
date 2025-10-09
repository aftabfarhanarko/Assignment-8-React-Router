import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className='max-w-[1250px] mx-auto'>
              <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;