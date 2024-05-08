import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header
      role="banner"
      className="fixed left-0 top-0 z-10 h-16 w-full shadow-md backdrop-blur-md "
    >
      <div className="flex h-full w-full items-center px-4 md:justify-between md:px-8 ">
        {/* Logo */}
        <a href="#" className="hidden text-2xl text-primary md:block">
          {" "}
          {"<DW/>"}{" "}
        </a>

        {/* Menu */}
        <div id="mainmenu" className="w-full md:w-3/4 ">
          <nav role="navigation" className="flex justify-between text-primary">
            <Button variant="link" role="button">
              <a href="#" role="link">
                Home
              </a>
            </Button>
            <Button variant="link" role="button">
              <a href="#projects" role="link">
                Projects
              </a>
            </Button>
            <Button variant="link" role="button">
              <a href="#skills" role="link">
                Skills
              </a>
            </Button>
            <Button variant="link" role="button">
              <a href="#contact" role="link">
                Contact
              </a>
            </Button>
            {/* Themetoggle */}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
