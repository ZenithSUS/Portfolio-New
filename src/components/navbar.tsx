import { NavLink } from "../libs/types";
import { Link } from "react-router-dom";

export default function NavBar() {
  const Navs = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Skills",
      href: "/skills",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex gap-5 justify-center items-center bg-slate-800 rounded">
      {Navs.map((nav: NavLink) => (
        <Link
          key={nav.name}
          to={nav.href}
          className="py-2 px-4 text-gray-900 dark:text-white hover:text-gray-900 dark:hover:text-white hover:text-lg hover:font-bold hover:bg-slate-900 transition-all duration-300"
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
