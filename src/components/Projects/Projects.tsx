import './Projects.css';
import project01 from '../../assets/images/portfolio.png';
import project02 from '../../assets/images/imc.png';
import project03 from '../../assets/images/gerador-numeros-da-sorte.png';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projectsData = [
        {
            img: project01,
            title: "Portfólio pessoal",
            tech: "HTML | CSS | JavaScript | React | Vite",
            projectLink: "https://portfolio-two-phi-85.vercel.app/",
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