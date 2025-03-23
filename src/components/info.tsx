import { MdMail, MdPhone, MdLocationPin } from "react-icons/md";
import Jeran from "../assets/jeran.jpg";
import { Contact } from "../libs/types";

export default function Info() {
  const Contacts: Contact[] = [
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

  return (
    <div className="flex flex-col bg-slate-950 p-5 rounded-2xl">
      <header className="flex flex-col items-center p-5 gap-2">
        <img
          src={Jeran}
          alt="Jeran"
          className="w-40 h-40 rounded-full object-fit"
        />
        <div className="flex flex-col gap-2.5 items-center">
          <h1 className="text-3xl font-bold text-center">
            Jeran Christopher Merino
          </h1>
          <p className="text-sm text-blue-400">Web Developer</p>
        </div>
        <hr className="w-full" />
      </header>

      <div className="flex flex-col items-center p-5 gap-2 my-5">
        <div className="flex flex-col gap-5">
          {Contacts.map((contact: Contact) => (
            <div className="flex gap-2" key={contact.name}>
              {contact.logo}
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold text-gray-500">
                  {contact.name}
                </p>
                <p className="text-sm">{contact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full" />

      <div className="flex p-5 gap-2">
        <a
          href="https://www.linkedin.com/in/jeranmerino/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="Linkedin"
            className="w-10 h-10"
          />
          <p className="text-sm">Linkedin</p>
        </a>
      </div>
      <footer>
        <div className="flex flex-col items-center p-5 gap-2 my-5">
          <div className="flex flex-col gap-5">
            <p className="text-sm text-gray-500 text-center">
              &copy; {new Date().getFullYear()} Jeran Christopher Merino. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
