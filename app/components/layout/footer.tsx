import type React from "react";

const Header: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ctp-crust text-subtext0 m-auto mx-5 mb-5 flex h-auto flex-col items-center justify-center gap-y-3 rounded-lg p-5 text-sm md:flex-row md:justify-between md:gap-y-0">
      <span>&copy; {year} Simão Amaral</span>
    </footer>
  );
};

export default Header;
