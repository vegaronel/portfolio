import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function ExperienceList() {
  return (
    <div>
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="w-full bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 duration-400 hover:bg-slate-200  cursor-pointer transition-all 
      shadow-[0_0_8px_rgba(8,_112,_184,_0.7)]
      hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.7)]
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
      ))}
    </div>
  );
}

export default ExperienceList;

const experiences = [
  {
    title: "PHP Developer Intern",
    company: "Praetorian Intelligence Inc.",
    duration: "Summer 2024", // You can adjust this to the actual duration
    description:
      "Worked as an intern focusing on PHP development using the CodeIgniter framework. Contributed to web application development and gained hands-on experience with various web technologies.",
    technologies: ["PHP", "CodeIgniter", "Bootstrap", "XAMPP", "jQuery"],
  },
  // You can add more experiences here if you have any
];
