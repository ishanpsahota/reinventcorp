import * as React from 'react';
import { Link } from 'react-router-dom';

import './_header.scss';
import logo from '../../assets/images/logo2.png';


function Header() {
    return (        
        <div className='header row header-wrapper navbar navbar-expand-lg navbar-dark nav-wrapper'>
            <div className='row'>
                <Link to="/">
                    <img src={logo} alt="logo" className='header-logo' />
                </Link>
            </div>
            
        </div>
    );
}

export default Header;
