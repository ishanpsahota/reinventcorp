import * as React from 'react';

import { Link } from 'react-router-dom';

function ContactWrapper() {
    return (
        <div className="home-contactus-wrapper">
            <h1 className="display-4">
                Want to get in touch?
            </h1>
            <h3>Head to our <Link to='/contactus' className='text-yellow'>Contact Us </Link> page to shoot us a message/book a consultation!</h3>
        </div>
    );
}

export default ContactWrapper;