import React from "react";
import { motion } from "framer-motion"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

function Projects({ project }) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }} // Allow animations to replay
    transition={{ duration: 0.5 }}
    className="project-item mt-4"
    id="projects">
      <Card className="w-full border-0 bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 duration-400 hover:bg-slate-200  cursor-pointer transition-all hover:shadow-2xl shadow-purple-50">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-2xl font-bold">
              {project.name}{" "}
            </CardTitle>
            <span className="text-sm font-light">{project.status}</span>
          </div>

          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button onClick={() => window.open(project.liveDemo, "_blank")}>
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default Projects;
