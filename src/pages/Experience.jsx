"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const experiences = [
  {
    title: "PHP Developer Intern",
    company: "Praetorian",
    duration: "Summer 2024", // You can adjust this to the actual duration
    description: "Worked as an intern focusing on PHP development using the CodeIgniter framework. Contributed to web application development and gained hands-on experience with various web technologies.",
    technologies: ["PHP", "CodeIgniter", "Bootstrap", "XAMPP", "jQuery"]
  },
  // You can add more experiences here if you have any
]

export default function Experience() {
  return (
    <section className="" id="experience">
      <h2 className="">Work Experience</h2>
      <div className="space-y-6 mt-3">
        {experiences.map((exp, index) => (
          <Card key={index} className="w-full border-0 dark:hover:bg-slate-900 hover:bg-slate-200 bg-slate-100 dark:bg-slate-950 cursor-pointer transition-all duration-400 hover:shadow-2xl shadow-purple-50">
            <CardHeader>
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <CardDescription className="text-base">
                {exp.company} | {exp.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
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
    </section>
  )
}

