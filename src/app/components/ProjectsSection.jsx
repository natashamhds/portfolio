"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {animate, motion, useInView} from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Bizapp X",
        description: "This is a description of project one.",
        image: "/images/projects/1.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/natashamhds/BizappX",
        previewUrl: "/",
        hidePreview: true
    },
    {
        id: 2,
        title: "Bizapp BackOffice",
        description: "This is a description of project two.",
        image: "/images/projects/2.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/natashamhds/BizappBackoffice",
        previewUrl: "https://test-bizapp.web.app/",
        hidePreview: false
    },
    {
        id: 3,
        title: "BizappPOS",
        description: "This is a description of project three.",
        image: "/images/projects/3.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/natashamhds/Bizappos",
        previewUrl: "/",
        hidePreview: true
    },
    {
        id: 4,
        title: "Allgo WMS",
        description: "This is a description of project four.",
        image: "/images/projects/4.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/natashamhds/AGWMS",
        previewUrl: "/",
        hidePreview: true
    },
    {
        id: 5,
        title: "TeamTime",
        description: "This is a description of project five.",
        image: "/images/projects/TeamTime.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/natashamhds/team_time",
        previewUrl: "/",
        hidePreview: false
    },
    {
        id: 6,
        title: "Hero MPOD",
        description: "This is a description of project six.",
        image: "/images/projects/6.jpg",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/natashamhds/HEROMarketMPOD",
        previewUrl: "/",
        hidePreview: false
    },
    {
        id: 7,
        title: "Hero EPOD",
        description: "This is a description of project seven.",
        image: "/images/projects/HERO_epod.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/natashamhds/HeroMarketEPOD",
        previewUrl: "http://47.250.46.2:9898/",
        hidePreview: false
    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChanged = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section>
    <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
        isSelected={tag === "All"}
        onClick={handleTagChanged} 
        name="All"/>

        <ProjectTag 
        isSelected={tag === "Web"}
        onClick={handleTagChanged} 
        name="Web"/>
        
        <ProjectTag 
        isSelected={tag === "Mobile"}
        onClick={handleTagChanged} 
        name="Mobile"/>
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.3}}>
                <ProjectCard 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    hidePreview={project.hidePreview}
                />
            </motion.li>
        ))}
    </ul>
  </section>
  );
}

export default ProjectsSection