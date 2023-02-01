import { linkList } from "@/utils";
import Link from "next/link";
import React from "react";
import MobileNavWrapper from "./MobileNav.wrapper";
import { useRouter } from "next/router";

const MobileNav = () => {
  const router = useRouter();
  return (
    <MobileNavWrapper className="mobileNav">
      <ul className="fs-600 uppercase fw-b flex">
        {linkList.map((link, idx) => (
          <li
            key={idx}
            className={router.pathname === link.path ? "active" : ""}
          >
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </MobileNavWrapper>
  );
};

export default MobileNav;
