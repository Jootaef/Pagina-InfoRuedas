import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        InfoRuedas
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Inicio</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>Autos</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>Guía de Precios</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>Registrarse</Link>
                        </li>
                    </ul>
                    {Button && <button buttonStyle='bt--outline'> Registrarse</button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
