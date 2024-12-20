import React from 'react'
import ProjectMap from '../components/ProjectMap';
import { useLanguage } from '../actions/LangChange';

export default function Projects() {
  const {t} =useLanguage();

  const projects = [
    {
      img: "\\assets\\project1.png",  
      title: t.projectsTitle.first,  
      description: t.projectsParagraph.first,
      technologies: ["react", "redux", "axios"],
      githubLink: "https://github.com/Burak-Salca/pizza-project",
      siteLink:"https://pizza-project-gilt.vercel.app/"
    
    },
    {
      img: "\\assets\\project2.png",
      title: t.projectsTitle.second,
      description: t.projectsParagraph.second,
      technologies: ["react", "tailwind", "toastify"],
      githubLink: "https://github.com/Burak-Salca/frontendChallenge",
      siteLink:"https://frontend-challenge-tan.vercel.app/"
    }
  ];

  return (
    <div id="projects" className="flex flex-col gap-10">
      <div className="font-Inter font-semibold text-5xl text-[#1F2937] dark:text-specialWhite pt-10 text-center sm:text-start">
        {t.projects}
      </div>
      <div className="flex flex-wrap justify-between gap-10">
        {projects.map((project, index) => (
        <ProjectMap key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
