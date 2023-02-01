import { projects } from "@/utils";
import React, { FC } from "react";
import ProjectsBarWrapper from "./ProjectsBar.wrapper";

interface IProps {
  categorySelected: string;
  onChange: (category: string) => void;
}

const categories = Array.from(new Set(projects.map((item) => item.category)));

const ProjectsBar: FC<IProps> = ({ categorySelected, onChange }) => {
  return (
    <ProjectsBarWrapper>
      <ul className="flex fs-600">
        {categories.map((category) => (
          <li
            key={category}
            className={category === categorySelected ? "active" : ""}
          >
            <button onClick={() => onChange(category)}>{category}s</button>
          </li>
        ))}
      </ul>
    </ProjectsBarWrapper>
  );
};

export default ProjectsBar;
