import * as React from 'react';
import { Link } from 'react-router-dom';
import Instagram from 'bootstrap-icons/icons/instagram.svg';
import Tiktok from 'bootstrap-icons/icons/tiktok.svg';
import YouTube from 'bootstrap-icons/icons/youtube.svg';
import Snapchat from 'bootstrap-icons/icons/snapchat.svg';

import './_navbar.scss';
import logo from '../../assets/images/logo2.png';


function Navbar() {
    return (        
        <nav className='navbar navbar-expand-lg navbar-dark navbar-wrapper'>
            <div className='container-fluid flex flex-row'>
                <div className='navbar-logo-wrapper'>
                    <Link to="/">
                        <img src={logo} alt="logo" className='navbar-logo navbar-brand' />
                    </Link>      
                </div>                      
                {/* navbar links */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-link-list flex flex-row" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <Link className='link-hover  navbar-link' to="/"> Home </Link>
                        <Link className='link-hover  navbar-link' to="/services"> Services </Link>
                        <Link className='link-hover  navbar-link' to="/blogs"> Blogs </Link>
                        <Link className='link-hover  navbar-link' to="/aboutus"> About Us </Link>
                        <Link className='link-hover  navbar-link' to="/contactus"> Contact Us </Link>                
                    </div>
                    <div className='social-links-wrapper'>
                        <ul className='flex flex-row list-group list-group-horizontal'>
                            <li className='list-group-item link-hover bg-transparent border-0'>
                                <a href='https://instagram.com/reinventingcorp' target="_blank" rel="noreferrer">
                                    <img src={Instagram} alt="instagram" />
                                </a>                                
                            </li>
                            <li className='list-group-item link-hover bg-transparent border-0'>
                                <a href='https://tikton.com/reinventingcorp' target="_blank" rel="noreferrer">
                                    <img src={Tiktok} alt="tiktok" />
                                </a>                                                                
                            </li>
                            <li className='list-group-item link-hover bg-transparent border-0'>
                                <a href='https://youtube.com/reinventingcorp' target="_blank" rel="noreferrer">
                                    <img src={YouTube} alt="youtube" />
                                </a>
                            </li>
                            <li className='list-group-item link-hover bg-transparent border-0'>
                                <a href='https://snapchat.com/reinventingcorp' target="_blank" rel="noreferrer">
                                    <img src={Snapchat} alt="snapchat" />
                                </a>                                
                            </li>
                        </ul>                                                
                    </div>
                </div>                                                                                            
            </div>                        
        </nav>
    );
}

export default Navbar;
