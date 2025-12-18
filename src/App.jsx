import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skillset from "./components/Skillset/Skillset";
import Projects from "./components/projects/Projects";
import CustomCursor from "./components/customCursor/CustomCursor";
import "./index.css";

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Nav />
      <main>
        <Header />
        <About />
        <Skillset />
        <Projects />
      </main>
      <footer className="bg-gray-950 py-8 border-t border-purple-500/20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-gray-400">
            Designed and Developed by{" "}
            <span className="text-[#cd5ff8] font-semibold">
              Saidazimov Saidislom
            </span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
