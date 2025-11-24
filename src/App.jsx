import { Suspense, lazy } from "react";
import "./App.css";
import Sidebar from "./layouts/Sidebar";
import ThemeProvider from "./context/ThemeContext";
import { BrowserRouter } from "react-router";
import Footer from "./layouts/Footer";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";
import SectionSkeleton from "@/components/skeletons/SectionSkeleton";

const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Experience = lazy(() => import("./pages/Experience"));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="max-w-6xl mx-auto font-inter px-5">
          <div className="flex flex-col md:flex-row space-y-4">
            <Sidebar />
            <div className="w-full space-y-4 flex flex-col justify-center">
              <Suspense fallback={<AboutSkeleton />}>
                <About />
              </Suspense>
              <Suspense fallback={<SectionSkeleton label="Skills" />}>
                <Skills />
              </Suspense>
              <Suspense fallback={<SectionSkeleton label="Projects" />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<SectionSkeleton label="Experience" />}>
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
