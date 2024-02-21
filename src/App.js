import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import AboutMe from "./components/AboutMe/aboutme";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
