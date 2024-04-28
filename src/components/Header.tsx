import clsx from "clsx";
import { BiSolidDoorOpen } from "react-icons/bi";

import { Button } from "./ui";

const headerlLinkStyle = clsx(
  "relative",
  "before:absolute before:bottom-[-4px] before:left-0 before:z-1 before:w-0 before:h-5 before:border-b-[#FF4900] before:border-b-2",
  "before:transition-all",
  "hover:before:w-full",
  "hover:text-[#FF4900]",
);

export function Header() {
  return (
    <header className="flex items-center justify-between py-3 px-[2%] border-b-2 border-black">
      <div className="flex items-center gap-2">
        <span className="inline-block h-4 w-4 rounded-full bg-primary" />
        <h1 className="text-2xl font-bold">
          Plansve<span className="text-primary">l</span>
        </h1>
      </div>
      <div className="flex gap-10">
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
      </div>
      <Button size="sm" rightIcon={BiSolidDoorOpen}>
        Login
      </Button>
    </header>
  );
}
