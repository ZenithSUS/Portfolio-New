import { useEffect } from "react";
import { useNav } from "../context/navprovider";
import { motion } from "motion/react";

export default function Contact() {
  const { setName } = useNav();

  useEffect(() => {
    setName("Contact");
  }, [setName]);

  return (
    <motion.main
      className="flex flex-col flex-grow gap-5 animate-fade-in overflow-y-auto scrollbar-default scroll-smooth"
      whileHover={{ scale: 0.98 }}
    >
      <div className="bg-slate-950 p-5 rounded-2xl border-l-4 border-blue-400">
        <p>
          Let's connect and{" "}
          <span className="font-bold text-blue-400">
            create something amazing together!
          </span>
        </p>
      </div>

      <form>
        <div className="flex flex-col gap-5 bg-slate-950 p-5 rounded-2xl">
          <div className="grid grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold text-blue-400">
                Name
              </label>
              <motion.input
                className="w-full bg-slate-800 rounded-md p-2"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{
                  boxShadow: "0 0 0 5px rgba(59, 130, 246, 0.5)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-blue-400">
                Email
              </label>
              <motion.input
                className="w-full bg-slate-800 rounded-md p-2"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                whileHover={{ scale: 1.05 }}
                whileFocus={{
                  boxShadow: "0 0 0 5px rgba(59, 130, 246, 0.5)",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-bold text-blue-400">
              Subject
            </label>
            <motion.input
              className="w-full bg-slate-800 rounded-md p-2"
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter your subject"
              required
              whileHover={{ scale: 1.02 }}
              whileFocus={{
                boxShadow: "0 0 0 5px rgba(59, 130, 246, 0.5)",
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-blue-400" htmlFor="message">
              Message
            </label>
            <motion.textarea
              className="w-full bg-slate-800 rounded-md p-2 h-40"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              whileHover={{ scale: 1.02 }}
              whileFocus={{
                boxShadow: "0 0 0 5px rgba(59, 130, 246, 0.5)",
              }}
            />
          </div>
          <button
            className="w-full bg-slate-800 rounded-md p-2 hover:shadow-lg hover:shadow-blue-500 hover:bg-slate-900 cursor-pointer transition-ease-in-out duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </motion.main>
  );
}
