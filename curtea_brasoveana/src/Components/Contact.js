/*
import '../../src/styles/contact.css'
// import GoogleMapReact from '@react-google-maps'
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'


const location = {
    address: 'Strada Băilor 16, Brașov 500123',
    lat: 45.6365891,
    lng: 25.5778443
}

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

function Contact() {
    return (
        
        <div className="contact-container">
            {/* 
            <div className="Date de contact">
                <h1>Date de contact</h1>
                <p>Adresa: Strada Republicii nr. 56, Brașov 500030</p>
                <p>Telefon: 0268 477 477</p>
                <p>Email: asdasd@yahoo.com</p>
            </div>
            <div className="google-map">}
            <div className="location">
                <h1>Locatie</h1>
                {/* <div className="google-map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: '' }}
                        defaultCenter={location}
                        defaultZoom={17}
                    >
                        <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                        />
                    </GoogleMapReact>
                </div>
            </div>
            */}

        </div>

    );
};

export default Contact;