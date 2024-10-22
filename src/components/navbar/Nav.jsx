import { useState, useEffect } from "react";

import "../navbar/nav.css";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
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

  return (
    <div
      className={`navbar p-5 w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-[1370px] mx-auto flex justify-between items-center">
        <h1 className="text-[#cd5ff8] text-3xl">SS.Dev</h1>
      </div>
    </div>
  );
};

export default Nav;
