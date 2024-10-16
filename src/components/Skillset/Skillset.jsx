import { SiVisualstudiocode } from "react-icons/si"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { GrWindows } from "react-icons/gr";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import React from 'react';

const Skillset = () => {
    return (
        <div className='bg-black py-10 py-[140px]'>
            <h1 className="text-5xl font-bold text-white text-center">My <span className="text-[#cd5ff8]">Skillset</span></h1>
            <div className='max-w-[1400px] mt-[140px] grid grid-cols-4 gap-10 mx-auto'>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  shadow-lg shadow-[#sd5ff8] rounded-lg">
                    <AiFillHtml5 className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  shadow-lg shadow-[#sd5ff8]  rounded-lg">
                    <IoLogoCss3 className="w-[70px] h-[100px] text-white " />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                    <FaSass className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                    <SiBootstrap className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                    <SiTailwindcss className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                    <DiJsBadge className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                    <GrReactjs className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                    <SiTypescript className="w-[70px] h-[100px] text-white" />
                </div>
                <div className="flex gap-[200px] align-center text-center justify-center justify-items-center ml-[350px] mt-10">
                    <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                        <SiRedux className="w-[70px] h-[100px] text-white" />
                    </div>
                    <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">
                        <TbBrandNextjs className="w-[70px] h-[100px] text-white" />
                    </div>
                </div>
            </div>

            <h1 className="text-5xl font-bold text-center text-[#cd5ff8] mt-[140px]">Tools <span className="text-white">| use</span></h1>
            <div className="flex align-center text-center justify-center justify-items-center mt-[100px] max-w-[1400px] mx-auto ">
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg" ><SiVisualstudiocode className="w-[70px] h-[80px] text-white"/></div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg"><SiVercel className="w-[70px] h-[80px] text-white" /></div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg">  <GrWindows className=" w-[70px] h-[80px] text-white" /></div>
                <div className="border-solid border-2 border-[#cd5ff8] p-6 w-[250px] transform transition-transform duration-500 hover:scale-110  rounded-lg"><SiNetlify className="w-[70px] h-[80px] text-white" /></div>
            </div>

        </div>
    );
}

export default Skillset;
