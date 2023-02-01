import { IProject } from "@/utils";
import React, { FC } from "react";
import ProjectsDisplayWrapper from "./ProjectsDisplay.wrapper";
import SingleProjectItem from "./SingleProjectItem";
interface IProps {
  projects: IProject[];
}

const ProjectsDisplay: FC<IProps> = ({ projects }) => {
  return (
    <ProjectsDisplayWrapper className="flex-col">
      {projects.map((project) => (
        <SingleProjectItem key={project.path} project={project} />
      ))}
    </ProjectsDisplayWrapper>
  );
};

export default ProjectsDisplay;
