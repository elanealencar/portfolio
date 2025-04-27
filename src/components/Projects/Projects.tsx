import './Projects.css';
import previewPortfolio from '../../assets/images/portfolio.png';
import previewImc from '../../assets/images/imc.png';
import previewNumeros from '../../assets/images/gerador-numeros-da-sorte.png';
import previewPerformance from '../../assets/images/performance.png';
import previewSorteador from '../../assets/images/sorteador.png'
import previewAvanti from '../../assets/images/avanti_desktop.png'
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projectsData = [
        {
            img: previewPortfolio,
            title: "Portfólio pessoal",
            tech: "HTML | CSS | JavaScript | React | Vite",
            projectLink: "https://portfolio-elanealencar.vercel.app/",
            repoLink: "https://github.com/elanealencar/portfolio/",
          },
          {
            img: previewImc,
            title: "Calculadora de IMC",
            tech: "HTML | CSS Modules | Typescript | React | Vite",
            projectLink: "https://calc-imc-theta.vercel.app",
            repoLink: "https://github.com/elanealencar/calc-imc",
          },
          {
            img: previewAvanti,
            title: "Avanti - Loja de E-commerce",
            tech: "HTML | Javascript | Tailwind CSS",
            projectLink: "https://avanti-landing-page.vercel.app/",
            repoLink: "https://github.com/elanealencar/avanti-landing-page"
          }
          {
            img: previewPerformance,
            title: "Performance - Site Institucional",
            tech: "HTML | CSS | Javascript",
            projectLink: "https://performanceconsultoria.com/",
            repoLink: "https://github.com/elanealencar/performance",
          },
          {
            img: previewSorteador,
            title: "Sorteador de Duplas para Campeonato de Futevôlei",
            tech: "HTML | Tailwind CSS | Javascript",
            projectLink: "https://sorteio-campeonato.vercel.app/",
            repoLink: "https://github.com/elanealencar/sorteio-campeonato",
          },
          {
            img: previewNumeros,
            title: "Gerador de números da sorte",
            tech: "HTML | CSS | Javascript",
            projectLink: "https://gerador-de-numeros-da-sorte.vercel.app",
            repoLink: "https://github.com/elanealencar/gerador-de-numeros-da-sorte",
          },
          
    ];

    
    return (
        <div className="projects-section" id="projects-section">
            <h1>Projetos</h1>
                <div className="projects-cards">
                    {projectsData.map((project) => (
                        <ProjectCard 
                        key={project.title}
                        {...project}
                        />
                    ))}
                </div>
        </div>
    );
};

export default Projects;