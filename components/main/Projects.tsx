import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/applesite.gif"
          title="Apple Website Clone"
          description="Created a clone of the Apple website using React, Three.js and GSAP.
          https://github.com/hitendraa/Apple_Website"
        />
        <ProjectCard
          src="/travel.png"
          title="Travel Website"
          description="Fully Responsive Modern Travel Website in React.js, Next.js and Tailwind CSS.
          https://github.com/hitendraa/travel-website "
        />
        <ProjectCard
          src="/preview.png"
          title="Portfolio Website"
          description="Created a portfolio website using Next.js, Tailwind CSS and Framer Motion."
        />
      </div>
    </div>
  );
};

export default Projects;
