import { memo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import experiences from "@/data/experience";
import SpotlightCard from "@/components/SpotlightCard";

function ExperienceList() {
  return (
    <div>
      {experiences.map((exp, index) => (
        <SpotlightCard
          key={`${exp.title}-${index}`}
          className="p-0 bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <Card
            className="w-full bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 duration-400 hover:bg-slate-200  cursor-pointer transition-all 
          dark:shadow-[0_0_8px_rgba(8,_112,_184,_0.7)]
          dark:hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.7)]
          shadow-[0_0_8px_#4a5568]
          hover:shadow-[0_0_15px_#a0aec0]
      "
          >
            <CardHeader>
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <CardDescription className="text-base">
                {exp.company} | {exp.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {index < experiences.length - 1 && <Separator className="my-4" />}
          </Card>
        </SpotlightCard>
      ))}
    </div>
  );
}

export default memo(ExperienceList);
