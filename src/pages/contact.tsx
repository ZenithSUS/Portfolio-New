import { useNav } from "../context/navprovider";
export default function Contact() {
  const { setName } = useNav();
  setName("Contact");
  return (
    <main className="flex flex-col gap-5 animate-fade-in h-fit">
      <div className="bg-slate-800 p-5 rounded-2xl border-l-4 border-blue-400">
        <p>
          Let's connect and{" "}
          <span className="font-bold text-blue-400">
            create something amazing together!
          </span>
        </p>
      </div>

      <form>
        <div className="flex flex-col gap-5 bg-slate-800 p-5 rounded-2xl">
          <div className="grid grid-cols-2 w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold text-blue-400">
                Name
              </label>
              <input
                className="w-full bg-slate-950 rounded-md p-2"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-blue-400">
                Email
              </label>
              <input
                className="w-full bg-slate-950 rounded-md p-2"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-bold text-blue-400">
              Subject
            </label>
            <input
              className="w-full bg-slate-950 rounded-md p-2"
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter your subject"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-blue-400" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full bg-slate-950 rounded-md p-2 h-40"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            />
          </div>
          <button
            className="w-full bg-slate-950 rounded-md p-2 hover:shadow-lg hover:shadow-blue-500 hover:bg-slate-900 cursor-pointer transition-ease-in-out duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </main>
  );
}
