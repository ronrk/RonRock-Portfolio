import { projects } from "@/utils";
import React from "react";
import FeaturedProjectsWrapper from "./FeaturedProjects.wrapper";
import SingleFeaturedProject from "./single-featured-project/SingleFeaturedProject";

const FeaturedProject = () => {
  return (
    <FeaturedProjectsWrapper>
      {projects
        .filter((project) => project.featured)
        .map((project, idx) => (
          <SingleFeaturedProject key={idx} project={project} />
        ))}
    </FeaturedProjectsWrapper>
  );
};

export default FeaturedProject;
