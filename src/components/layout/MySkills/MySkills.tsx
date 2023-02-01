import {
  IconCss,
  IconFigma,
  IconHtml,
  IconJs,
  IconMui,
  IconNext,
  IconNode,
  IconPhoto,
  IconReact,
  IconRedux,
  IconStyled,
  IconVite,
} from "@/components/ui/icons";
import React from "react";
import MySkillsWrapper from "./MySkills.wrapper";

const MySkills = () => {
  return (
    <section className="skills flex-col">
      <h2 className="section-title text-white fs-500">My Skills</h2>
      <MySkillsWrapper>
        <IconCss />
        <IconHtml />
        <IconJs />
        <IconMui />
        <IconNode />
        <IconReact />
        <IconRedux />
        <IconStyled />
        <IconVite />
        <IconNext />
        <IconFigma />
        <IconPhoto />
      </MySkillsWrapper>
    </section>
  );
};

export default MySkills;
