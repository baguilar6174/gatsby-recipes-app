import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

import 'normalize.css';
import '../assets/css/main.css';
import Head from './head';

const Layout = ({ children, location }) => {
    return (
        <>
            <Head/>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;