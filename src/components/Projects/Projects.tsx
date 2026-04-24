import './Projects.css';
import previewPortfolio from '../../assets/images/portfolio.png';
import previewCatalogo from '../../assets/images/catalogo.png'
import previewConversor from '../../assets/images/conversor-compras.png';
import previewImc from '../../assets/images/imc.png';
import previewNumeros from '../../assets/images/gerador-numeros-da-sorte.png';
import previewPerformance from '../../assets/images/performance.png';
import previewSorteador from '../../assets/images/sorteador.png'
import previewAvanti from '../../assets/images/avanti_desktop.png'
import previewBurger from '../../assets/images/burger.png'
import previewChecklist from '../../assets/images/checklist.png'
import previewNikel from '../../assets/images/nikel.png'
import previewRecomendador from '../../assets/images/recomendador.png'
import previewTapputi from '../../assets/images/tapputi.png'
import previewCurso from '../../assets/images/curso-performance.png'
import previewLacrei from '../../assets/images/lacrei.png'
import previewUncodeStore from '../../assets/images/uncode-store.png'
import ProjectCard from './ProjectCard';

const Projects = () => {

    const projectsData = [
      {
        img: previewPortfolio,
        title: "Portfólio Pessoal",
        description: "Meu portfólio pessoal com projetos, habilidades e informações",
        tech: "HTML | CSS | JavaScript | React | Vite",
        projectLink: "https://portfolio-elanealencar.vercel.app/",
        repoLink: "https://github.com/elanealencar/portfolio/",
      },
      {
          img: previewLacrei,
          title: "Lacrei Saúde",
          description: "Plataforma que conecta profissionais da saúde à pacientes população LGBTQIA+ de forma inclusiva e acolhedora. Atuei como desenvolvedora e mentora do time de front-end.",
          tech: "Next.JS | React | Typescript | Node.js",
          projectLink: "https://lacreisaude.com.br/",
          repoLink: "https://github.com/Lacrei",
        },
      {
        img: previewCurso,
        title: "Landing Page - Página de Curso",
        description: "Página desenvolvida para um curso presencial e online, com design responsivo e interatividade. Apresenta integração com check-out para aquisição e pagamento.",
        tech: "HTML | Javascript | Tailwind CSS",
        projectLink: "https://performanceconsultoria.com/curso/",
        repoLink: "https://github.com/elanealencar/performance/tree/main/dist/curso",
      },
      {
        img: previewChecklist,
        title: "Sistema de Autoinspeção e Maturidade BPF",
        description: "Sistema desenvolvido para uso real em indústrias de cosméticos e saneantescom foco na avaliação contínua de conformidade com as Boas Práticas de Fabricação. O sistema permite a execução de checklists dinâmicos, cálculo automático de indicadores, classificação por nível de maturidade e geração de diagnósticos estratégicos.",
        tech: "React | Vite | TypeScript | Tailwind CSS",
        projectLink: "https://performanceconsultoria.com/checklist/",
        repoLink: "https://github.com/elanealencar/performance",
      },
      {
        img: previewPerformance,
        title: "Performance - Site Institucional",
        description: "Site desenvolvido para uma empresa de consultoria, com design responsivo e interatividade.",
        tech: "HTML | CSS | Javascript",
        projectLink: "https://performanceconsultoria.com/",
        repoLink: "https://github.com/elanealencar/performance",
      },
      {
        img: previewConversor,
        title: "Conversor de Compras Internacionais",
        description: "Conversor automático de moedas para compras internacionais em Orlando, usando a cotação do dólar em tempo real. Opção de incluir imposto, gorjeta, cupons de desconto e saber o valor real de cada compra.",
        tech: "HTML | CSS | Javascript",
        projectLink: "https://conversor-compras.vercel.app/",
        repoLink: "https://github.com/elanealencar/conversor-compras",
      },
      {
        img: previewTapputi,
        title: "Tapputi - Site E-commerce",
        description: "E-commerce desenvolvido para uma empresa de cosméticos. Apresenta página inicial e dos produtos, com integração ao carrinho e checkout de pagamentos.",
        tech: "HTML | CSS | Javascript | Shopify",
        projectLink: "https://tapputibrasil.com/",
        repoLink: "",
      },
      {
        img: previewUncodeStore,
        title: "Uncode Store - Site E-commerce",
        description: "E-commerce fictício de produtos dev, com carrinho de compras e detalhes dos produtos.",
        tech: "Next.js | React | Context API | Tailwind | Cypress",
        projectLink: "https://uncode-ecommerce.vercel.app/",
        repoLink: "https://github.com/elanealencar/uncode-dev-2026",
      },
      {
        img: previewCatalogo,
        title: "Catálogo de serviços: Aplicação Web + Mobile",
        description: "Gerenciador de catálogo de serviços para usuários web e mobile",
        tech: "Next.JS | React | Typescript | React Native | Tailwind CSS",
        projectLink: "https://github.com/elanealencar/vaga-frontend-MEI-Digital",
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