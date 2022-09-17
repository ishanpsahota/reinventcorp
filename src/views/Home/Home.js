
import * as React from 'react';
import './_home.scss';

import HeroWrapper from '../../components/Home/HeroWrapper';
import ServiceWrapper from '../../components/Home/ServiceWrapper';
// import ExtraWrapper from '../../components/Home/ExtraWrapper';
import TeamWrapper from '../../components/Home/TeamWrapper';
import WorkWrapper from '../../components/Home/WorkWrapper';
import ContactWrapper from '../../components/Common/ContactWrapper';

function Home() {
    return (
        <div className='home-view'>  
            <HeroWrapper />            
            <ServiceWrapper />
            <div className='hr' />
            {/* <ExtraWrapper /> */}
            <TeamWrapper />
            <WorkWrapper />
            <div className='theme-gradient shadow'/>
            <ContactWrapper />
        </div>                    
    )
}

export default Home;