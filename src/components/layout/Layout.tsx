import React, { FC } from "react";
import Sidebar from "./Sidebar/Sidebar";
import LayoutWrapper from "./Layout.wrapper";
import MySkills from "./MySkills/MySkills";
import { useRouter } from "next/router";
import Logo from "../ui/Logo";
import Contact from "./Contact/Contact";
import MobileNav from "./MobileNav/MobileNav";
import Link from "next/link";
import { BiChevronsLeft } from "react-icons/bi";
import { Analytics } from "@vercel/analytics/react";

interface IProps {
  children: React.ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutWrapper
      className={router.pathname === "/" ? "home bg-primary" : "bg-primary"}
    >
      <MobileNav />
      {!router.pathname.startsWith("/projects/") && <Sidebar />}
      {children}
      {router.pathname === "/" && <MySkills />}
      {!router.pathname.startsWith("/projects/") && (
        <div className="logo-wrapper-mobile mb-2">
          <Logo />
          <h2 className="fs-500 text-white text-nowrap uppercase mb-1 fw-b">
            Front-End Developer
          </h2>
        </div>
      )}
      {!router.pathname.startsWith("/projects/") && (
        <div className="contact-mobile">
          <Contact />
        </div>
      )}

      {router.pathname.startsWith("/projects/") && (
        <Link
          href={"/projects"}
          className="btn--back-portfolio flex uppercase text-secondary fs-500"
        >
          <BiChevronsLeft className="fs-800" />
          Back to portfolio
        </Link>
      )}
      <Analytics />
    </LayoutWrapper>
  );
};

export default Layout;
