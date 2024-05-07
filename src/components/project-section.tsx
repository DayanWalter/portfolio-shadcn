import { Button } from "./ui/button";

export default function Projects() {
  const projects = [
    {
      id: "landingpage",
      image: "/landingpage.gif",
      title: "Landingpage",
      tech: "Vite, React, TypeScript, Tailwind CSS, Shadcn/ui",

      descriptionDE:
        "Eine vollständig reaktionsfähige Landingpage mit der Möglichkeit, das Farbthema zu ändern.",
      descriptionEN:
        "A fully responsive landing page with the option to change the color theme.",
      descriptionES:
        "Una página de destino completamente receptiva con la opción de cambiar el tema de color.",

      codeLink: "https://github.com/DayanWalter/landingpage-portfolio",
      websiteLink: "https://landingpage-five-flame.vercel.app/",
    },
    {
      id: "satsch",
      image: "/satsch.gif",
      title: "SatSchool",
      tech: "React, Next.js, Tailwind CSS, Shadcn/ui, Node.js ",

      descriptionDE:
        "SatSchool ist eine E-Commerce-Plattform mit Stripe-Integration, die Kurse zu verschiedenen Bitcoin-Themen anbietet. Besonderes Augenmerk wird auf das Design und die Benutzerführung im Shop gelegt.",
      descriptionEN:
        "SatSchool is an e-commerce platform with Stripe integration, offering courses on various Bitcoin topics. Special attention is given to the design and user experience within the shop.",
      descriptionES:
        "SatSchool es una plataforma de comercio electrónico con integración de Stripe que ofrece cursos sobre diversos temas de Bitcoin. Se presta especial atención al diseño y la experiencia del usuario dentro de la tienda.",

      codeLink: "https://github.com/DayanWalter/satsch",
      websiteLink: "https://satschool.vercel.app/",
    },

    // {
    //   id: "bitfeather",
    //   image: "/bitfeather.webp",
    //   title: "BitFeather",
    //   tech: "React, Express.js, Node.js, MongoDB",

    //   descriptionDE:
    //     "BitFeather ist eine Social-Media-Plattform, die speziell für Bitcoin-Enthusiasten entwickelt wurde. Mit einem schlichten Design fördert sie unkomplizierte Verbindungen zwischen Gleichgesinnten.",
    //   descriptionEN:
    //     "BitFeather is a social media platform specifically designed for Bitcoin enthusiasts. With a simple design, it fosters straightforward connections among like-minded individuals.",
    //   descriptionES:
    //     "BitFeather es una plataforma de redes sociales diseñada específicamente para entusiastas de Bitcoin. Con un diseño sencillo, fomenta conexiones directas entre personas con intereses similares.",

    //   codeLink: "https://github.com/DayanWalter/bitfeather",
    //   websiteLink: "https://bitfeather.onrender.com/",
    // },
  ];

  return (
    <>
      {/* Section */}
      <section id="projects" className="grid justify-center py-20 md:py-24">
        {/* Container */}
        <div className="grid gap-16 border-l px-4 md:max-w-7xl md:gap-20 md:px-8">
          {/* Content */}
          <div>
            {/* Heading */}
            <div className="grid gap-1 md:gap-2">
              <h2 className=" text-3xl font-semibold md:text-4xl">Projects</h2>
              <p className="">These are my newest projects</p>
            </div>
          </div>

          {/* Content */}
          <ul className="grid gap-20">
            {projects.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-5  md:flex-row md:gap-10"
              >
                <a className="" target="_blank" href={project.websiteLink}>
                  <img
                    src={project.image}
                    className=" rounded-md border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md md:max-w-lg "
                  />
                </a>
                {/* Heading and text */}
                <div className="flex flex-col gap-5">
                  {/* Heading and tech */}
                  <div className="">
                    <a href={project.websiteLink}>
                      <p className="text-xl font-semibold">{project.title}</p>
                    </a>

                    {/* Tech */}
                    <p className="text-sm italic">{project.tech}</p>
                  </div>

                  {/* Description */}
                  <p className="">{project.descriptionEN}</p>

                  {/* Links */}
                  <div className="flex gap-5">
                    <Button size="sm">
                      <a
                        href={project.codeLink}
                        aria-label="View code for ..."
                        target="_blank"
                      >
                        View Code
                      </a>
                    </Button>
                    <Button size="sm">
                      <a href={project.websiteLink} target="_blank">
                        Visit website
                      </a>
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
