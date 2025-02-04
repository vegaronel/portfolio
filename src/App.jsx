import React from "react";
import "./App.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import projects from "./helper/Projects";
import Sidebar from "./layouts/Sidebar";
import Projects from "./pages/Projects";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router";
import Skills from "./pages/Skills";
import ReusableMotion from "./components/ReusableMotion"; // Import the reusable component

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="bg-white dark:bg-gray-950 dark:text-white font-inter px-5">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <Sidebar />
            <div className="w-full space-y-4 flex flex-col justify-center">
              <ReusableMotion>
                <About />
              </ReusableMotion>
              <ReusableMotion>
                <Skills />
              </ReusableMotion>
              <ReusableMotion
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-base">Projects</h2>
                {projects.map((project, index) => (
                  <ReusableMotion
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Projects project={project} />
                  </ReusableMotion>
                ))}
              </ReusableMotion>

              {/* Experience Section */}
              <ReusableMotion>
                <Experience />
              </ReusableMotion>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;