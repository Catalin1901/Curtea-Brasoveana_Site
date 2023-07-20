import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';// for fontawesome icons
import { faFacebook } from '@fortawesome/free-brands-svg-icons';// for facebook icon
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';// for whatsapp icon
import '../styles/footer.css';
//footer structure , = adresa , telefon, facebook, whatsapp , email , logo , harta?
function Footer(){
    const PhoneNumber = "0732657369"
    const Link = "https://www.facebook.com/PensiuneaCurteaBrasoveana/";
    const whatsappLink = `https://api.whatsapp.com/send?phone=${PhoneNumber}`;
    return(
        <div className="contact">
        <a href={Link}><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="3x"   style={{ color: "green" }}/></a>
      </div>
    )
}
export default Footer;