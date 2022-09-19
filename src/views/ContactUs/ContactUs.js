import * as React from 'react';
import './_contactus.scss'

function ContactUs() {
    return (
        <div className='contactus-wrapper'>            
            <div className='contactus-form-wrapper'>
                <div className='row'>
                    <div className='col-12 col-md-6 p-3 p-md-5'>
                        <h1 className='display-4'>
                            Book an appointment
                        </h1>
                        <br /> 
                        <h3> Get a free consultation! <br/> Book an appointment. </h3>
                        <br /> <br/>                        
                        <a href='https://calendly.com/ishanpsahota' rel='noreferrer' target='_blank'>
                            <button className='btn btn-yellow btn-lg shadow'>
                                Book an appointment now!
                            </button>
                        </a>                        
                    </div>
                    {/* <div className='vr d-md-block d-none' />                     */}
                    <div className='hr-1 d-md-none d-block' />      
                    {/* right side */}
                    <div className='col-12 col-md-6 p-4 p-md-5'>
                        <h1 className='display-4'>
                            Contact Us
                        </h1>
                        <form className='mt-3' name='contactus' method='POST' data-netlify='true'>
                            <input type="hidden" name="form-name" value="contactus" />
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='full_name' id="name" placeholder="Enter name"/>
                                <label htmlFor="name">Full Name</label>
                            </div>                          
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" name='email' id="email" placeholder="name@example.com"/>
                                <label htmlFor="email">Email address</label>
                            </div>                            
                            <div className="form-floating mb-3">
                                <input type="phone" className="form-control" name='phone' id="phone" placeholder="***-***-****"/>
                                <label htmlFor="phone">Phone Number</label>
                            </div>  
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" name='org' id="organization" placeholder="Enter Organization"/>
                                <label htmlFor="organization">Organization</label>
                            </div>  
                            <fieldset className="row mb-3">
                                <strong><legend className="col-form-label pt-0">What are you signing up for?</legend></strong>
                                <div className="col-sm-9">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="purpose" id="free_consultation" value="consultation"/>
                                        <label className="form-check-label" htmlFor="free_consultation">
                                        Free Consultation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="purpose" id="meeting" value="meeting"/>
                                        <label className="form-check-label" htmlFor="meeting">
                                        Meeting
                                        </label>
                                    </div>                                
                                </div>
                            </fieldset>                        
                            <button type="submit" className="btn btn-yellow btn-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;