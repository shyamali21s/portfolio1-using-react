import './App.scss';
import Home from './container/home';
import About from './container/about';
import Resume from './container/resume';
import Skills from './container/skills';  // Correct case
import Portfolio from './container/portfolio';
import Contact from './container/conatct'; // Fixed typo
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <NavBar />

      {/* Main content with sections */}
      <div className="App_mainPageContent">
        {/* Each section has an ID for navigation */}
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
