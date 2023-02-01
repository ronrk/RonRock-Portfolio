import { Abilities } from "@/utils";
import Image from "next/image";
import React from "react";
import Ability from "./Ability/Ability";
import AboutAbilitiesWrappper from "./AboutAbilities.wrapper";

const AboutAbilities = () => {
  return (
    <AboutAbilitiesWrappper className="flex-col">
      <div className="image-wrapper">
        <Image src={"/assets/images/RonPhoto.jpeg"} alt={"photo"} fill />
      </div>

      <div className="content">
        <h2 className="section-title text-primary-light fs-700 mb-2">
          Nice to meet you
        </h2>
        <p className="fs-600">
          {`I'm on my entry point steps in the web development world. I'm a
          self-taught that have an experience in doing a lot of real world
          projects.`}
        </p>
      </div>

      <div className="abilities">
        {Abilities.map((ability, idx) => (
          <Ability key={idx} {...ability} />
        ))}
      </div>
    </AboutAbilitiesWrappper>
  );
};

export default AboutAbilities;
