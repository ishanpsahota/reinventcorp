import * as React from 'react';

import AboutUsHeroImg from '../../assets/images/aboutus.png';

function AboutUsHeroWrapper() {
    return (
        <div className='aboutus-hero-wrapper'>
                <div className='circle circle-one' />                                
                <div className='circle circle-three' />
                <div className='circle circle-four' />
                <div className='glass-wrapper'>
                    <div className='aboutus-inner-wrapper row'>
                        <div className='aboutus-inner-text col-md-5 mx-auto text-center text-md-start'>
                            <h1 className='display-1'>
                                About Us
                            </h1>
                            <h2>
                                Get to know us!
                            </h2>
                            <p className='lead d-none d-md-block'>
                                It was the passion, the purpose and the people who gave us the will to do it. 
                                As a growth digital marketing and eCommerce expert, the team launched an eCommerce agency that’s committed to helping brands achieve similar success.
                            </p>
                        </div>                        
                        <div className='aboutus-inner-img col-md-6 mt-5 mt-md-0'>
                            <img src={AboutUsHeroImg} alt='people' />
                            <p className='lead d-block d-md-none my-5'>
                                It was the passion, the purpose and the people who gave us the will to do it. 
                                As a growth digital marketing and eCommerce expert, the team launched an eCommerce agency that’s committed to helping brands achieve similar success.
                            </p>
                        </div>
                    </div>                   
                </div>
            </div>     
    );
}

export default AboutUsHeroWrapper;