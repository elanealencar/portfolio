import './Habilities.css';
import HabilityItem from './HabilityItem';
import iconhtml from '../../assets/icons/icon-html.svg';
import iconcss from '../../assets/icons/icon-css.svg';
import iconjs from '../../assets/icons/icon-javascript.svg';
import iconreact from '../../assets/icons/icon-react.svg';
import icongit from '../../assets/icons/icon-github.svg';
import iconfigma from '../../assets/icons/icon-figma.svg';
import iconnode from '../../assets/icons/icon-node.svg';
import iconvscode from '../../assets/icons/icon-vscode.svg';
import icontailwind from '../../assets/icons/icon-tailwind.svg';

const habilitiesData = [
    { icon: iconhtml, name: "HTML" },
    { icon: iconcss, name: "CSS" },
    { icon: iconjs, name: "JavaScript" },
    { icon: iconreact, name: "React" },
    { icon: iconreact, name: "React Native" },
    { icon: icontailwind, name: "Tailwind" },
    { icon: icongit, name: "Git/GitHub" },
    { icon: iconfigma, name: "Figma" },
    { icon: iconnode, name: "Node.js" },
    { icon: iconvscode, name: "VS Code" },
    ];

const Habilities = () => {
    return (
        <div className="habilities-section" id="habilities-section">
            <h1>Habilidades</h1>      
            <h2>Tecnologias e ferramentas</h2>
            <div className="habilities-container">
                {habilitiesData.map((hability, index) => (
                <HabilityItem
                 key={index}
                 icon={hability.icon}
                 name={hability.name} />
                ))}
            </div>
            <div className="habilities">
                <h2>Principais habilidades:</h2>
                    <p> Desenvolvimento front-end com React.js e Next.js </p>
                    <p> Aplicações mobile híbridas com React Native </p>
                    <p>Consumo e desenvolvimento de APIs REST e integração com back-end</p>
                    <p> Gerenciamento de estado com Context API e Redux</p>
                    <p> Versionamento de código com Git e GitHub</p>
                    <p> Design responsivo e otimização de performance</p>
            </div>
        </div>  
    );
}

export default Habilities;
