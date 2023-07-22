import '../../src/styles/contact.css'

function Contact()
{
    return(
        <div className = "contact-container">
            <div className = "Date de contact">
                <h1>Date de contact</h1>
                <p>Adresa: Strada Republicii nr. 56, Brașov 500030</p>
                <p>Telefon: 0268 477 477</p>
                <p>Email: asdasd@yahoo.com</p>
            </div>
            <div className = "location">
                <h1>Locatie</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.708639624831!2d25.57784427677371!3d45.63658912191938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b68a1ae9103%3A0x20c570eb379b5e75!2zQ3VydGVhIEJyYciZb3ZlYW7Egw!5e0!3m2!1sro!2sro!4v1690058769155!5m2!1sro!2sro" className = "Maps"></iframe>
                </div>

        </div>

    );
};

export default Contact;