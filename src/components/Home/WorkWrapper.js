import * as React from 'react';

// import { Link } from 'react-router-dom';
import Award from '../../../node_modules/bootstrap-icons/icons/award.svg';


function WorkWrapper() {
    return (
        <div className="home-work-wrapper">
            {/* <div className='clip-path-triange'>&nbsp;<br/></div> */}
            <div className="home-work-heading">
                <h1 className="display-3"> Our Work </h1>
            </div>
            <div className="home-work-item-container">
                <div className="home-work-item-wrapper">
                    <img src={Award} alt='work-item' />
                </div>
                <div className="home-work-item-wrapper">
                    <img src={Award} alt='work-item' />
                </div>
                <div className="home-work-item-wrapper">
                    <img src={Award} alt='work-item' />
                </div>
                <div className="home-work-item-wrapper">
                    <img src={Award} alt='work-item' />
                </div>
                <div className="home-work-item-wrapper">
                    <img src={Award} alt='work-item' />
                </div>
                <div className="home-work-item-wrapper">
                    <img src={Award} alt='work-item' />
                </div>
            </div>
        </div>
    );
}

export default WorkWrapper;