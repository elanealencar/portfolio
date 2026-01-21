import './Projects.css';
import previewPortfolio from '../../assets/images/portfolio.png';
import previewCatalogo from '../../assets/images/catalogo.png'
import previewImc from '../../assets/images/imc.png';
import previewNumeros from '../../assets/images/gerador-numeros-da-sorte.png';
import previewPerformance from '../../assets/images/performance.png';
import previewSorteador from '../../assets/images/sorteador.png'
import previewAvanti from '../../assets/images/avanti_desktop.png'
import previewBurger from '../../assets/images/burger.png'
import previewNikel from '../../assets/images/nikel.png'
import previewRecomendador from '../../assets/images/recomendador.png'
import previewTapputi from '../../assets/images/tapputi.jpeg'
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projectsData = [
        {
            img: previewPortfolio,
            title: "Portfólio",
            description: "Meu portfólio pessoal",
            tech: "HTML | CSS | JavaScript | React | Vite",
            projectLink: "https://portfolio-elanealencar.vercel.app/",
            repoLink: "https://github.com/elanealencar/portfolio/",
          },
          {
            img: previewCatalogo,
            title: "Catálogo de serviços: Aplicação Web + Mobile",
            description: "Gerenciador de catálogo de serviços para usuários web e mobile",
            tech: "Next.JS | React | Typescript | React Native | Tailwind CSS",
            projectLink: "",
            repoLink: "https://github.com/elanealencar/vaga-frontend-MEI-Digital",
          },
          {
            img: previewRecomendador,
            title: "Recomendador de Produtos",
            description: "Recomendador de produtos a partir das preferências e funcionalidades selecionadas pelo usuário",
            tech: "React | Tailwind | Node | json-server",
            projectLink: "https://recomendador-produtos-rd-station.vercel.app/",
            repoLink: "https://github.com/elanealencar/recomendador-produtos-RD-station",
          },
          {
            img: previewPerformance,
            title: "Performance - Site Institucional",
            description: "Site desenvolvido para uma empresa de consultoria ",
            tech: "HTML | CSS | Javascript",
            projectLink: "https://performanceconsultoria.com/",
            repoLink: "https://github.com/elanealencar/performance",
          },
          {
            img: previewTapputi,
            title: "Tapputi - Site E-commerce",
            description: "E-commerce desenvolvido para uma empresa de cosméticos",
            tech: "HTML | CSS | Javascript | Shopify",
            projectLink: "https://tapputibrasil.com/",
            repoLink: "",
          },
          {
            img: previewImc,
            title: "Calculadora de IMC",
            description: "Página dinâmica para cálculo do Índice de Massa Corporal (IMC)",
            tech: "HTML | CSS Modules | Typescript | React | Vite",
            projectLink: "https://calc-imc-theta.vercel.app",
            repoLink: "https://github.com/elanealencar/calc-imc",
          },
          {
            img: previewSorteador,
            title: "Sorteador de Duplas para Campeonato de Futevôlei",
            description: "Aplicação desenvolvida para uma empresa",
            tech: "HTML | Tailwind CSS | Javascript",
            projectLink: "https://sorteio-campeonato.vercel.app/",
            repoLink: "https://github.com/elanealencar/sorteio-campeonato",
          },
          {
            img: previewNikel,
            title: "Nikel - Gerenciador de finanças",
            description: "Aplicação - gerenciador de finanças com login",
            tech: "HTML | Javascript | Bootstrap",
            projectLink: "https://growdev-nikel.vercel.app/",
            repoLink: "https://github.com/elanealencar/growdev-nikel"
          },
          {
            img: previewAvanti,
            title: "Avanti - Loja de E-commerce",
            description: "Página de e-commerce responsiva para uma loja fictícia",
            tech: "HTML | Javascript | Tailwind CSS",
            projectLink: "https://avanti-landing-page.vercel.app/",
            repoLink: "https://github.com/elanealencar/avanti-landing-page"
          },
          {
            img: previewBurger,
            title: "Burger Heaven",
            description: "Página para uma hamburgueria orgânica fictícia",
            tech: " React | Next | Typescript | Tailwind CSS",
            projectLink: "https://burger-page-alpha.vercel.app/",
            repoLink: "https://github.com/elanealencar/burger",
          },
          {
            img: previewNumeros,
            title: "Gerador de números da sorte",
            description: "Aplicação desenvolvida para geração de números da sorte ",
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