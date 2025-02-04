const projects = [
  {
    name: "Permaculture Web App",
    description:
      "A web application designed to help household families in Brgy. Guinacutan, Vinzons, Camarines Norte. It includes Arduino integration to detect if plants need watering, allows users to add new plants with estimated harvest times, and features a weather API, plant disease detection, and a forum for user communication.",
    technologies: ["Node.js", "Express", "Bootstrap", "EJS", "Arduino"],
    github: "https://github.com/vegaronel/permaculture",
    liveDemo: "", // Add your live demo link here if available
  },
  {
    name: "Tell No One",
    description:
      "A random messaging web app where users can share their link to receive anonymous messages. It ensures complete anonymity for the sender.",
    technologies: ["Node.js", "Express", "Bootstrap", "EJS", "Postgres"],
    github: "https://github.com/vegaronel/nc-project",
    liveDemo: "https://nc-project-ycrc.onrender.com/",
  },
  {
    name: "Food Recipe Sharing",
    description:
      "A blog-like platform where users can share and explore food recipes. It functions like a social media platform for food enthusiasts.",
    technologies: [
      "Node.js",
      "Express",
      "React.js",
      "Postgres",
      "Supabase",
      "Tailwind CSS",
      "shadcn",
    ],
    github: "https://github.com/vegaronel/food-recipe-sharing",
    liveDemo: "https://food-recipe-sharing-one.vercel.app/",
    status: "In-progress"
  },
];

export default projects;