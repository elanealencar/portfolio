import './Projects.css';
import project01 from '../../assets/images/portfolio.png';
import project02 from '../../assets/images/imc.png';
import project03 from '../../assets/images/gerador-numeros-da-sorte.png';
import project04 from '../../assets/images/performance.png';
import project05 from '../../assets/images/sorteador.png'
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projectsData = [
        {
            img: project01,
            title: "Portfólio pessoal",
            tech: "HTML | CSS | JavaScript | React | Vite",
            projectLink: "https://portfolio-elanealencar.vercel.app/",
            repoLink: "https://github.com/elanealencar/portfolio/",
          },
          {
            img: project02,
            title: "Calculadora de IMC",
            tech: "HTML | CSS Modules | Typescript | React | Vite",
            projectLink: "https://calc-imc-theta.vercel.app",
            repoLink: "https://github.com/elanealencar/calc-imc",
          },
          {
            img: project04,
            title: "Performance - Site Institucional",
            tech: "HTML | CSS | Javascript",
            projectLink: "https://performanceconsultoria.com/",
            repoLink: "https://github.com/elanealencar/performance",
          },
          {
            img: project05,
            title: "Sorteador de Duplas para Campeonato de Futevôlei",
            tech: "HTML | Tailwind CSS | Javascript",
            projectLink: "https://sorteio-campeonato.vercel.app/",
            repoLink: "https://github.com/elanealencar/sorteio-campeonato",
          },
          {
            img: project03,
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