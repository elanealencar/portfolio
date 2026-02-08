import './About.css';
import iconName from '../../assets/icons/icon-name.svg';
import iconGithub from '../../assets/icons/icon-github.png';
import iconLinkedin from '../../assets/icons/icon-linkedin.svg';
import imageElane from '../../assets/images/image-elane.png';



const About = () => {
    return (
        <section className="about-section" id="about-section">
            <h1>Sobre Mim</h1>
            <div className="about-text">
                <p>Sou desenvolvedora de software com foco em Front-end e vivência Full Stack.</p>
                <p>Gosto de resolver problemas reais com tecnologia, valorizando performance, acessibilidade e boa experiência do usuário.</p>
            </div>
            <div className="about-graduate">
                <p><span>Formação acadêmica</span></p>
                <p>Pós-graduação em Desenvolvimento de Aplicações Móveis (concluída em 2024)</p>
                <p>Pós-graduação em Desenvolvimento Full Stack (em andamento)</p>
            </div>
            <div className="about-contact">
                <div className="about-contact-image">
                    <img src={imageElane} alt="Elane Alencar" />
                </div>
                
                <div className="about-contact-item">
                    <img src={iconName} alt="Ícone de Nome" />
                    <h3>Nome</h3>
                    <div>Elane Alencar</div>
                </div>
                
                <div className="about-contact-item">
                    <a href='https://github.com/elanealencar' target="_blank" rel="noopener noreferrer">
                        <img src={iconGithub} alt="Ícone do Github" />
                        <h3>Github</h3>
                        <div>elanealencar</div>
                    </a>
                </div>
                <div className="about-contact-item">
                    <a href='https://linkedin.com/in/elanealencar' target="_blank" rel="noopener noreferrer">
                        <img src={iconLinkedin} alt="Ícone do LinkedIn" />
                        <h3>Linkedin</h3>
                        <div>elanealencar</div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;