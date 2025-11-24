import React from "react";
import ReusableMotion from "@/components/ReusableMotion";
function About() {
  return (
    <ReusableMotion>
      <div id="about">
        <div className="md:h-screen h-auto flex flex-col md:justify-center sm:justify-start md:py-0 space-y-2">
          <h2 className="text-md">About</h2>
          <p className="text-2xl font-semibold">Hi, I’m Ronel Vega.</p>
          <p className="">
            I’m a passionate{" "}
            <span className="font-bold">Full Stack Developer</span> with a love
            for creating beautiful, functional websites using{" "}
            <span className="font-bold">React</span>. I thrive on turning ideas
            into reality through clean, efficient code and intuitive user
            interfaces. My journey in web development is fueled by a constant
            desire to learn and grow, and I’m always exploring new technologies
            to expand my skill set.
          </p>
          <p>
            When I’m not coding, you can find me <span>jogging</span> to stay
            active and maintain a healthy balance between work and wellness. I
            believe that a strong mind and body go hand in hand, and this
            mindset helps me stay focused and creative in my work.
          </p>
        </div>
      </div>
    </ReusableMotion>
  );
}

export default About;
