import * as React from 'react';

import ServiceBrandingImg from '../../assets/images/service-branding.png';

function ServiceBrandingWrapper() {
    return (
        <div className="services-branding-wrapper">
            <div className='services-branding-img'>
                <img src={ServiceBrandingImg} alt='branding' />
            </div>
            <div className='services-branding-text'>
                <h2>
                    Branding & Campaign Marketing
                </h2>
                <p className='lead mt-5'>
                You want your voice to be heard. In every element of your client communications, you want it to ring out loud and strong. 
                <br/> <br/> Through deep discovery sessions, we’ll work with you to develop logos, visual and language guidelines, and brand statements so that you have what you need to express your brand.
                </p>
            </div>
        </div>
    );
};

export default ServiceBrandingWrapper;