import './Initial.css';
import iconbot from '../../assets/icons/icon-bot.png';
import arrow from '../../assets/icons/icon-arrow.png';

const Initial = () => {
    return (
        <section className="initial-section" id="initial-section">
            <div className="text-container">
                <img src={iconbot} alt="Ícone bot" className="bot-icon" />
                <p>Olá, eu sou</p>
                <h1>Elane</h1>
                <h1>Alencar</h1>
                <h2>Desenvolvedora de Software</h2>
                <p>Frontend | Fullstack</p>
                <button className="initial-button"
                    onClick={() => window.open("https://linkedin.com/in/elanealencar", "_blank")}>  
                    <span className="button-text">Linkedin</span>
                    <img src={arrow} alt="Ícone seta" className="button-arrow" />
                </button>
            </div>
            
        </section>
    );
};

export default Initial;