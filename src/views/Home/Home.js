
import * as React from 'react';
import './_home.scss';

import HeroWrapper from '../../components/Home/HeroWrapper';
import ServiceWrapper from '../../components/Home/ServiceWrapper';
import TeamWrapper from '../../components/Home/TeamWrapper';
import WorkWrapper from '../../components/Home/WorkWrapper';
import ContactWrapper from '../../components/Home/ContactWrapper';

function Home() {
    return (
        <>  
            <HeroWrapper />
            <ServiceWrapper />
            <TeamWrapper />
            <WorkWrapper />
            <ContactWrapper />
        </>                    
    )
}

export default Home;