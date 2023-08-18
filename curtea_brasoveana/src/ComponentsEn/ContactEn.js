import React, { useState, useEffect } from 'react';
import '../../src/styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLock, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const mobilephone = '+40735472336';
const phonenumber = '+40268472336';
const email1 = 'office@curteabrasoveana.ro';
const email2 = 'curteabrasoveana@gmail.com';

function ContactEN() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="contact-container">
            <div className="date_de_contact">
                <div className='title'>
                    <p className="title">Contact us</p>
                </div>
                {windowWidth > 800 ? (<>
                    <div className='contact_col'>

                        <p className="text"><FontAwesomeIcon icon={faLocationDot} /></p>
                        <p className="text">Adresa: Strada Republicii nr. 56, Brașov 500030</p>
                    </div>
                    <div className='contact_col'>
                        <p className="text"><FontAwesomeIcon icon={faPhone} /></p>
                        <p className="text">Telefon: <a href={"tel:" + phonenumber}>+4 026 847 2336</a></p>
                        <p className="text">Mobil: <a href={"tel:" + mobilephone}>+4 0735 472 336</a></p>
                    </div>
                    <div className='contact_col'>
                        <p className="text"><FontAwesomeIcon icon={faEnvelope} /></p>
                        <p className="text">Email us at <a href={"mailto:" + email1}>office@curteabrasoveana.ro</a></p>
                        <p className="text">Email us at <a href={"mailto:" + email2}>curteabrasoveana@gmail.com   </a></p>
                    </div>
                    <div className='contact_col'>
                        <p className="text"><FontAwesomeIcon icon={faLock} /></p>
                        <p className="text"><a href='/gdpr'>GDPR Policy</a></p>
                    </div>
                </>
                ) :
                    <>
                        <div className='contact_col'>
                            <p className="text"><FontAwesomeIcon icon={faPhone} /></p>
                            <p className="text">Phone</p>
                            <p className="text"><a href={"tel:" + phonenumber}>+4 026 847 2336</a></p>
                            <p className="text"><a href={"tel:" + mobilephone}>+4 0735 472 336</a></p>
                        </div>
                        <div className='contact_col'>
                            <p className="text"><FontAwesomeIcon icon={faEnvelope} /></p>
                            <p className="text">Email</p>
                            <p className="text"><a href={"mailto:" + email1}>office@curteabrasoveana.ro</a></p>
                            <p className="text"><a href={"mailto:" + email2}>curteabrasoveana@gmail.com   </a></p>
                        </div>
                        <div className='contact_col'>
                            <p className="text"><FontAwesomeIcon icon={faLock} /></p>
                            <p className="text">Info</p>
                            <p className="text"><a href='/gdpr'>Politica GDPR</a></p>
                        </div></>}
            </div>
            <div className="location">
                    
                <p className="title">Where to find us</p>
                {windowWidth < 800 ? (
                    <>
                        <div className='contact_col'>
                            <p className="text">Adress: Strada Republicii nr. 56, Brașov 500030</p>
                        </div>
                    </>
                ) : null}
                <div className="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.708639624832!2d25.57784427677371!3d45.63658912191936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b68a1ae9103%3A0x20c570eb379b5e75!2zQ3VydGVhIEJyYciZb3ZlYW7Egw!5e0!3m2!1sro!2sro!4v1690113036088!5m2!1sro!2sro"
                        className="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>

            </div>
        </div>
    );
}

export default ContactEN;
