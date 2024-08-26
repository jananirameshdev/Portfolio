import './App.css';
import Info from './Info';
import Project from "./Project";
import About from "./About";
import ProjectData from './ProjectData';
import Projects from "./Projects";
import Contact from './Contact';
function App() {
  const proj = ProjectData.map(ProjectDatas => {
    return (
      <Project
        {...ProjectDatas} />

    )
  }
  )
  return (
    <div className="container">
      <Info />
      <Projects />
      {proj}
      <About />
      <Contact />
    </div>
  );
}

export default App;
