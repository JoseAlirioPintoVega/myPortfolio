import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
