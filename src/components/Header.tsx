"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { BiSolidDoorOpen } from "react-icons/bi";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { Button } from "./ui";

const headerlLinkStyle = clsx(
  "relative",
  "before:absolute before:bottom-[-4px] before:left-0 before:z-1 before:w-0 before:h-5 before:border-b-[#FF4900] before:border-b-2",
  "before:transition-all before:duration-500 before:ease-in-out",
  "hover:before:w-full",
  "hover:text-[#FF4900]",
);

export function Header() {
  const [isMd] = useMediaQuery(["(min-width: 768px)"], { ssr: false });

  return (
    <header className="container max-w-screen-2xl flex items-center gap-20 py-3 justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2"
      >
        <span className="inline-block h-4 w-4 rounded-full bg-primary" />
        <h1 className="text-2xl font-bold">
          Plansve<span className="text-primary">l</span>
        </h1>
      </motion.div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="hidden gap-10 md:flex"
      >
        <a href="https://github.com/" className={headerlLinkStyle}>
          Home
        </a>
        <a href="https://github.com/" className={headerlLinkStyle}>
          Pacotes
        </a>
        <a href="https://github.com/" className={headerlLinkStyle}>
          Sobre Nós
        </a>
        <a href="https://github.com/" className={headerlLinkStyle}>
          Serviços
        </a>
      </motion.nav>
      {isMd && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            className="hidden md:flex"
            size="sm"
            rightIcon={BiSolidDoorOpen}
          >
            Login
          </Button>
        </motion.div>
      )}
    </header>
  );
}
