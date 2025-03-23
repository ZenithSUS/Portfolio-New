import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import { MdMail, MdPhone, MdLocationPin } from "react-icons/md";
import { Contact, Social } from "../libs/types";

export const Contacts: Contact[] = [
  {
    name: "Email",
    value: "jeranmerino147@gmail.com",
    logo: <MdMail className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
  {
    name: "Phone",
    value: "+63 995 826 8881",
    logo: <MdPhone className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
  {
    name: "Location",
    value: "Cavite, Philippines",
    logo: <MdLocationPin className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
];

export const Socials: Social[] = [
  {
    name: "Github",
    href: "https://github.com/ZenithSUS",
    logo: <FaGithub className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeran-christopher-d-merino-24672a348/",
    logo: <FaLinkedin className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/jeranchristopher.merino/",
    logo: <FaFacebook className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
  {
    name: "Download CV",
    href: "/JeranMerino_CV.pdf",
    logo: <FaDownload className="w-10 h-10 bg-slate-800 p-2 rounded" />,
  },
];
