import * as React from 'react';

import { Link } from 'react-router-dom';

function HeroWrapper() {
    return (
        <div className="hero-wrapper p-2">
            <h1 className='display-3 strong'> Your secret to success </h1>
            <div className="call-to-action-buttons-wrapper">
                <button type='button' className="btn btn-lg btn-yellow ">
                    <Link to='/contactus'> Contact Us </Link>
                </button>
                <button type='button' className="btn btn-lg btn-yellow ">
                    <Link to='#'> Book an <br/> appointment </Link>
                </button>
            </div>
        </div>
    )
}

export default HeroWrapper;