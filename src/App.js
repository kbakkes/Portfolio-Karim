import './App.scss';
import Navigation from './components/navigation';
import Home from './components/home';
import Curve from './components/curve';
import About from './sections/about/about';
import Projects from './sections/projects/projects';
import Skills from './sections/skills/skills';
import Footer from './sections/footer/footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Curve  />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
