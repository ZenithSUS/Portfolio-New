import Jeran from "../assets/jeran.jpg";
import { Contact, Social } from "../libs/types";
import { Contacts, Socials } from "../data/socials";
import { motion } from "framer-motion";

export default function Info({ animationDone }: { animationDone: boolean }) {
  return (
    <motion.div
      className="flex flex-col p-5 rounded-2xl"
      animate={{
        backgroundColor: animationDone ? "#020617" : "transparent",
        transition: { duration: 0.5 },
      }}
    >
      <header className="flex flex-col items-center p-5 gap-2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
        >
          <img
            src={Jeran}
            alt="Jeran"
            className="w-40 h-40 rounded-full object-fit"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationDone ? 1 : 0 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          {/* Rest of the content */}
          <div className="flex flex-col gap-2.5 items-center">
            <h1 className="text-3xl font-bold text-center">
              Jeran Christopher Merino
            </h1>
            <p className="text-sm text-blue-400">Web Developer</p>
          </div>
          <hr className="w-full" />

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

          <div className="grid grid-cols-2 p-5 gap-2">
            {Socials.map((social: Social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
                key={social.name}
              >
                {social.logo}
                {social.name}
              </a>
            ))}
          </div>

          <footer>
            <div className="flex flex-col items-center p-5 gap-2 my-5">
              <div className="flex flex-col gap-5">
                <p className="text-sm text-gray-500 text-center">
                  &copy; {new Date().getFullYear()} Jeran Christopher Merino.
                  All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </motion.div>
      </header>
    </motion.div>
  );
}
