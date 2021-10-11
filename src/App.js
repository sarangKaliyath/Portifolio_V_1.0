import "./App.css";
import { Navbar } from './Components/Navbar';
import { SocialLinks } from './Components/SocialLinks';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import {Contact } from './Components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <SocialLinks />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
