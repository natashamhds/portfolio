"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (ID) => {
    startTransition(() => {
      setTab(ID);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="./images/about-image.png"
          alt="screen-image"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a multiframework developer with a passion for creating
            interactive, attractive, and responsive applications. I have
            experience working with Flutter, NextJS, MySQL, HTML, CSS, and Git.
            I am a quick learner and always looking to expand my knowledge and
            skill set. I am a great team player and excited to work with others
            to create amazing applications. Let's connect!
          </p>

          {/* Tabs section */}
          <div className="flex flex-row mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >{""}Skills{""}</TabButton>
            
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >{""}Education{""}</TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >{""}Experience{""}</TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
