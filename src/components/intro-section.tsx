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
                Amazing Apps, Clean Code.
              </h1>
              {/* Supporting text */}
              <p className="md:max-w-3xl md:text-xl">
                I am Dayan - father, husband and software developer specializing
                in React.js, Express.js, MongoDB and Node.js.
              </p>

              <p className="md:max-w-3xl md:text-xl">
                From Lego to Minecraft and now to functional React components –
                the play has never stopped.
              </p>
              <p className="md:max-w-3xl md:text-xl">
                I develop efficient, modular solutions for complex applications,
                combining creativity and precision to deliver outstanding
                results.
              </p>
              {/* Links */}
              <div className="flex gap-3">
                <Button size="icon" role="button" aria-label="github button">
                  <a target="_blank" href={githubLink} aria-label="github link">
                    <Github />
                  </a>
                </Button>
                <Button size="icon" role="button" aria-label="linkedIn button">
                  <a
                    target="_blank"
                    href={linkedinLink}
                    aria-label="linkedin link"
                  >
                    <Linkedin />
                  </a>
                </Button>
                <Button size="icon" role="button" aria-label="email button">
                  <a href={`mailto:${email}`} aria-label="email link">
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
