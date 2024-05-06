import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/header";
import Intro from "./components/intro-section";
import Projects from "./components/project-section";
import Skills from "./components/skills-section";
import Contact from "./components/contact-section";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Intro />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <Toaster />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default App;
