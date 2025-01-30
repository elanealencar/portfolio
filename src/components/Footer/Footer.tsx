import './Footer.css';
import iconbot from '../../assets/icons/icon-bot.png';
import iconmail from '../../assets/icons/icon-mail.svg';
import iconwhats from '../../assets/icons/icon-whatsapp.svg';




const Footer = () => {
    return (
        <div className="footer-section" id="footer-section">
            <div>
                <img src={iconbot}></img>
            </div>
            <h1>Obrigada</h1>
            <p>pela sua visita!</p>
            <div className="footer-contact">
                <div className="footer-contact-item">
                    <a href="mailto:dev.elanealencar@email.com">
                        <img src={iconmail}></img>
                        <h3>E-mail</h3>
                    </a>
                </div>
                <div className="footer-contact-item"
                onClick={() => window.open("https://wa.me/5571993561152", "_blank")}>
                    <img src={iconwhats}></img>
                    <h3>Contato</h3>
                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;