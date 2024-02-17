import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Banner } from "./components/Banner";
// import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
