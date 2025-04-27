
interface ProjectCardProps {
    img: string;
    title: string;
    description: string;
    tech: string;
    projectLink: string;
    repoLink: string;
}

const ProjectCard = ({ img, title, description, tech, projectLink, repoLink }: ProjectCardProps) => {
    return (
        <div className="projects-card">
            <img src={img} alt={title}/>
            <div className="projects-title">{title}</div>
            <div className="projects-tech">{description}</div>
            <div className="projects-tech">{tech}</div>
            <div className="projects-repositories">
                <button className="button-projects"
                onClick={() => window.open(projectLink, "_blank")}
                >
                Acessar o projeto
                </button>
                <button className="button-repositories"
                onClick={() => window.open(repoLink, "_blank")}
                >
                Acessar o Repositório
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
