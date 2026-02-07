import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "../navbar/nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="relative group">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] bg-clip-text text-transparent cursor-pointer">
              ARS.Dev
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] group-hover:w-full transition-all duration-300"></div>
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="relative text-white text-lg font-medium hover:text-[#cd5ff8] transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#cd5ff8] group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              )
            )}
          </ul>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-3xl hover:text-[#cd5ff8] transition-colors"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-4 py-4">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full text-left text-white text-lg font-medium hover:text-[#cd5ff8] hover:pl-4 transition-all duration-300"
                  >
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
