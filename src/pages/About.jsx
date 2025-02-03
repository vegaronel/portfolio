import React from "react";

function About() {
  return (
    <div id="about">
      <div className="md:h-screen h-auto flex flex-col md:justify-center sm:justify-start py-4 md:py-0 ">
        <h2>About</h2>
        <p className="text-lg text-slate-400 mt-4">
          I am a passionate full-stack developer specializing in React, Node.js
          (Express), and PostgreSQL, with a strong focus on building scalable
          web applications. With hands-on experience in frontend and backend
          development, I have worked on projects ranging from CRM systems and
          e-commerce platforms to AI-powered chatbots and recipe-sharing
          applications. My expertise lies in crafting clean, efficient, and
          user-friendly interfaces while ensuring robust backend functionality.
          I am always eager to learn new technologies, solve complex problems,
          and optimize performance. Whether it's building interactive UIs,
          designing RESTful APIs, or implementing secure authentication systems,
          I thrive in creating high-quality digital solutions that drive real
          impact. 🚀
        </p>
      </div>
    </div>
  );
}

export default About;
