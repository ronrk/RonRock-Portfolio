import Logo from "@/components/ui/Logo";
import React, { FC } from "react";
import SingleProjectIframeWrapper from "./SingleProjectIframe.wrapper";

interface IProps {
  link: string;
}

const SingleProjectIframe: FC<IProps> = ({ link }) => {
  return (
    <SingleProjectIframeWrapper>
      <iframe src={link} className="site-iframe"></iframe>
      <div className="logo-wrapper">
        <Logo />
        <h2 className="fs-500 text-white text-nowrap uppercase mb-1 fw-b">
          Front-End Developer
        </h2>
      </div>
    </SingleProjectIframeWrapper>
  );
};

export default SingleProjectIframe;
