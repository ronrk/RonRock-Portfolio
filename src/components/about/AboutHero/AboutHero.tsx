import Image from "next/image";
import React from "react";
import AboutHeroWrapper from "./AboutHero.wrapper";

const AboutHero = () => {
  return (
    <AboutHeroWrapper className="flex-col">
      <div className="content">
        <div className="flex mb-2">
          <h2 className="fs-800 text-secondary-light section-title mb-2 fw-m">
            {`Hi, I'm`} <span className="text-white fw-b">Ron</span>
          </h2>
          <div className="image_wrapper">
            <Image src={"/assets/images/Crop@Shadow2@2x.png"} alt="ron" fill />
          </div>
        </div>

        <p className="fs-600 text-white">
          Enthusiastic focused, motivated Frontend Software Engineer experience
          of building Web applications, Websites and Landing pages with
          Javascript libraries, frameworks and Vanilla.
        </p>
        <p className="fs-600 text-white">
          Seeking an opportunity to contribute to institutions by using my
          skills in coding, troubleshooting complex problems, and implementing
          concepts.
        </p>
        <p className="fs-600 text-white">
          A self-taught web developer that doesn`t stop learning and exploring
          the latest technologies. I gained experience with the help of
          practical projects. In my studying journey, I built a lot of
          real-world projects, from Figma or XD design to a real app that runs
          on all browsers. A passionate Full Stack Software Developer having a
          strong skills in Frontend skills.
        </p>
      </div>
    </AboutHeroWrapper>
  );
};

export default AboutHero;
