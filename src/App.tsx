import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/header";
import Intro from "./components/intro-section";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Intro />
      </ThemeProvider>
    </>
  );
}

export default App;
