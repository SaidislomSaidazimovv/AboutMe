import { AiOutlineDownload } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import ConnectedDots from "./ConnectedDots.jsx";
import { motion } from "framer-motion";
import "../header/header.css";
import cv from "../../assets/Saidazimov-Saidislom.pdf";

const Header = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ConnectedDots />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Hi There!{" "}
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="inline-block"
              >
                👋
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl text-white font-medium">
                I'M
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#cd5ff8] via-[#bd4aea] to-[#7928ca] bg-clip-text text-transparent mt-2">
                Saidazimov Saidislom
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-4xl text-[#cd5ff8] font-semibold mb-8 h-16"
            >
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "JavaScript Developer",
                  "TypeScript Developer",
                  "Next.js Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href={cv}
                download="Saidazimov-Saidislom.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] text-white font-semibold rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(205,95,248,0.6)] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <AiOutlineDownload className="text-xl" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.img
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[500px] lg:max-w-[600px] drop-shadow-[0_0_50px_rgba(205,95,248,0.3)]"
              src="https://my-portfolio-umber-psi-41.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
              alt="Developer illustration"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#cd5ff8] rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-[#cd5ff8] rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
