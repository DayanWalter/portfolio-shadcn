import SkillItem from "./skill-item";

export default function Skills() {
  // Svgs from https://icon-sets.iconify.design/devicon/
  const frontendSkills = [
    {
      id: "html",
      name: "HTML",
      website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      svg: "./html.svg",
    },
    {
      id: "css",
      name: "CSS",
      website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      svg: "./css.svg",
    },
    {
      id: "javascript",
      name: "JavaScript",
      website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      svg: "./javascript.svg",
    },
    {
      id: "react",
      name: "React",
      website: "https://react.dev/reference/react",
      svg: "./react.svg",
    },
    {
      id: "typescript",
      name: "TypeScript",
      website: "https://www.typescriptlang.org/docs/",
      svg: "./typescript.svg",
    },
    {
      id: "tailwind",
      name: "Tailwind",
      website: "https://tailwindcss.com/docs/installation",
      svg: "./tailwind.svg",
    },
  ];
  const backendSkills = [
    {
      id: "nodejs",
      name: "Node.js",
      website: "https://nodejs.org/docs/latest/api/",
      svg: "./nodejs.svg",
    },
    {
      id: "expressjs",
      name: "Express.js",
      website: "https://expressjs.com/",
      svg: "./expressjs.svg",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      website: "https://www.mongodb.com/",
      svg: "./mongodb.svg",
    },
  ];
  const toolSkills = [
    {
      id: "nextjs",
      name: "Next.js",
      website: "https://nextjs.org/",
      svg: "./nextjs.svg",
    },
    {
      id: "vite",
      name: "Vite.js",
      website: "https://vitejs.dev/",
      svg: "./vite.svg",
    },
    {
      id: "webpack",
      name: "Webpack",
      website: "https://webpack.js.org/",
      svg: "./webpack.svg",
    },
    {
      id: "git",
      name: "Git",
      website: "https://git-scm.com/",
      svg: "./git.svg",
    },
    {
      id: "jest",
      name: "Jest",
      website: "https://jestjs.io/",
      svg: "./jest.svg",
    },
    {
      id: "npm",
      name: "Npm",
      website: "https://www.npmjs.com/",
      svg: "./npm.svg",
    },
    {
      id: "linux",
      name: "Linux",
      website: "https://de.wikipedia.org/wiki/Linux",
      svg: "./linux.svg",
    },
  ];

  return (
    <>
      {/* Section */}
      <section
        id="skills"
        className="grid justify-center gap-12 py-16 md:gap-16 md:py-24"
      >
        {/* Container */}
        <div className="grid gap-8 px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <div className=" ">
            {/* Heading */}
            <div className=" ">
              <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>

              <p className="">
                My skill set revolves around the following technologies, with a
                continual expansion:
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="">
            <div className="grid gap-12 md:gap-16">
              {/* FRONTEND  */}
              <section className="grid gap-5 ">
                <p className="border-b text-center text-xl md:text-left">
                  Frontend
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7 ">
                  {frontendSkills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <SkillItem skill={skill} />
                      </li>
                    );
                  })}
                </ul>
              </section>
              {/* BACKEND  */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Backend
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7 ">
                  {backendSkills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <SkillItem skill={skill} />
                      </li>
                    );
                  })}
                </ul>
              </section>
              {/* TOOLS */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Tools
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7 ">
                  {toolSkills.map((skill) => {
                    return (
                      <li key={skill.id}>
                        <SkillItem skill={skill} />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
