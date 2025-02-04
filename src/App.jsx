import React from "react";
import "./App.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import projects from "./helper/Projects";
import Sidebar from "./layouts/Sidebar";
import Projects from "./pages/Projects";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className=" bg-white dark:bg-gray-950 dark:text-white font-inter px-5">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <Sidebar />

            <div className="w-full space-y-4 flex flex-col justify-center">
              <About />
              <div className="flex flex-col gap-4">
                <h2>Projects</h2>
                {projects.map((project, index) => (
                  <Projects key={index} project={project} />
                ))}
              </div>
              <Experience />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
