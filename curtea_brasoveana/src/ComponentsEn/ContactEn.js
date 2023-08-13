import '../../src/styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const mobilephone = '+40735472336';
const phonenumber = '+40268472336';
const email1 = 'office@curteabrasoveana.ro';
const email2 = 'curteabrasoveana@gmail.com';

function ContactEn() {
    return (
        <div className="contact-container">
            <div className="Contact Details">
                <div className='contact_col1'>
                    <p className="title">Contact Details</p>
                    <p className="text">Address: 56 Republicii Street, Brașov 500030</p>
                </div>
                <div className='contact_col'>
                    <p className="text"><FontAwesomeIcon icon={faPhone} /></p>
                    <p className="text">Phone: <a href={"tel:" + phonenumber}>+4 026 847 2336</a></p>
                    <p className="text">Mobile: <a href={"tel:" + mobilephone}>+4 0735 472 336</a></p>
                </div>
                <div className='contact_col'>
                    <p className="text"><FontAwesomeIcon icon={faEnvelope} /></p>
                    <p className="text">Email us at <a href={"mailto:" + email1}>office@curteabrasoveana.ro</a></p>
                    <p className="text">Email us at <a href={"mailto:" + email2}>curteabrasoveana@gmail.com</a></p>
                </div>
            </div>
            <div className="location">
                <p className="title">Where to Find Us</p>
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.708639624832!2d25.57784427677371!3d45.63658912191936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b68a1ae9103%3A0x20c570eb379b5e75!2zQ3VydGVhIEJyYciZb3ZlYW7Egw!5e0!3m2!1sro!2sro!4v1690113036088!5m2!1sro!2sro"
                        className="map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactEn;
