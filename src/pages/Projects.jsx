import ReusableMotion from "../components/ReusableMotion"; // Import the reusable component
import ProjectList from "@/components/ProjectList";
import projects from "../helper/Projects";

function Projects() {
  return (
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
          <ProjectList project={project} />
        </ReusableMotion>
      ))}
    </ReusableMotion>
  );
}

export default Projects;
