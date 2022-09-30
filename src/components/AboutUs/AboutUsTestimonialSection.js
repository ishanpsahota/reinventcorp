import * as React from 'react';

function AboutUsTestimonialSection() {
    return (    
        <div className='aboutus-testimonial-wrapper'>
            <h1 className='display-1'>Testimonials</h1>
            <div id="aboutus_testimonial_carousel" className="carousel carousel-dark slide mt-5" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#aboutus_testimonial_carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#aboutus_testimonial_carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#aboutus_testimonial_carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='aboutus-testimonial-item shadow '>
                            <h2> Choosing BizNet was the best decision ever. </h2>
                        </div>                                        
                    </div>
                    <div className="carousel-item">
                        <div className='aboutus-testimonial-item shadow '>
                                <h2>
                                    Testimonials 2
                                </h2>                                
                            </div>                                                         
                        </div>
                    <div className="carousel-item">
                        <div className='aboutus-testimonial-item shadow '>
                            <h2>
                                Hi
                            </h2>
                        </div>                                     
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#aboutus_testimonial_carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#aboutus_testimonial_carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
      
    );
}

export default AboutUsTestimonialSection;