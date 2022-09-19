
import Person from '../../../node_modules/bootstrap-icons/icons/person.svg';

function AboutUsTeamSection() {
    return (
        <div className="aboutus-team-wrapper">
            <h1 className="display-1"> Our Team</h1>
            <div className="aboutus-team-member-wrapper">
                <div className="aboutus-team-member-item">
                    <div className="aboutus-team-member-img">
                        <img src={Person} alt='member' />
                    </div>
                    <div className="aboutus-team-member-bio">
                        Insert interesting bio here.
                    </div>
                </div>
                <div className="aboutus-team-member-item">
                    <div className="aboutus-team-member-img">
                        <img src={Person} alt='member' />
                    </div>
                    <div className="aboutus-team-member-bio">
                        Insert interesting bio here.
                    </div>
                </div>
                <div className="aboutus-team-member-item">
                    <div className="aboutus-team-member-img">
                        <img src={Person} alt='member' />
                    </div>
                    <div className="aboutus-team-member-bio">
                        Insert interesting bio here.
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default AboutUsTeamSection;