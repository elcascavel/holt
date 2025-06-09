import type React from "react";

import { navItems } from "@/lib/config/navItems";

const Header: React.FC = () => (
  <header className="header sticky top-0 z-10 flex h-24 items-center justify-between p-5 pb-10 select-none">
    <a
      href="/"
      className="text-drac-aro-50 hover:text-drac-marcelin-400 transition-colors"
    >
      holt
    </a>
    <nav className="flex items-center gap-x-5">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-drac-aro-50 hover:text-drac-marcelin-400 transition-colors"
        >
          {item.title}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
