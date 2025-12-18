import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrWindows, GrReactjs } from "react-icons/gr";
import { DiJsBadge } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { motion } from "framer-motion";

const Skillset = () => {
  const frontendSkills = [
    { icon: AiFillHtml5, name: "HTML5", color: "#E34F26" },
    { icon: IoLogoCss3, name: "CSS3", color: "#1572B6" },
    { icon: FaSass, name: "Sass", color: "#CC6699" },
    { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: DiJsBadge, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: GrReactjs, name: "React", color: "#61DAFB" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: TbBrandNextjs, name: "Next.js", color: "#000000" },
  ];

  const tools = [
    {
      icon: SiVisualstudiocode,
      name: "VS Code",
      link: "https://code.visualstudio.com/",
      color: "#007ACC",
    },
    {
      icon: SiVercel,
      name: "Vercel",
      link: "https://vercel.com/",
      color: "#000000",
    },
    {
      icon: GrWindows,
      name: "Windows",
      link: "https://www.microsoft.com/en-us/windows?r=1",
      color: "#0078D6",
    },
    {
      icon: SiNetlify,
      name: "Netlify",
      link: "https://www.netlify.com/",
      color: "#00C7B7",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-[#cd5ff8]">Skillset</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] mx-auto rounded-full mt-4"></div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
        >
          {frontendSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#cd5ff8]/0 to-[#7928ca]/0 group-hover:from-[#cd5ff8]/10 group-hover:to-[#7928ca]/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex flex-col items-center">
                  <Icon
                    className="w-16 h-16 text-white group-hover:text-[#cd5ff8] transition-colors duration-300 mb-3"
                    style={{ filter: `drop-shadow(0 0 10px ${skill.color}50)` }}
                  />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-2xl overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#cd5ff8] to-[#7928ca]"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#cd5ff8]">Tools</span>{" "}
            <span className="text-white">I Use</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] mx-auto rounded-full"></div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#cd5ff8]/0 to-[#7928ca]/0 group-hover:from-[#cd5ff8]/10 group-hover:to-[#7928ca]/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative flex flex-col items-center">
                  <Icon className="w-16 h-16 text-white group-hover:text-[#cd5ff8] transition-colors duration-300 mb-3" />
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skillset;
