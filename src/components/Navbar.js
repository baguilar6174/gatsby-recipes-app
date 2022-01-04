import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FiAlignJustify } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';

const NavBar = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className='navbar'>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <img src={ logo } alt="Recipes App"/>
                    </Link>
                    <button className='nav-btn' onClick={() => setShow(!show)}>
                        <FiAlignJustify/>
                    </button>
                </div>
                <div className={ show ? 'nav-links show-links': 'nav-links' }>
                    <Link to='/' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>inicio</Link>
                    <Link to='/recipes' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>recetas</Link>
                    <Link to='/tags' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>categorías</Link>
                    <Link to='/about' className='nav-link' activeClassName='active-link' onClick={() => setShow(false)}>acerca&nbsp;de</Link>
                    <div className="nav-link contact-link">
                        {/* <Link to='/contact' className='btn' onClick={() => setShow(false)}>contacto</Link> */}
                        <a className='btn' href="https://www.bryan-aguilar.com/" target="_blank" rel="noreferrer">Bryan Aguilar</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;