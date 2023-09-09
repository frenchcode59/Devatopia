
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technolgies from "./components/Technolgies";
import '@fortawesome/fontawesome-free/css/all.css';
import Number from "./components/Number";
import Project from "./components/Project";
import Team from "./components/team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <Technolgies/>
        <Number/>
        <Project/>
        <Team/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
