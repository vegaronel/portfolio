import React from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import projects from "./helper/Projects";
import Sidebar from "./layouts/Sidebar";
import Projects from "./pages/Projects";



function App() {



  return (
    <div className=" bg-slate-950 font-inter px-5">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        <Sidebar />
        <div className="w-full flex flex-col justify-center">
          <About/>
          <div className="flex flex-col gap-4">
            <h2>Projects</h2>
            {projects.map((project, index) => (
              <Projects key={index} project={project} />
            ))}
          </div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
