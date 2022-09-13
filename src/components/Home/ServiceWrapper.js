import { Link } from 'react-router-dom';

import Umbrella from '../../../node_modules/bootstrap-icons/icons/umbrella.svg';
import Trophy from '../../../node_modules/bootstrap-icons/icons/trophy.svg';
import Tools from '../../../node_modules/bootstrap-icons/icons/tools.svg';


function ServiceWrapper() {
    return (
        <div className='home-service-wrapper p-2'>
            <div className='col home-service-item-container'>
                <div className='home-service-item-wrapper'>
                    <div className='home-service-item-image shadow'>
                        <img src={Umbrella} alt='umbrella' />
                    </div>
                    <div className='home-service-item-text'>
                        Pool all the resources under the same umbrella, i.e. us.
                    </div>
                </div>
                <div className='home-service-item-wrapper'>
                    <div className='home-service-item-image shadow'>
                        <img src={Trophy} alt='umbrella' />
                    </div>
                    <div className='home-service-item-text'>
                        Win with our unique strategies.
                    </div>
                </div>
                <div className='home-service-item-wrapper'>
                    <div className='home-service-item-image shadow'>
                        <img src={Tools} alt='umbrella' />
                    </div>
                    <div className='home-service-item-text'>
                        Get access to our infinite tools.
                    </div>
                </div>
            </div>
            <div className='col text-center'>
                <button type='button' className='btn my-5 btn-yellow px-4 py-3'>
                    <Link to='/services'>
                        Our Services
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default ServiceWrapper;