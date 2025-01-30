import './About.css';
import iconname from '../../assets/icons/icon-name.svg';
import iconinstagram from '../../assets/icons/icon-instagram.svg';
import iconlinkedin from '../../assets/icons/icon-linkedin.svg';
import imageelane from '../../assets/images/image-elane.png';



const About = () => {
    return (
        <div className="about-section" id="about-section">
            <h1>Sobre Mim</h1>
            <div className="about-text">
                <p>Possuo experiência em desenvolvimento web e mobile.</p> 
                <p>Apaixonada por tecnologia e inovação!</p>
            </div>
            <div className="about-graduate">
                <p><span>Formação acadêmica</span></p>
                <p>Pós-graduação em Desenvolvimento de Aplicações Móveis (concluída em 2024)</p>
                <p>Pós-graduação em Desenvolvimento Full Stack (em andamento)</p>
                <p>Graduação em Análise e Desenvolvimento de Sistemas (em andamento)</p>
            </div>
            <div className="about-contact">
                <div className="about-contact-image">
                    <img src={imageelane}></img>
                </div>
                
                <div className="about-contact-item">
                    <img src={iconname}></img>
                    <h3>Nome</h3>
                    <div>Elane Alencar</div>
                </div>
                
                <div className="about-contact-item">
                    <img src={iconinstagram}></img>
                    <h3>Instagram</h3>
                    <div>@dev.elane</div>
                </div>
                <div className="about-contact-item">
                    <a href='https://linkedin.com/in/elanealencar' target="_blank">
                        <img src={iconlinkedin}></img> 
                        <h3>Linkedin</h3>
                        <div>elanealencar</div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default About;