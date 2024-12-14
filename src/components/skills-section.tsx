export default function Skills() {
  // Svgs from https://icon-sets.iconify.design/devicon/
  type Skill = {
    id: string;
    name: string;
    website: string;
    svg: string;
  };

  type SkillCategory = {
    category: string;
    skills: Skill[];
  };
  const skills: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
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
          id: "react",
          name: "React",
          website: "https://react.dev/reference/react",
          svg: "./react.svg",
        },
        {
          id: "tailwind",
          name: "Tailwind",
          website: "https://tailwindcss.com/docs/installation",
          svg: "./tailwind.svg",
        },
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
      ],
    },
    {
      category: "Backend",
      skills: [
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
        {
          id: "nestjs",
          name: "Nest.js",
          website: "https://nestjs.com/",
          svg: "./nestjs.svg",
        },
        {
          id: "postgresql",
          name: "PostgreSQL",
          website: "https://www.postgresql.org/",
          svg: "./postgresql.svg",
        },
      ],
    },
    {
      category: "Core Technologies",
      skills: [
        {
          id: "javascript",
          name: "JavaScript",
          website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          svg: "./javascript.svg",
        },
        {
          id: "typescript",
          name: "TypeScript",
          website: "https://www.typescriptlang.org/docs/",
          svg: "./typescript.svg",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
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
          website: "https://en.wikipedia.org/wiki/Linux",
          svg: "./linux.svg",
        },
      ],
    },
  ];

  return (
    <>
      {/* Section */}
      <section id="skills" className="grid justify-center py-20 md:py-24">
        {/* Container */}
        <div className="grid gap-16  border-l px-4 md:max-w-7xl md:gap-20 md:px-8">
          {/* Content */}
          <div className=" ">
            {/* Heading */}
            <div className="grid gap-1 md:gap-2">
              <h2 className="text-3xl font-semibold md:text-4xl">Skills</h2>
              <p className="">
                My skill set revolves around the following technologies, with a
                continual expansion
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="">
            <div className="grid gap-16 md:gap-20">
              {/* FRONTEND  */}
              <section className="grid gap-5 ">
                <p className="border-b text-center text-xl md:text-left">
                  Frontend
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7 ">
                  {skills
                    .find((category) => category.category === "Frontend")
                    ?.skills.map((skill) => {
                      return (
                        <li key={skill.id}>
                          <a
                            className="flex flex-col items-center gap-2  hover:cursor-pointer"
                            href={skill.website}
                            target="_blank"
                            aria-label={"Link to " + skill.name + " docs"}
                          >
                            <img
                              className="h-10 w-10 hover:scale-110"
                              src={skill.svg}
                              alt={skill.name + " image"}
                            />
                            <span className="">{skill.name}</span>
                          </a>
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
                  {skills
                    .find((category) => category.category === "Backend")
                    ?.skills.map((skill) => {
                      return (
                        <li key={skill.id}>
                          <a
                            className="flex flex-col items-center gap-2  hover:cursor-pointer"
                            href={skill.website}
                            target="_blank"
                            aria-label={"Link to " + skill.name + " docs"}
                          >
                            <img
                              className="h-10 w-10 hover:scale-110"
                              src={skill.svg}
                              alt={skill.name + " image"}
                            />
                            <span className="">{skill.name}</span>
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </section>
              {/* CORE TECHNOLOGIES */}
              <section className="grid gap-5">
                <p className="border-b text-center text-xl md:text-left">
                  Core Technologies
                </p>
                <ul className="grid grid-cols-3 gap-5 md:grid-cols-7 ">
                  {skills
                    .find(
                      (category) => category.category === "Core Technologies",
                    )
                    ?.skills.map((skill) => {
                      return (
                        <li key={skill.id}>
                          <a
                            className="flex flex-col items-center gap-2  hover:cursor-pointer"
                            href={skill.website}
                            target="_blank"
                            aria-label={"Link to " + skill.name + " docs"}
                          >
                            <img
                              className="h-10 w-10 hover:scale-110"
                              src={skill.svg}
                              alt={skill.name + " image"}
                            />
                            <span className="">{skill.name}</span>
                          </a>
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
                  {skills
                    .find((category) => category.category === "Tools")
                    ?.skills.map((skill) => {
                      return (
                        <li key={skill.id}>
                          <a
                            className="flex flex-col items-center gap-2  hover:cursor-pointer"
                            href={skill.website}
                            target="_blank"
                            aria-label={"Link to " + skill.name + " docs"}
                          >
                            <img
                              className="h-10 w-10 hover:scale-110"
                              src={skill.svg}
                              alt={skill.name + " image"}
                            />
                            <span className="">{skill.name}</span>
                          </a>
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
