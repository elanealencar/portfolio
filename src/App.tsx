//@ts-ignore
import Menu from "./components/Menu/Menu";
import Initial from "./components/Initial/Initial";
import About from "./components/About/About";
import Habilidades from "./components/Habilities/Habilities";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <div>
            <Menu />
            <Initial />
            <About />
            <Habilidades />
            <Projects />
            <Services />
            <Footer />

        </div>
    );
};

export default App;