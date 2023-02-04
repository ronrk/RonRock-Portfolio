import AboutAbilities from "@/components/about/AboutAbilities/AboutAbilities";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import AboutTechnologies from "@/components/about/AboutTechnologies/AboutTechnologies";
import Head from "next/head";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>RonRock | About Me</title>
      </Head>

      <main>
        <div className="about-page flex-col">
          <AboutHero />
          <AboutAbilities />
          <AboutTechnologies />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
