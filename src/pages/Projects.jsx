import React from "react";
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
    <div id="projects" className="">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
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
    </div>
  );
}

export default Projects;
