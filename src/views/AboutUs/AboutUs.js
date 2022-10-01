import * as React from 'react';

import './_aboutus.scss';
// import AboutUsHeroImg from '../../assets/images/aboutus.png';
import AboutUsHeroWrapper from '../../components/AboutUs/AboutUsHeroWrapper';
import AboutUsTeamSection from '../../components/AboutUs/AboutUsTeamSection';
// import AboutUsTestimonialSection from '../../components/AboutUs/AboutUsTestimonialSection';
import ContactWrapper from '../../components/Common/ContactWrapper'

function AboutUs() {
    return (
        <div className='aboutus-wrapper fade-in'>            
            <AboutUsHeroWrapper />      
            <AboutUsTeamSection />
            {/* <AboutUsTestimonialSection /> */}
            <ContactWrapper />
        </div>
    )
}

export default AboutUs;