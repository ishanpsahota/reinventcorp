
import ServiceSEOImg from '../../assets/images/seo.png';

function ServiceSEOWrapper() {
    return (
        <div className="services-seo-wrapper">                        
            <div className='services-seo-text'>
                <h2>
                    Branding & Campaign Marketing
                </h2>
                <p className='lead mt-5'>
                You want your voice to be heard. In every element of your client communications, you want it to ring out loud and strong. 
                <br/> <br/> Through deep discovery sessions, we’ll work with you to develop logos, visual and language guidelines, and brand statements so that you have what you need to express your brand.
                </p>
            </div>               
            <div className='services-seo-img'>
                <img src={ServiceSEOImg} alt='seo' />
            </div>
        </div>
    );
};

export default ServiceSEOWrapper;