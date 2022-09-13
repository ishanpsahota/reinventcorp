import * as React from 'react';
import { Link } from 'react-router-dom';
import Instagram from 'bootstrap-icons/icons/instagram.svg';
import Tiktok from 'bootstrap-icons/icons/tiktok.svg';
import YouTube from 'bootstrap-icons/icons/youtube.svg';
import Snapchat from 'bootstrap-icons/icons/snapchat.svg';

import './_footer.scss';
import logo from '../../assets/images/logo2.png';


function Footer() {
    return (        
        <div className='footer container-fluid p-2 m-0'>            
            <div className='row m-0 p-0'>
            <div className='col-lg-3'>
                <Link to="/">
                    <img src={logo} alt="logo" className='navbar-logo navbar-brand' />
                </Link>      
            </div>                      
            {/* navbar links */}                
            <div className="col-lg-9 flex m-0 p-0 flex-row d-md-block d-none" id="">
                <div className='row m-auto h-100'>
                    <div className="col-7 text-center m-auto">
                        <Link className='link-hover  navbar-link' to="/"> Home </Link>
                        <Link className='link-hover  navbar-link' to="/services"> Services </Link>
                        <Link className='link-hover  navbar-link' to="/blogs"> Blogs </Link>
                        <Link className='link-hover  navbar-link' to="/aboutus"> About Us </Link>
                        <Link className='link-hover  navbar-link' to="/contactus"> Contact Us </Link>                
                    </div>
                    <div className='col-5 my-auto social-links-wrapper'>
                        <ul className='flex flex-row justify-content-end list-group list-group-horizontal'>
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
            </div>            
        </div>
    );
}

export default Footer;
