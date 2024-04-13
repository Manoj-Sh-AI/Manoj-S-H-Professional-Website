import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
    
    // Toggle menu
    const[Toggle, showMenu] = useState(false);


    return (

    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>Manoj</a>

            <div className={Toggle ? 'nav__menu show-menu' : "nav__menu"}>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href="#home" className='nav__link active-link'>
                            <i className='fi fi-rr-home nav__icon'></i> Home
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#about" className='nav__link'>
                            <i className='fi fi-rr-user nav__icon'></i> About
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#skills" className='nav__link'>
                            <i className='fi fi-rr-document nav__icon'></i> Skills
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#services" className='nav__link'>
                            <i className='fi fi-rr-briefcase nav__icon'></i> Services
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#portfolio" className='nav__link'>
                            <i className='fi fi-rr-picture nav__icon'></i> Portfolio
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#contact" className='nav__link'>
                            <i className='fi fi-rr-paper-plane-top nav__icon'></i> Contact
                        </a>
                    </li>
                </ul>

                <i class="fi fi-rr-cross nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="fi fi-rr-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
