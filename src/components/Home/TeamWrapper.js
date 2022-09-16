import { Link } from 'react-router-dom';
import Person from '../../../node_modules/bootstrap-icons/icons/person.svg';

function TeamWrapper() {
    return (
        <div className="home-team-wrapper p-2">
            <div className="home-team-heading">
                <h1 className="display-3">
                    The Team
                </h1>
            </div>
            <div className="home-team-member-container">
                <div className="home-team-member-item shadow">
                    <img src={Person} alt='member' />
                </div>
                <div className="home-team-member-item shadow">
                    <img src={Person} alt='member' />
                </div>
                <div className="home-team-member-item shadow">
                    <img src={Person} alt='member' />
                </div>
            </div>
            <div className='home-team-cta'>
                <button className='btn btn-yellow btn-lg'>
                    <Link to='/aboutus'> Know More </Link> 
                </button>
            </div>
        </div>
    );
}

export default TeamWrapper;