import './Initial.css';
import iconbot from '../../assets/icons/icon-bot.png';
import arrow from '../../assets/icons/icon-arrow.png';

const Initial = () => {
    return (
        <div className="initial-section" id="initial-section">
            <div className="text-container">
                <div>
                    <img src={iconbot}></img>
                </div>
                <p>Olá, eu sou</p>
                <h1>Elane</h1>
                <h1>Alencar</h1>
                <h2>Desenvolvedora Front-End</h2>
                <p>Web | Mobile</p>
                <button className="initial-button"
                    onClick={() => window.open("https://linkedin.com/in/elanealencar", "_blank")}>  
                    <span className="button-text">Linkedin</span>
                    <div className="button-arrow"><img src={arrow}></img></div>
                </button>

            </div>
            
        </div>
    );
};

export default Initial;