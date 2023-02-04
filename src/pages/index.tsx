import FeaturedProject from "@/components/home/FeaturedProject";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RonRock | Home</title>
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
