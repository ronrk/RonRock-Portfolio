import React from "react";
import {
  IconCss,
  IconExpress,
  IconFigma,
  IconHtml,
  IconJs,
  IconMongo,
  IconMui,
  IconNext,
  IconNode,
  IconPhoto,
  IconReact,
  IconRedux,
  IconScss,
  IconStyled,
  IconTs,
  IconVite,
} from "./components/ui/icons";

export const linkList = [
  { label: "Home", path: "/" },
  { label: "All Projects", path: "/projects" },
  { label: "About Me", path: "/RonRock" },
];

export interface ITechnology {
  label: Tech;
  icon: () => JSX.Element;
}

enum Tech {
  HTML = "HTML",
  REACT = "ReactJs",
  CSS = "CSS",
  JS = "JavaScript",
  NEXT = "NextJs",
  STYLED = "Styled-Components",
  MUI = "Material UI",
  SCSS = "SCSS",
  EXPRESS = "Express",
  MONGO = "Mongo DB",
  NODE = "NodeJs",
  TS = "Typescript",
  REDUX = "Redux",
  VITE = "ViteJs",
  PS = "PhotoShop",
  FIGMA = "Figma",
}

enum Category {
  WEB_APP = "web app",
  LANDING = "landing page",
  WEBSITE = "website",
}

export const technologiesList: ITechnology[] = [
  { label: Tech.HTML, icon: IconHtml },
  { label: Tech.CSS, icon: IconCss },
  { label: Tech.JS, icon: IconJs },
  { label: Tech.SCSS, icon: IconScss },
  { label: Tech.REACT, icon: IconReact },
  { label: Tech.NEXT, icon: IconNext },
  { label: Tech.VITE, icon: IconVite },
  { label: Tech.STYLED, icon: IconStyled },
  { label: Tech.MUI, icon: IconMui },
  { label: Tech.EXPRESS, icon: IconExpress },
  { label: Tech.MONGO, icon: IconMongo },
  { label: Tech.NODE, icon: IconNode },
  { label: Tech.TS, icon: IconTs },
  { label: Tech.REDUX, icon: IconRedux },
  { label: Tech.PS, icon: IconPhoto },
  { label: Tech.FIGMA, icon: IconFigma },
];

export const Abilities = [
  {
    icon: "/assets/images/front-end.png",
    title: "Frontend Developer",
    description:
      "I like code projects from scratch to end. and enjoy bringing awesome designs to your browser on yout mobile and desktop.",
    contentTitle: "Languages i speak",
    contentList: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: "/assets/images/back-end.png",
    title: "Backend Developer",
    description: "I love to bring applications to end with making the server.",
    contentTitle: "Languages i speak",
    contentList: ["NodeJs"],
  },
  {
    title: "Designer",
    icon: "/assets/images/web-design.png",
    description:
      "I make clean design patterns that look great in all devices. With tha lataset trends and interactions",
    contentTitle: "Design Tools",
    contentList: ["Figma", "Photoshop"],
  },
];

export interface IProject {
  title: string;
  path: string;
  category: Category;
  liveLink: string;
  repository: string;
  image: string;
  featured?: boolean;
  description: string;
  technologies: Tech[];
}

export const projects: IProject[] = [
  {
    title: "Planets Facts",
    path: "/planets-facts",
    category: Category.WEBSITE,
    liveLink: "https://planets-page.vercel.app/Mercury",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/05-planets-facts-site",
    image: "/assets/projects/planets-facts.png",
    featured: true,
    description: `8-page fact site for all planets in our solar system`,
    technologies: [Tech.NEXT, Tech.REACT, Tech.TS, Tech.STYLED],
  },
  {
    title: "Planets Tourism",
    path: "/planets-tourism",
    category: Category.WEBSITE,
    liveLink: "https://tiny-fairy-073cd5.netlify.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/10-space-tourism",
    image: "/assets/projects/planets-tour.png",
    featured: true,
    description: `multi-page space tourism website`,
    technologies: [Tech.REACT, Tech.STYLED, Tech.SCSS],
  },
  {
    title: "Tic Tac Toe",
    path: "/tic-tac-toe",
    category: Category.WEB_APP,
    liveLink: "https://magnificent-figolla-d4e1bf.netlify.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/03-tic-tac-toe",
    image: "/assets/projects/tic-tac-toe.png",
    featured: true,
    description: `Tic Tac Toe game. Game stats store on localeStorage. Users can reset the scores or continue playing.`,
    technologies: [Tech.VITE, Tech.REACT, Tech.TS, Tech.STYLED],
  },
  {
    title: "rest countries",
    path: "/rest_countries",
    category: Category.WEB_APP,
    liveLink: "https://rest-countries-iota-gray.vercel.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/22-rest-countries",
    image: "/assets/projects/rest-countries.png",
    featured: true,
    description: `integrating with the REST Countries API to pull country data and display it. Get some default countries from the API on the homepage. users can filter countries by region, click on a country to see more detailed information on a separate page, click through to the border countries on the detail page, toggle the color scheme between light and dark mode`,
    technologies: [Tech.NEXT, Tech.REACT, Tech.REDUX, Tech.STYLED],
  },
  {
    title: "Static Jobs",
    path: "/static_jobs",
    category: Category.WEB_APP,
    liveLink: "https://gleeful-centaur-d13425.netlify.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/11-static-job-listing",
    image: "/assets/projects/static-jobs.png",
    featured: true,
    description: `Filter out jobs based on selected categories`,
    technologies: [Tech.REACT, Tech.REDUX, Tech.STYLED],
  },
  {
    title: "Github user search",
    path: "/githun_user_search",
    category: Category.WEB_APP,
    liveLink: "https://creative-douhua-8dc800.netlify.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/02-github-user-search",
    image: "/assets/projects/github-user-search.png",
    featured: true,
    description: `Use the GitHub users API to pull profile data and display it. Users can search for GitHub users by their username, see relevant user information based on their search, switch between light and dark themes`,
    technologies: [Tech.VITE, Tech.REACT, Tech.STYLED],
  },

  {
    title: "Maker",
    path: "/maker",
    category: Category.LANDING,
    liveLink: "https://cheery-starship-7c2146.netlify.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/24-maker-landing-page",
    image: "/assets/projects/maker.png",

    description: `Example of landing page`,
    technologies: [Tech.VITE, Tech.REACT, Tech.STYLED, Tech.SCSS],
  },
  {
    title: "officelite",
    path: "/officelite",
    category: Category.LANDING,
    liveLink: "https://magenta-dragon-98384a.netlify.app/",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/24-officite-coming-soon",
    image: "/assets/projects/officelite.png",
    featured: true,
    description: `Example of landing page. With opening soon counter.`,
    technologies: [Tech.VITE, Tech.REACT, Tech.STYLED],
  },
  {
    title: "Password Generator",
    description:
      "Web app to generate random password depend on certain filters.",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/04-password-generator",
    liveLink: "https://dazzling-lamington-125cde.netlify.app/",
    technologies: [Tech.VITE, Tech.REACT, Tech.TS, Tech.STYLED],
    image: "/assets/projects/pass-gen.png",

    category: Category.WEB_APP,
    path: "/pass-generator",
    featured: true,
  },
  {
    title: "TODO App",
    description:
      "FUll stack todo application implement with React on client and Express on server",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/08-todo-app-main",
    liveLink: "https://ephemeral-bublanina-4f519c.netlify.app/",
    technologies: [
      Tech.REACT,
      Tech.NODE,
      Tech.EXPRESS,
      Tech.MONGO,
      Tech.STYLED,
    ],
    image: "/assets/projects/todo-app.png",

    category: Category.WEB_APP,
    path: "/todo",
  },
  {
    title: "Tip Calculator",
    description:
      "Calculate the correct tip and total cost of the bill per person",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/13-tip-calculator",
    liveLink: "https://soft-boba-9506af.netlify.app/",
    technologies: [Tech.REACT, Tech.STYLED, Tech.SCSS],
    image: "/assets/projects/tip-calc.png",

    category: Category.WEB_APP,
    path: "/tip",
  },
  {
    title: "Product Page",
    description:
      "Product page example, user can: Open a lightbox gallery by clicking on the large product image Switch the large product image by clicking on the small thumbnail images Add items to the cartView the cart and remove items from it",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/18-ecommerce-product-page",
    liveLink: "https://capable-profiterole-8c7a7c.netlify.app/",
    technologies: [Tech.REACT, Tech.STYLED, Tech.SCSS],
    image: "/assets/projects/product-page.png",

    category: Category.WEBSITE,
    path: "/product-page",
  },
  {
    title: "Podcast page",
    description: "Podcast landing page",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/00-pod-request",
    liveLink: "https://peppy-cassata-9e75c5.netlify.app/",
    technologies: [Tech.VITE, Tech.REACT, Tech.STYLED],
    image: "/assets/projects/pod.png",

    category: Category.LANDING,
    path: "/podcast",
  },
  {
    title: "Huddle",
    description: "Huddle landing page",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/21-huddle-landing-page",
    liveLink: "https://spiffy-jelly-c31e68.netlify.app/",
    technologies: [Tech.REACT, Tech.STYLED, Tech.SCSS],
    image: "/assets/projects/huddle.png",

    category: Category.LANDING,
    path: "/huddle",
  },
  {
    title: "Easy Bank",
    description: "Easy Bank landing page",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/19-easy-bank-landing-page",
    liveLink: "https://incredible-boba-aac5ef.netlify.app/",
    technologies: [Tech.REACT, Tech.STYLED, Tech.SCSS],
    image: "/assets/projects/easy-bank.png",

    category: Category.LANDING,
    path: "/easy-bank",
  },
  {
    title: "Room Homepage",
    description: "Room Homepage example",
    repository:
      "https://github.com/ronrk/frontendmentor.io/tree/main/17-room-homepage",
    liveLink: "https://animated-mochi-fda0a1.netlify.app/",
    technologies: [Tech.REACT, Tech.STYLED, Tech.SCSS],
    image: "/assets/projects/homepage.png",

    category: Category.WEBSITE,
    path: "/homepage",
    featured: true,
  },
];
