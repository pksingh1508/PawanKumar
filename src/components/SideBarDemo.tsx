"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconHome,
  IconAdjustmentsCode,
  IconUserBolt,
  IconApps,
  IconSchool,
  IconDeviceMobileMessage,
  IconKeyboardShow,
  IconRefreshAlert
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {  Home } from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { Educations } from "./Educations";
import { Reviews } from "./Reviews";
import Projects from "./Projects";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: '#',
      id: 1,
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About",
      href: '#',
      id: 2,
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Skills",
      href: '#',
      id: 3,
      icon: (
        <IconAdjustmentsCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: '#',
      id: 4,
      icon: (
        <IconApps className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Education",
      href: '#',
      id: 5,
      icon: (
        <IconSchool className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: '#',
      id: 6,
      icon: (
        <IconDeviceMobileMessage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Reviews",
      href: '#',
      id: 7,
      icon: (
        <IconRefreshAlert className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState<Number>(1);
  const setLink = (id: Number) => {
    setActiveLink(id);
  }
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {<Logo />}
            <div className="mt-8 flex flex-col gap-2 p-4">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} setLink={setLink}/>
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard value={activeLink}/>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <IconKeyboardShow className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0"/>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-large text-black dark:text-white whitespace-pre"
      >
        Pawan Kumar
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = ({value}: any) => {
  return (
    <div className="flex w-full h-full overflow-y-scroll">
      {value === 1 && <Home />}
      {value === 2 && <About />}
      {value === 3 && <Skills />}
      {value === 4 && <Projects />}
      {value === 5 && <Educations />}
      {value === 6 && <Contact />}
      {value === 7 && <Reviews />}
    </div>
  );
};
