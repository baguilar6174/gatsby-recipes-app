import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

import 'normalize.css';
import '../assets/css/main.css';
import Head from './head';

const Layout = ({ children, location }) => {
    return (
        <>
            <Head/>
            <NavBar/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;