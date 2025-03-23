export default function About() {
  return (
    <main className="flex flex-col gap-5 animate-fade-in h-fit p-4 md:p-2 md:w-full ">
      <div className="bg-slate-800 p-5 rounded-2xl border-l-4 border-blue-400">
        <p>
          Hello,
          <span className="font-bold text-blue-400">
            {" "}
            I'm Jeran Christopher Merino
          </span>
          <br />
          Currently, I'm a student at the Cavite State University of the
          Philippines Majoring in Information Technology.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="bg-slate-800 p-5 rounded-2xl">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-blue-400">Expertise</h2>
            <p>
              I specialize in full-stack web development with expertise in
              React, Node.js, Express.js, Appwrite and PHP. I have strong skills
              in backend architecture, database management (SQL & NoSQL), and
              OOP, ensuring scalable and secure applications.
            </p>
          </div>
        </div>

        <div className="bg-slate-800 p-5 rounded-2xl">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-blue-400">Experience</h2>
            <p>
              With a strong background in web development, I have worked on
              diverse projects, including content management systems, social
              media platforms, and web applications. I have honed my skills in
              <span className="font-bold text-blue-400">
                {" "}
                React, Node.js, Express.js, Appwrite and PHP.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-5 rounded-2xl">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-blue-400">
            Let’s Build Something Awesome!
          </h2>
          <p>
            🚀 Let’s build something amazing together! Whether you need a
            skilled developer for your next project or just want to connect,
            feel free to reach out. Check out my projects, connect with me on
            [LinkedIn/GitHub], or drop me a message—I’d love to chat!
          </p>
        </div>
      </div>
    </main>
  );
}
