import { SiVercel } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import makeUpStore from "../../assets/makeUpStore.webp";
import spotify from "../../assets/spotify.jpeg";
import ConnectedDots from "../header/ConnectedDots.jsx";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MakeUpStore",
      description:
        "Modern e-commerce platform for makeup products with advanced filtering and cart functionality",
      image: makeUpStore,
      technologies: ["React", "Tailwind CSS", "Redux", "API Integration"],
      deployLink: "https://make-up-store-ruby.vercel.app/",
      githubLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Spotify Clone",
      description:
        "Music streaming application clone with playlist management and audio player functionality",
      image: spotify,
      technologies: ["React", "Spotify API", "CSS3", "JavaScript"],
      deployLink: "https://spotify-pi-pied.vercel.app/",
      githubLink: "#",
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-gray-950 via-black to-gray-950 py-20 overflow-hidden"
    >
      <ConnectedDots />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Recent <span className="text-[#cd5ff8]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are a few projects I've worked on recently. Each project
            showcases different skills and technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] mx-auto rounded-full mt-4"></div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] px-3 py-1 rounded-full text-xs font-semibold text-white">
                  Featured
                </div>
              )}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#cd5ff8] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#cd5ff8] to-[#7928ca] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    <SiVercel className="text-lg" />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/50 text-white font-semibold rounded-lg border border-purple-500/30 hover:border-purple-500/60 hover:bg-gray-800 transition-all duration-300"
                  >
                    <AiOutlineGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#cd5ff8]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/SaidislomSaidazimovv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#cd5ff8] text-[#cd5ff8] font-semibold rounded-full hover:bg-[#cd5ff8] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Projects</span>
            <HiExternalLink className="text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
