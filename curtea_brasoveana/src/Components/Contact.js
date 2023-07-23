import '../../src/styles/contact.css'


// const location = {
//     address: 'Strada Băilor 16, Brașov 500123',
//     lat: 45.6365891,
//     lng: 25.5778443
// }

const mobilephone = '+40735472336';
const phonenumber = '+40268472336';
const email1 = 'office@curteabrasoveana.ro';
const email2 = 'curteabrasoveana@gmail.com';



function Contact() {
    return (
        <div className="contact-container">
            <div className="Date de contact">
                <h1>Date de contact</h1>
                <p>Adresa: Strada Republicii nr. 56, Brașov 500030</p>
                <a href={"tel:" + phonenumber}>Telefon:+4 0268.472.336</a>
                <a href={"tel:" + mobilephone}>Mobil:+4 0735.472.336</a>
                <a href={"mailto:" + email1}>Email us at office@curteabrasoveana.ro </a>
                <a href={"mailto:" + email2}>Email us at curteabrasoveana@gmail.com</a>

            </div>
            <div className="location">
                <div className = "address">
                <h2>Unde ne gasiti</h2>
                <h5>Adresa: Strada Băilor 16, Brașov 500123</h5>
                </div>
                <div className = "map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.708639624832!2d25.57784427677371!3d45.63658912191936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b68a1ae9103%3A0x20c570eb379b5e75!2zQ3VydGVhIEJyYciZb3ZlYW7Egw!5e0!3m2!1sro!2sro!4v1690113036088!5m2!1sro!2sro" 
                    className = "map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>

        </div>

    );
};

export default Contact;