import { Suspense, lazy } from "react";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router";
import Footer from "./layouts/Footer";

const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));

const SectionFallback = ({ label }) => (
  <div
    role="status"
    aria-live="polite"
    className="h-32 w-full rounded-2xl bg-slate-100 dark:bg-slate-900 animate-pulse"
  >
    <span className="sr-only">{`Loading ${label} section`}</span>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="max-w-6xl mx-auto font-inter px-5">
          <div className="flex flex-col md:flex-row space-y-4">
            <Sidebar />
            <div className="w-full space-y-4 flex flex-col justify-center">
              <Suspense fallback={<SectionFallback label="About" />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionFallback label="Skills" />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionFallback label="Projects" />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionFallback label="Experience" />}>
                <Experience />
              </Suspense>
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
