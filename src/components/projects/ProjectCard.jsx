import { memo } from "react";
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
import Github from "lucide-react/icons/github";
import ExternalLink from "lucide-react/icons/external-link";
import SpotlightCard from "@/components/SpotlightCard";

const ProjectCard = memo(function ProjectCard({
  name,
  status,
  description,
  technologies = [],
  github,
  liveDemo,
}) {
  return (
    <SpotlightCard
      className="p-0 bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <Card
        className="w-full cursor-pointer transition-all
        dark:shadow-[0_0_8px_rgba(8,_112,_184,_0.7)]
        dark:hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.7)]
        shadow-[0_0_8px_#4a5568]
        hover:shadow-[0_0_15px_#a0aec0]"
      >
        <CardHeader>
          <div className="flex justify-between gap-3">
            <CardTitle className="text-2xl font-bold">{name}</CardTitle>
            {status && <span className="text-sm font-light">{status}</span>}
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {!!technologies.length && (
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={`${name}-${tech}`} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        )}
        <CardFooter className="flex justify-between gap-3">
          {github && (
            <Button variant="outline" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {liveDemo && (
            <Button asChild>
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </SpotlightCard>
  );
});

export default ProjectCard;
