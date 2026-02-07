import { SiTelegram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import banner from "../../assets/about.png";

const About = () => {
  const socialLinks = [
    {
      icon: AiFillGithub,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/saidislom-saidazimov-48b9a3302/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: SiTelegram,
      href: "https://t.me/arisu_stt",
      label: "Telegram",
      color: "hover:text-blue-500",
    },
  ];

  const skills = [
    "HTML & CSS",
    "JavaScript & TypeScript",
    "React.js & Next.js",
    "Tailwind & Bootstrap",
    "Material UI & Ant Design",
  ];

  return (
    <section id="about" className="relative bg-gray-950 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      <div className="relative max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#cd5ff8]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] mx-auto rounded-full"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello everyone, I am{" "}
                <span className="text-[#cd5ff8] font-semibold">
                  Saidazimov Saidislom
                </span>{" "}
                from{" "}
                <span className="text-[#cd5ff8] font-semibold">
                  Tashkent, Uzbekistan
                </span>
                . I'm a 17-year-old frontend developer passionate about creating
                beautiful and responsive web applications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-xl font-semibold text-[#cd5ff8] mb-3">
                My Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I specialize in modern web technologies and frameworks, focusing
                on creating seamless user experiences with clean, maintainable
                code.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <span className="text-gray-400 font-medium">
                Connect with me:
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-[#cd5ff8] ${social.color} transition-colors duration-300`}
                    aria-label={social.label}
                  >
                    <Icon size={32} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500">
                <img
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  src={banner}
                  alt="About Me"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
