import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Facebook, Linkedin, Github,Home, Briefcase, Mail, Moon, Sun, } from "lucide-react";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navItems, links } from "../helper/Sidebar.js";


function Sidebar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const onNavItemClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-slate-50 w-full md:sticky sm:static top-0 md:h-screen sm:h-auto flex flex-col md:mt-0 mt-6 justify-center space-y-5">
      <div className="flex items-center gap-2">
        <Switch
          checked={darkMode}
          onCheckedChange={() => {
            setDarkMode(!darkMode);
          }}
        />
        {darkMode ? <Moon /> : <Sun className="text-slate-950" />}
      </div>
      <h1 className="text-5xl font-semibold">Ronel G. Vega</h1>
      <h3 className="">Full Stack Developer</h3>
      <p className="">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>

      <nav>
        <ScrollArea className="h-full py-8 max-w-sm">
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-slate-900 dark:text-slate-50"
                onClick={() => onNavItemClick(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </nav>

      <div className="flex gap-3">
        {links.map((item, index) => (
          <a
          key={index}
            href="https://web.facebook.com/vega.ronel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar >
              <AvatarImage  src={<item.img />} />
              <AvatarFallback className="bg-slate-800 dark:bg-slate-200">{<item.img className="dark:text-slate-800 text-slate-50" />}</AvatarFallback>
            </Avatar>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
