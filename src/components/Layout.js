import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children, location }) => {
    return (
        <>
            <NavBar/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;