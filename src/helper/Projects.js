const projects = [
  {
    name: "Project Seed",
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
    name: "Job Compass Tracker",
    description:
      "o	Job Compass is a React web app that centralizes job search management. It connects securely to Gmail via OAuth to ingest and categorize recruiting emails, tracks applications and interviews in a streamlined dashboard with real-time stats, and includes an AI assistant for summarizing threads and drafting responses",
    technologies: [
      "Nextjs",
      "Postgres",
      "Supabase",
      "Tailwind CSS",
      "shadcn",
    ],
    github: "https://github.com/vegaronel/job-compass-career-tracker",
    liveDemo: "https://job-compass-career-tracker.vercel.app/#",
    status: "Completed"
  },
];

export default projects;