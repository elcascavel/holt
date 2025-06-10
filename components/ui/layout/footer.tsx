import { socialItems } from "@/lib/config/socialItems";
import type React from "react";
import Socials from "../socials";

const Header: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border border-drac-nosferatu-700 my-5 md:mx-5 flex h-auto flex-col items-center justify-center gap-y-3 rounded-lg p-5 text-sm md:flex-row md:justify-between md:gap-y-0">
      <span>&copy; {year} Simão Amaral</span>
      <Socials />
    </footer>
  );
};

export default Header;
