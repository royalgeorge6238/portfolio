import './App.css';
import About from './sections/About';
import Home from './sections/Home';
import Navbar from './sections/Navbar';
import Skill from './sections/Skill';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
function App() {
  return (
    <>

      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
