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
        <nav id="mainmenu" role="navigation" className="w-full md:w-3/4 ">
          <div role="menubar" className="flex justify-between text-primary">
            <Button variant="link">
              <a href="#" role="link">
                Home
              </a>
            </Button>
            <Button variant="link">
              <a href="#projects" role="link">
                Projects
              </a>
            </Button>
            <Button variant="link">
              <a href="#skills" role="link">
                Skills
              </a>
            </Button>
            <Button variant="link">
              <a href="#contact" role="link">
                Contact
              </a>
            </Button>
            {/* Themetoggle */}
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
