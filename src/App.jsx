import React from "react";
import "./App.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Sidebar from "./layouts/Sidebar";
import Projects from "./pages/Projects";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router";
import Skills from "./pages/Skills";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-950 dark:text-white font-inter px-5">
          <div className="flex flex-col md:flex-row space-y-4">
            <Sidebar />
            <div className="w-full space-y-4 flex flex-col justify-center">
              <About />
              <Skills />
              <Projects />
              <Experience />
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
