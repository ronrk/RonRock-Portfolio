import { IconGithub, IconLinkedin, IconUpwork } from "@/components/ui/icons";
import Link from "next/link";
import React from "react";
import ContactWrapper from "./Contact.wrapper";

const Contact = () => {
  return (
    <ContactWrapper className="contact">
      <div className="flex-col">
        <div className="contact-email flex-col">
          <p className="text-white fs-400">contact me:</p>
          <Link href={"/"} className="text-secondary fs-600">
            ronrk11@gmail.com
          </Link>
        </div>

        <div className="social__links flex">
          <Link href={"https://github.com/ronrk"} target="_blank">
            <IconGithub />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/ron-rokkah-ba665120a/"}
            target="_blank"
          >
            <IconLinkedin />
          </Link>
          <Link
            href={
              "https://www.upwork.com/freelancers/~01417a9c34076cf062?viewMode=1"
            }
            target="_blank"
          >
            <IconUpwork />
          </Link>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
