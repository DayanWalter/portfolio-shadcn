import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Intro() {
  const githubLink = "https://github.com/dayanwalter";
  const linkedinLink = "https://www.linkedin.com/in/dayanwalter/";
  const email = "dayanwalter@gmail.com";

  return (
    <>
      {/* Section */}
      <section id="intro" className="grid justify-center py-20 md:py-24">
        {/* Container */}
        <div className="border-l px-4 md:max-w-7xl md:px-8">
          {/* Content */}
          <div className="grid gap-8 md:gap-12">
            {/* Heading and supporting text */}
            <div className="grid items-center justify-center gap-4 md:gap-6">
              {/* Heading */}
              <h1 className="text-4xl font-semibold leading-10 md:text-6xl">
                Welcome.
              </h1>
              {/* Supporting text */}
              <p className="md:max-w-3xl md:text-xl">
                I am Dayan - father, husband and software developer specializing
                in React.js, Express.js, MongoDB and Node.js.
              </p>

              <p className="md:max-w-3xl md:text-xl">
                Started with Lego, progressed to Redstone farms in Minecraft,
                and ended up with functional React components - The play has
                never stopped.
              </p>
              <p className="md:max-w-3xl md:text-xl">
                I love developing efficient and modular solutions for complex
                applications.
              </p>
              {/* Links */}
              <div className="flex gap-3">
                <Button size="icon">
                  <a target="_blank" href={githubLink}>
                    <Github />
                  </a>
                </Button>
                <Button size="icon">
                  <a target="_blank" href={linkedinLink}>
                    <Linkedin />
                  </a>
                </Button>
                <Button size="icon">
                  <a href={`mailto:${email}`}>
                    <Mail />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
