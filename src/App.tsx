import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Intro from "./components/intro-section";
import Projects from "./components/project-section";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Intro />
        <Projects />
      </ThemeProvider>
    </>
  );
}

export default App;
