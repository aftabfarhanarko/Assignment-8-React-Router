import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>

            <footer className='mt-10'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Auth;