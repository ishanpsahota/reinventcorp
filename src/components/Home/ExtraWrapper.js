
import sideImg from '../../assets/images/home-extra-one.png';

function ExtraWrapper() {
    return (
        <div className="home-extra-wrapper">
            <div className="home-extra-wrapper-one">
                <div className='home-extra-one-img d-none d-md-block'>
                    <img src={sideImg} alt='side_image' />
                </div>
                <div className='home-extra-one-text'>
                    <span className='my-auto'>
                        Get our professional advice now!
                    </span>                    
                    <div className='clip-path'>

                    </div>
                </div>
            </div>
            <div className="home-extra-wrapper-two mt-auto mb-0">

            </div>
        </div>
    );
};

export default ExtraWrapper;