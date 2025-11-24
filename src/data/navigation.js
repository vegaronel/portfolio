import Home from "lucide-react/icons/home";
import Briefcase from "lucide-react/icons/briefcase";
import Mail from "lucide-react/icons/mail";
import Facebook from "lucide-react/icons/facebook";
import Linkedin from "lucide-react/icons/linkedin";
import Github from "lucide-react/icons/github";

const navItems = [
  { icon: Home, label: "About", id: "about" },
  { icon: Briefcase, label: "Projects", id: "projects" },
  { icon: Mail, label: "Experience", id: "experience" },
];

const links = [
  { href: "https://web.facebook.com/vega.ronel", icon: Facebook, label: "Facebook" },
  {
    href: "https://www.linkedin.com/in/ronel-vega-b44a45301",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/vegaronel", icon: Github, label: "GitHub" },
];

export { navItems, links };
