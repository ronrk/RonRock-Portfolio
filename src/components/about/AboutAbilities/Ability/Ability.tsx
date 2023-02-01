import Image from "next/image";
import React, { FC } from "react";
import AbilityWrapper from "./Ability.wrapper";

interface IProps {
  icon: string;
  title: string;
  description: string;
  contentTitle: string;
  contentList: string[];
}

const Ability: FC<IProps> = ({
  title,
  description,
  contentTitle,
  contentList,
  icon,
}) => {
  return (
    <AbilityWrapper className="flex-col">
      <div className="icon-wrapper">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <header className="box__header">
        <h3 className="section-title text-white fs-600 mb-1">{title}</h3>
        <p className="fs-500">{description}</p>
      </header>

      <div className="content">
        <h4 className="text-white fs-500 fw-m">{contentTitle}</h4>
        <ul className="languages">
          {contentList.map((text, idx) => (
            <li key={idx} className="text-secondary-light fs-500">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </AbilityWrapper>
  );
};

export default Ability;
