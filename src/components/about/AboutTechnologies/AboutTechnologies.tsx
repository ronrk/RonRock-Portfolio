import { technologiesList } from "@/utils";
import React, { useEffect, useState } from "react";
import AboutTechnologiesWrapper from "./AboutTechnologies.wrapper";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const AboutTechnologies = () => {
  const [sliderTransform, setSliderTransform] = useState(0);
  const sliderStyle = { transform: `translateX(-${sliderTransform}%)` };

  useEffect(() => {
    let timer = setTimeout(() => {
      handleSliderClick("next");
    }, 2500);

    return () => clearTimeout(timer);
  });

  const handleSliderClick = (dir: string) => {
    if (dir === "next") {
      setSliderTransform((prev) => {
        if (prev >= 87.5) return 0;
        return prev + 6.25;
      });
      return;
    }
    setSliderTransform((prev) => {
      if (prev === 0) return 0;
      return prev - 6.25;
    });
  };

  return (
    <AboutTechnologiesWrapper className="flex-col">
      <h3 className="section-title fs-700">Technologies I Worked with</h3>
      <div className="slider-btns flex fs-800 section-title text-gray">
        <button onClick={() => handleSliderClick("prev")}>
          <AiFillCaretLeft />
        </button>
        <button onClick={() => handleSliderClick("next")}>
          <AiFillCaretRight />
        </button>
      </div>
      <div className="tecnologiesSlider">
        <div
          className="tecnologiesSlider__innerWrapper flex"
          id="slider"
          style={sliderStyle}
        >
          {technologiesList.map((tech, idx) => (
            <div key={idx} className="tecnologiesSlider__box flex-col">
              <h4 className="text-secondary fs-600">{tech.label}</h4>
              <tech.icon />
            </div>
          ))}
        </div>
      </div>
    </AboutTechnologiesWrapper>
  );
};

export default AboutTechnologies;
