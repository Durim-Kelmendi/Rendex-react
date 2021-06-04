import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <React.Fragment>
            <IconContext.Provider value={{color: '#FFF'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="/images/logo.svg" alt="Rendex" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Hem
                            </Link>
                        </li><li className="nav-item">
                            <Link to='/member' className="nav-links" onClick={closeMobileMenu}>
                                Bli medlem
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/search' className="nav-links" onClick={closeMobileMenu}>
                                Sök
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Bli medlem</Button>
                                </Link>
                            ) : (
                                <Link to='sign-up' className="btn-link" onClick={closeMobileMenu}>
                                    <Button
                                        buttonStyle='btn--outline'
                                        buttonSize='btn--mobile'>
                                            Bli medlem
                                    </Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </React.Fragment>
    )
}

export default Navbar
