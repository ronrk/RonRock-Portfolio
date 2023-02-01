import { IProject } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import SingleFeaturedWrapper from "./SingleFeaturedProject.wrapper";

interface IProps {
  project: IProject;
}

const SingleFeaturedProject: FC<IProps> = ({ project }) => {
  const { title, category, image, path } = project;
  return (
    <Link href={`/projects${path}`}>
      <SingleFeaturedWrapper>
        <div className="project-details">
          <h3 className="fs-600 fw-b section-title text-white bg-secondary">
            {title}
          </h3>
        </div>
        <div className="img-wrapper">
          <Image src={image} alt={title} fill />
        </div>
        <div className="project-overlay fs-600 text-white fw-b flex-col ">
          <h3 className="fw-m">{title}</h3>
          <p className="fs-500 fw-l">{category}</p>
          <p className="fs-400 fw-b">Click for preview</p>
        </div>
      </SingleFeaturedWrapper>
    </Link>
  );
};

export default SingleFeaturedProject;
