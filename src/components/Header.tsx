import React, { useMemo, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useCheckMobile } from "../hooks/useCheckMobile";

type Link = {
  href: string;
  text: string;
};

const links: Link[] = [
  {
    href: "#welcome",
    text: "Welcome",
  },
  {
    href: "#skills",
    text: "Skills",
  },
  {
    href: "#experience",
    text: "Experience",
  },
  {
    href: "#certificates",
    text: "Certificates",
  },
  {
    href: "#contact",
    text: "Contact",
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useCheckMobile();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linksUl = useMemo(
    () => (
      <ul className="hidden md:flex md:justify-between ">
        {links.map((link, index) => (
          <li key={index} className="my-1 mx-4">
            <a
              href={link.href}
              className="block p-1 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white focus:rounded-sm"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    ),
    []
  );

  return (
    <header>
      <div className="bg-blue-600 text-white">
        <div className="container p-4 mx-auto flex justify-between md:justify-start">
          <div className="text-2xl font-bold">
            <a
              href="#header"
              className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white focus:rounded-sm"
            >
              My Portfolio
            </a>
          </div>
          {!isMobile && <nav>{linksUl}</nav>}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white focus:rounded-sm"
          >
            <Bars3Icon className="w-6 h-6 inline" />
          </button>
        </div>
        {isMobile && (
          <nav>
            <div
              className={`container mx-auto pb-2 ${
                isOpen ? "block" : "hidden"
              } md:hidden`}
            >
              {linksUl}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
