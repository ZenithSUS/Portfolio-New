import Jeran from "../assets/jeran.jpg";
import { Contact, Social } from "../libs/types";
import { Contacts, Socials } from "../data/socials";
import { motion } from "motion/react";

export default function Info({ animationDone }: { animationDone?: boolean }) {
  return (
    <>
      {!animationDone ? (
        <motion.div
          className="flex justify-center items-center border-none overflow-hidden"
          key="before-animation"
        >
          <motion.img
            src={Jeran}
            alt="Jeran"
            className="w-40 h-40 rounded-full object-fit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      ) : (
        <motion.div
          className="m-2 mr-0 rounded-2xl sticky top-0 left-0 max-h-screen"
          animate={{
            backgroundColor: animationDone ? "#1E293B" : "transparent",
            transition: { duration: 5, ease: "easeInOut" },
          }}
        >
          <main className="max-h-screen">
            <header className="flex flex-col items-center p-2 gap-2">
              <motion.div
                key="after-animation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 5, ease: "easeInOut" }}
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
                <div className="flex flex-col gap-2.5 items-center">
                  <h1 className="text-3xl font-bold text-center">
                    Jeran Christopher Merino
                  </h1>
                  <p className="text-sm text-bold text-blue-400 mb-2">
                    Web Developer
                  </p>
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
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2"
                      key={social.name}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      whileDrag={{ scale: 0.9, rotate: 10 }}
                    >
                      {social.logo}
                      {social.name}
                    </motion.a>
                  ))}
                </div>

                <footer>
                  <div className="flex flex-col items-center px-2 py-3 gap-2 my-2">
                    <div className="flex flex-col gap-5">
                      <p className="text-sm text-gray-500 text-center">
                        &copy; {new Date().getFullYear()} Jeran Christopher
                        Merino. All rights reserved.
                      </p>
                    </div>
                  </div>
                </footer>
              </motion.div>
            </header>
          </main>
        </motion.div>
      )}
    </>
  );
}
