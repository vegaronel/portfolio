import ReusableMotion from "@/components/ReusableMotion";
import ProjectCard from "@/components/projects/ProjectCard";
import projects from "@/data/projects";

function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <ReusableMotion
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-base">Projects</h2>
      </ReusableMotion>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ReusableMotion
            key={project.name}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <ProjectCard {...project} />
          </ReusableMotion>
        ))}
      </div>
    </section>
  );
}

export default Projects;
