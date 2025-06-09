import type React from "react";

import { navItems } from "@/lib/config/navItems";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="header sticky top-0 z-10 flex h-24 items-center justify-between p-5 pb-10 select-none">
    <Link
      href="/"
      className="text-drac-aro-50 hover:text-drac-marcelin-400 transition-colors"
    >
      holt
    </Link>
    <nav className="flex items-center gap-x-5">
      {navItems.map((item) => {
        const isExternal = item.href.endsWith(".pdf");

        return (
          <Link
            key={item.href}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-drac-aro-50 hover:text-drac-marcelin-400 transition-colors"
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  </header>
);

export default Header;
