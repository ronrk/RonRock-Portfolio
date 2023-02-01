import Logo from "@/components/ui/Logo";
import Link from "next/link";
import React from "react";
import SidebarWrapper from "./Sidebar.wrapper";
import Contact from "../Contact/Contact";
import { linkList } from "@/utils";
import { useRouter } from "next/router";

const Appbar = () => {
  const router = useRouter();
  const linksEl = linkList.map((link, idx) => (
    <li key={idx} className={router.pathname === link.path ? "active" : ""}>
      <Link href={link.path}>{link.label}</Link>
    </li>
  ));
  return (
    <div className="sidebar flex">
      <SidebarWrapper className="flex-col">
        <div className="logo-wrapper mb-2">
          <Logo />
          <h2 className="fs-500 text-white text-nowrap uppercase mb-1 fw-b">
            Front-End Developer
          </h2>
        </div>

        <div className="my-info">
          <p className="fs-400 fw-b">
            Websites, Wesites design, Web Applications, Landing Pages
          </p>
        </div>
        <ul className="nav-list fs-600 uppercase fw-b">{linksEl}</ul>
        <Contact />
      </SidebarWrapper>
      <hr />
    </div>
  );
};

export default Appbar;
