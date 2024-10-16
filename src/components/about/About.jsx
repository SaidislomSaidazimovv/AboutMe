import { SiTelegram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import banner from "../../assets/about.png";

const About = () => {
  return (
    <div className='bg-gray-950 mt-[140px] py-10'>
      <div className='flex flex-col items-center max-w-[1400px] mx-auto px-4 md:flex-row md:justify-between mt-[140px]'>
        <div className='text-white md:w-1/2 flex flex-col'>
          <h1 className='text-4xl font-bold mb-4'>
            About <span className='text-[#cd5ff8]'>Me</span>
          </h1>
          <p className='text-lg leading-relaxed mb-6'>
            Hello everyone, I am <span className='text-[#cd5ff8]'>Saidazimov Saidislom</span> from <span className='text-[#cd5ff8]'>Tashkent, Uzbekistan</span>, I am 17 years old. I'm a frontend developer with experience in web technologies specializing in HTML, CSS, and frameworks like Bootstrap and Tailwind CSS for responsive design.
          </p>
          <p className='text-lg leading-relaxed mb-6'>
            I am proficient in JavaScript for client-side scripting and have experience with React JS and Next.js to enhance frontend functionality. I also use TypeScript to improve code quality.
          </p>
          <p className='text-lg leading-relaxed mb-6'>
            I regularly use UI component libraries like Material UI and Ant Design to speed up development and ensure consistent design patterns.
          </p>
          <div className='flex space-x-4 mt-4  gap-[40px] ml-[0px]'>
            <a href="https://github.com/marcemalo" target="_blank" rel="noopener noreferrer" className='text-[#cd5ff8] hover:text-white transition-colors'>
              <AiFillGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/ismoiljon-bahtiyorov/" target="_blank" rel="noopener noreferrer" className='text-[#cd5ff8] hover:text-white transition-colors'>
              <BsLinkedin size={30} />
            </a>
            <a href="https://t.me/ismoil998" target="_blank" rel="noopener noreferrer" className='text-[#cd5ff8] hover:text-white transition-colors'>
              <SiTelegram size={30} />
            </a>
          </div>
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2 flex justify-center'>
          <img className='w-[550px] h-auto rounded-lg shadow-lg transform transition-transform hover:scale-105' src={banner} alt="About Me" />
        </div>
      </div>
    </div>
  );
}

export default About;
