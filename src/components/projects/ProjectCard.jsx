import { memo, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import CircularGallery from "@/components/CircularGallery";
import { ThemeContext } from "@/context/ThemeContext";

const ProjectCard = memo(function ProjectCard({
  name,
  images = [],
  status,
  description,
  technologies = [],
  github,
  liveDemo,
}) {
  const [showGallery, setShowGallery] = useState(false);
  const { darkMode } = useContext(ThemeContext);
  const hasImages = Array.isArray(images) && images.length > 0;

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
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 justify-between">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={`${name}-${tech}`} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              {hasImages && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowGallery((prev) => !prev)}
                  aria-expanded={showGallery}
                  aria-label={
                    showGallery
                      ? "Hide project gallery"
                      : "View project gallery"
                  }
                >
                  {showGallery ? "Hide Gallery" : "View Gallery"}
                </Button>
              )}
            </div>
            {hasImages && (
              <AnimatePresence initial={false}>
                {showGallery && (
                  <motion.div
                    key="gallery"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 400 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="h-[400px] relative">
                      <CircularGallery
                        items={images}
                        bend={0}
                        textColor={darkMode ? "#ffffff" : "#000000"}
                        borderRadius={0.05}
                        scrollEase={0.02}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
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
