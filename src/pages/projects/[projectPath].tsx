import SingleProjectIframe from "@/components/Projects/SingleProject/SingleProjectIframe";
import { IProject, projects } from "@/utils";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
interface IProps {
  project: IProject | null;
}

const ProjectPage: FC<IProps> = ({ project }) => {
  if (!project) {
    return <></>;
  }
  const { liveLink, title } = project;
  return (
    <>
      <Head>
        <title>RonRock | {title}</title>
        <meta
          name="description"
          content="Ron Rock front end, full-stack, back end developer. create bt Ron Rockah 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/Crop@Shadow2@2x.png" />
      </Head>
      <main>
        <SingleProjectIframe link={liveLink} />
      </main>
    </>
  );
};

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let props: IProps = {
    project: null,
  };
  const { projectPath } = context.params as any;

  const singleProject = projects.find(
    (project) => project.path === "/" + projectPath
  );

  props.project = singleProject || null;

  return {
    props,
  };
};
