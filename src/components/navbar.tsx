import { useNav } from "../context/navprovider";
import { NavLink } from "../libs/types";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { name } = useNav();
  const Navs: NavLink[] = [
    {
      name: "About",
      href: "/",
      active: name === "About",
    },
    {
      name: "Projects",
      href: "/projects",
      active: name === "Projects",
    },
    {
      name: "Skills",
      href: "/skills",
      active: name === "Skills",
    },
    {
      name: "Contact",
      href: "/contact",
      active: name === "Contact",
    },
  ];

  return (
    <nav className="grid grid-cols-2 md:flex md:flex-row md:gap-5 justify-center items-center bg-slate-800 rounded">
      {Navs.map((nav: NavLink) => (
        <Link
          key={nav.name}
          to={nav.href}
          className={`text-center py-2 px-4 transition-all duration-300 ${
            nav.active
              ? "text-blue-400 font-bold shadow-lg shadow-blue-500/30"
              : "text-gray-900 dark:text-white hover:text-lg hover:font-bold hover:shadow-xl hover:shadow-blue-500/20"
          }`}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
}
