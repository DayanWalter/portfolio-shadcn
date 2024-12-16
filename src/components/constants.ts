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

export const SKILLS: SkillCategory[] = [
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
      {
        id: "mongodb",
        name: "MongoDB",
        website: "https://www.mongodb.com/",
        svg: "./mongodb.svg",
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
export const PROJECTS = [
  {
    id: "easy-repair",
    image: "/easy-repair.webp",
    video: "/easy-repair.WEBM",
    title: "Easy Repair",
    tech: "Next.js, Tailwind CSS, Shadcn/ui, PostgreSQL",
    descriptionEN:
      "Easy Repair is a platform for managing repair requests. It allows employees to manage repair requests and track the progress of the repair.",
    codeLink: "https://github.com/DayanWalter/easy-repair",
    websiteLink: "https://easy-repair.vercel.app/",
  },
  {
    id: "satsch",
    image: "/satsch.gif",
    video: "/satsch.webm",
    title: "SatSchool",
    tech: "React, Next.js, Tailwind CSS, Shadcn/ui, Node.js ",
    descriptionEN:
      "SatSchool is an e-commerce platform with Stripe integration, offering courses on various Bitcoin topics. Special attention is given to the design and user experience within the shop.",
    codeLink: "https://github.com/DayanWalter/satschool",
    websiteLink: "https://satschool.vercel.app/",
  },
  {
    id: "landingpage",
    image: "/landingpage.gif",
    video: "/landingpage.webm",
    title: "Landingpage",
    tech: "Vite, React, TypeScript, Tailwind CSS, Shadcn/ui",
    descriptionEN:
      "A fully responsive landing page with the option to change the color theme.",
    codeLink: "https://github.com/DayanWalter/landingpage-portfolio",
    websiteLink: "https://landingpage-five-flame.vercel.app/",
  },
];
