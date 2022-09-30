
import * as React from 'react';
import { Link } from 'react-router-dom';
import Instagram from '../../../node_modules/bootstrap-icons/icons/instagram.svg';
import Tiktok from '../../../node_modules/bootstrap-icons/icons/tiktok.svg';
import YouTube from '../../../node_modules/bootstrap-icons/icons/youtube.svg';
import Snapchat from '../../../node_modules/bootstrap-icons/icons/snapchat.svg';

// import './_navbar.scss';
import logo from '../../assets/images/logo2.png';


function HeaderFooterContent(props) {

    const navLinks = [
        {
            'title': 'Home',
            'link': '/'
        },
        {
            'title': 'Services',
            'link': '/services'
        },
        {
            'title': 'Blogs',
            'link': '/blogs'
        },
        {
            'title': 'About Us',
            'link': '/aboutus'
        },
        {
            'title': 'Contact Us',
            'link': '/contactus'
        }
    ]

    const socialLinks = [
        {
            'icon': Instagram,
            'link': 'https://instagram.com',
            'alt': 'instagram'
        },
        {
            'icon': Snapchat,
            'link': 'https://snapchat.com',
            'alt': 'snapchat'
        },
        {
            'icon': YouTube,
            'link': 'https://youtube.com',
            'alt': 'youtube'
        },
        {
            'icon': Tiktok,
            'link': 'https://tiktok.com',
            'alt': 'tiktok'
        }
    ]

    if(props.navbar) {
        return (
            <nav className='navbar sticky-top navbar-expand-md navbar-dark navbar-wrapper'>
                <div className='navbar-inner-wrapper container-fluid '>
                    <div className='navbar-logo-wrapper'>
                        <Link to="/">
                            <img src={logo} alt="logo" className='navbar-logo navbar-brand' />
                        </Link>      
                    </div>                      
                    {/* navbar links */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-link-list" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            {
                                navLinks.map((link, i) => {
                                    return (
                                        <Link className='link-hover navbar-link' to={link.link} key={i}> {link.title} </Link>            
                                    )
                                })

                            }                           
                        </div>
                        <div className='social-links-wrapper'>
                            <ul className='flex flex-row list-group list-group-horizontal'>                                
                                {
                                    socialLinks.map((link, i) => {
                                        return (
                                            <li className='list-group-item link-hover bg-transparent border-0'>
                                                <a href={link.link} target="_blank" rel="noreferrer">
                                                    <img src={link.icon} alt={link.alt} />
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>                                                
                        </div>
                    </div>                                                                                            
                </div>                        
            </nav>
        )
    }

    if(!props.navbar) {
        return (
            <div className='footer container-fluid p-2 m-0'>            
                <div className='row m-0 p-0'>
                    <div className='col-md-2'>
                        <Link to="/">
                            <img src={logo} alt="logo" className='navbar-logo navbar-brand' />
                        </Link>      
                    </div>                      
                    {/* navbar links */}                
                    <div className="col-md-10 flex m-0 p-0 flex-row d-md-block d-none" id="">
                        <div className='row m-auto h-100'>
                            <div className="col-md-8 text-center m-auto d-none d-lg-block">
                                {/* <Link className='link-hover  navbar-link' to="/"> Home </Link>
                                <Link className='link-hover  navbar-link' to="/services"> Services </Link>
                                <Link className='link-hover  navbar-link' to="/blogs"> Blogs </Link>
                                <Link className='link-hover  navbar-link' to="/aboutus"> About Us </Link>
                                <Link className='link-hover  navbar-link' to="/contactus"> Contact Us </Link>                 */}
                                {
                                    navLinks.map((link, i) => {
                                        return (
                                            <Link className='link-hover navbar-link' to={link.link} key={i}> {link.title} </Link>            
                                        )
                                    })
                                }  
                            </div>
                            <div className='col-md-4 col-12 m-auto mx-lg-0 social-links-wrapper'>
                                <ul className='flex flex-row justify-content-end list-group list-group-horizontal'>
                                    {
                                        socialLinks.map((link, i) => {
                                            return (
                                                <li className='list-group-item link-hover bg-transparent border-0'>
                                                    <a href={link.link} target="_blank" rel="noreferrer">
                                                        <img src={link.icon} alt={link.alt} />
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>                                                
                            </div>
                        </div>                
                    </div>                                                                                                    
                </div>            
            </div>
        )
    }
};

export default HeaderFooterContent;