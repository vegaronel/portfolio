import { memo } from "react";
import ReusableMotion from "@/components/ReusableMotion";
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

function ExperienceList() {
  return (
    <div>
      {experiences.map((exp, index) => (
        <ReusableMotion
          key={`${exp.title}-${index}`}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          className="w-full"
        >
          <Card
            className="w-full bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 duration-400 hover:bg-slate-200 cursor-pointer transition-all 
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
        </ReusableMotion>
      ))}
    </div>
  );
}

export default memo(ExperienceList);
