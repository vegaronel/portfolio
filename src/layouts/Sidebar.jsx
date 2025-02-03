import React from "react";
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Briefcase, Mail } from "lucide-react"

const navItems = [
  { icon: Home, label: "About", id: "about" },
  { icon: Briefcase, label: "Projects", id: "projects" },
  { icon: Mail, label: "Contact", id: "contact" },
]

function Sidebar() {

  const onNavItemClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
      <div className="text-slate-50 w-full md:sticky sm:static top-0 md:h-screen sm:h-auto flex flex-col md:mt-0 mt-6 justify-center space-y-5">
        <h1 className="text-5xl font-semibold">Ronel G. Vega</h1>
        <h3 className="">Full Stack Developer</h3>
        <p className="">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav>
        <ScrollArea className="h-full py-8 max-w-sm">
      <div className="space-y-1">
        {navItems.map((item, index) => (
          <Button key={index} variant="ghost" className="w-full justify-start" onClick={() => onNavItemClick(item.id)}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </div>
    </ScrollArea>
        </nav>
      </div>
  );
}

export default Sidebar;
