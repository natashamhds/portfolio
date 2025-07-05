import React from "react";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        id: 1,
        title: "Bizapp X",
        description: "This is a description of project one.",
        image: "/images/projects/1.jpg",
        tag: ["All", "Mobile"]
    },
    {
        id: 2,
        title: "Bizapp BackOffice",
        description: "This is a description of project one.",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "BizappPOS",
        description: "This is a description of project one.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Mobile"]
    },
    {
        id: 4,
        title: "Allgo WMS",
        description: "This is a description of project one.",
        image: "/images/projects/4.jpg",
        tag: ["All", "Mobile"]
    },
    {
        id: 5,
        title: "Allgo VMS",
        description: "This is a description of project one.",
        image: "/images/projects/5.jpg",
        tag: ["All", "Web"]
    },
    {
        id: 6,
        title: "Hero MPOD",
        description: "This is a description of project one.",
        image: "/images/projects/6.jpg",
        tag: ["All", "Mobile"]
    },
    {
        id: 7,
        title: "Hero EPOD",
        description: "This is a description of project one.",
        image: "/images/projects/7.jpg",
        tag: ["All", "Web"]
    }
];

const ProjectsSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div>{TAB_DATA.find((project) => <ProjectCard key = {project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}</div>
    </>
  )
}

export default ProjectsSection