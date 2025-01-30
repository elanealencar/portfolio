import './Menu.css';


const Menu = () => {
  return (
    <nav className="menu">
        <div className="menu-left">&lt; Elane Alencar /&gt;</div>

        <ul className="menu-right">
            <li><a href="#initial">Início</a></li>
            <li><a href="#about-section">Sobre Mim</a></li>
            <li><a href="#habilities-section">Habilidades</a></li>
            <li><a href="#projects-section">Projetos</a></li>
            <li><a href="#services-section">Serviços</a></li>
            <li><a href="#footer-section">Contato</a></li>
        </ul>
    </nav>
  );
};

export default Menu;
