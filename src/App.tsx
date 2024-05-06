import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Intro from "./components/intro-section";
import Projects from "./components/project-section";
import Skills from "./components/skills-section";
import Contact from "./components/contact-section";
import { Toaster } from "@/components/ui/toaster";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Intro />
        <Projects />
        <Skills />
        <Contact />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
