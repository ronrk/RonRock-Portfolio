import FeaturedProject from "@/components/home/FeaturedProject";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RonRock | Home</title>
        <meta
          name="description"
          content="Ron Rock front end, full-stack, back end developer. create bt Ron Rockah 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/Crop@Shadow2@2x.png" />
      </Head>
      <main>
        <h2 className="fs-800 text-secondary-light mb-2 section-title">
          Latest Projects
        </h2>
        <FeaturedProject />
      </main>
    </>
  );
}
