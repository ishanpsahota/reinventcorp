import * as React from 'react';
import './_services.scss';

import ServiceHeroWrapper from '../../components/ServicesView/ServiceHeroWrapper';
import ServiceItemListWrapper from '../../components/ServicesView/ServiceItemListWrapper';
import ServiceBrandingWrapper from '../../components/ServicesView/BrandingWrapper';
import ServiceSEOWrapper from '../../components/ServicesView/SeoWrapper';
import ContactWrapper from '../../components/Common/ContactWrapper';

function Services() {
    return (        
        <div className='services-container'>
            <ServiceHeroWrapper />
            <ServiceItemListWrapper />
            <ServiceBrandingWrapper />
            <ServiceSEOWrapper />
            <ContactWrapper />
        </div>        
    )
}

export default Services;