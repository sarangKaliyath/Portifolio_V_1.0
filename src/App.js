import "./App.css";
// import { Routes } from "./Routes/Routes";
import { Navbar } from './Components/Navbar';
import { SocialLinks } from './Components/SocialLinks';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
function App() {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <About />
      <Projects />
    </div>
  );
}

export default App;
