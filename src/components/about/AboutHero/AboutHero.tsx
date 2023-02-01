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
          A passionate Full Stack Software Developer having a strong skills in
          Frontend skills. Experience of building Web applications, Websites or
          Landing pages with Javascript libraries, frameworks and Vanilla.
        </p>
      </div>
    </AboutHeroWrapper>
  );
};

export default AboutHero;
