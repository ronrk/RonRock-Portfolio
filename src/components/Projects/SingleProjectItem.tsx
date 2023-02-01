import { IProject, technologiesList } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import SingleProjectItemWrapper from "./SingleProjectItem.wrapper";

interface IProps {
  project: IProject;
}

const SingleProjectItem: FC<IProps> = ({ project }) => {
  const { image, title, repository, description, path, technologies } = project;
  const projectTechnologies = technologies.map((techLabel) =>
    technologiesList.find((tech) => tech.label === techLabel)
  );

  return (
    <SingleProjectItemWrapper className="flex">
      <div className="content flex-col">
        <h2 className="fs-700 text-white uppercase">{title}</h2>
        <p className="fs-500">{description}</p>
        <h3 className="text-white fs-500">
          Technologies i used in this project:
        </h3>
        <div className="technologies flex">
          {projectTechnologies.map((tech) => {
            if (!tech) return;
            return (
              <div key={tech.label} className="tech__box flex-col">
                <p className="section-title">{tech.label}</p>
                <tech.icon />
              </div>
            );
          })}
        </div>
      </div>
      <div className="image-wrapper">
        <Image src={image} alt={title} fill />
        <ul className="links flex">
          <li>
            <Link href={`/projects${path}`}>Preview Page</Link>
          </li>
          <hr />
          <li>
            <Link href={repository} target="_blank">
              Github Repository
            </Link>
          </li>
        </ul>
      </div>
    </SingleProjectItemWrapper>
  );
};

export default SingleProjectItem;
