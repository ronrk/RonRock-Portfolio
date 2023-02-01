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
        <meta
          name="description"
          content="Ron Rock front end, full-stack, back end developer. create bt Ron Rockah 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/Crop@Shadow2@2x.png" />
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
