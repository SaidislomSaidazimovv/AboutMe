import { AiOutlineDownload } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import ConnectedDots from "./ConnectedDots.jsx";
import "../header/header.css";
import cv from "../../assets/Saidazimov-Saidislom.pdf";

const Header = () => {
  return (
    <>
      <ConnectedDots className="" />

      <div className="relative text-center z-10 flex items-center justify-center gap-[100px] max-w-[1550px] mx-auto mt-[50px]">
        <div className="max-w-7xl text-left">
          <h1 className="text-5xl font-bold text-white">
            Hi There!{" "}
            <span className="mave" aria-labelledby="mave">
              👋
            </span>
          </h1>
          <h1 className="text-4xl text-white mt-6">
            I'M{" "}
            <span className="text-[#cd5ff8] text-5xl ml-2">
              Saidazimov Saidislom
            </span>
          </h1>
          <h2 className="text-4xl text-[#cd5ff8] font-medium mt-10">
            <Typewriter
              words={[
                "Frontend Developer",
                "React Developer",
                "Javascript Developer",
                "TypeScript Developer",
                "Next.js Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <div className="mt-[80px]">
            <a
              href={cv}
              download="Saidazimov-Saidislom.pdf"
              className="bg-gradient-to-r from-[#cd5ff8] to-[#3e0552] ml-[0px] w-[160px] text-white px-4 py-2 rounded-md shadow-md hover:shadow-[0_0_15px_#cd5ff8] transition-all duration-300 ease-in-out transform hover:scale-102 flex items-center gap-2"
            >
              <AiOutlineDownload className="text-lg " />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="">
          <img
            className="w-[430px] md:w-[500px] lg:w-[600px]"
            src="https://my-portfolio-umber-psi-41.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
