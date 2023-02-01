import ProjectsBar from "@/components/Projects/ProjectsBar";
import ProjectsDisplay from "@/components/Projects/ProjectsDisplay";
import { projects } from "@/utils";
import Head from "next/head";
import React, { useState } from "react";

const ProjectsPage = () => {
  const [categorySelected, setCategorySelected] = useState("website");
  let filteredProjects = projects.filter(
    (project) => project.category === categorySelected
  );
  const handleCategoryChange = (category: string) => {
    setCategorySelected(category);
  };
  return (
    <>
      <Head>
        <title>RonRock | Projects</title>
        <meta
          name="description"
          content="Ron Rock front end, full-stack, back end developer. create bt Ron Rockah 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/Crop@Shadow2@2x.png" />
      </Head>
      <main className="projects-page">
        <h2 className="section-title text-secondary-light fs-800 mb-2">
          My Projects
        </h2>
        <ProjectsBar
          categorySelected={categorySelected}
          onChange={handleCategoryChange}
        />
        <ProjectsDisplay projects={filteredProjects} />
      </main>
    </>
  );
};

export default ProjectsPage;
