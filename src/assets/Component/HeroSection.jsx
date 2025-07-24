import htmlImg from "./html-5.png";
import cssImg from "./css-3.png";
import jsImg from "./js.png";
import reactJSimg from './reactJS.png';
import cImg from "./c.png";
import cplusImg from "./c++.png";
import gitHubImg from "./github-sign.png";
import tailwindImg from "./tailwindcss.png";
import gitImage from "./git.png";
import viteImg from './vite.jpeg';
import {Link} from "react-router";

function HeroSection() {
  return (
    <div className='mb-35'>
        <div className='flex justify-center'>
            <div className='border-1 h-[1200px] md:h-[700px] w-[320px] md:w-[600px] rounded-2xl bg-[#f2f2f2] shadow-xl border-pink-400 mr-10'>
                <div className='text-center text-2xl pt-4'>
                    My Qualifications!
                    <div className='text-lg text-left p-5'>
                        B.Tech in Computer Technology 
                        <p className='pl-7'>Priyadarshini College of Enginnering, Nagpur.</p>
                        <p className='pl-7'>2021 to 2025 </p>
                    </div>
                    <div>
                        <h1 className='text-left pl-5 text-xl'>HSC</h1>
                        <p className='text-lg text-left pl-12'>Kamla Nehru College, Nagpur.</p>
                        <p className='text-lg text-left pl-12'>Qualified HSC with 87%</p>
                    </div>
                    <div className='text-xl pt-5'>
                        More About Me
                        <p className='text-lg p-5 object-cover'>
                            Hi, I'm a passionate Web Developer who loves programming and building clean, functional, and beautiful web experiences. I enjoy crafting intuitive and attractive websites that users find engaging and easy to navigate.I'm always open to meaningful conversations, collaborations, and exciting opportunities. If you have something that fits, I'd love to connect!
                        </p>
                        <button className='border-1 p-2 rounded-xl cursor-pointer bg-[#e6e6e6] hover:bg-[#ffccff] text-lg'>Connect with me!</button>
                    </div>
                </div>

            </div>
            <div className="h-[1200] md:h-[700px] w-[320px] md:w-[600px] border-1 rounded-2xl bg-[#f2f2f2] shadow-xl border-pink-400">
                <p className="text-center text-2xl p-5">My Skills!</p>
                <div>
                    <h1 className="text-center text-lg border-1 h-[30px] w-[180px] mx-auto mb-[30px]">Web Development</h1>
                    <div className="flex justify-evenly cursor-pointer flex-col md:flex-row">
                        <p className="p-2 text-center"><img src={htmlImg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>HTML</p>
                        <p className="p-2 text-center"><img src={cssImg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>CSS</p>
                        <p className="p-2 text-center"><img src={jsImg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>JAVASCRIPT</p>
                        <p className="p-2 text-center"><img src={reactJSimg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>REACTJS</p>
                        <p className="p-2 text-center"><img src={tailwindImg} alt="" className="h-[50px] w-[50px]
                        ml-19 md:ml-0"/>Tailwind</p>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <h1 className="text-center text-lg border-1 h-[30px] w-[180px] mx-auto mt-[25px]">Languages</h1>
                    <div className="flex justify-evenly pt-6 flex-col md:flex-row">
                    <p className="p-2 text-center"><img src={cImg} alt="" className="h-[50px] w-[50px] flex md:no-flex justify-center md:no-justify-center ml-19 md:ml-0"/>C</p>
                    <p className="p-2 text-center"><img src={cplusImg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>C++</p>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <h1 className="text-center border-1 h-[30px] w-[100px] mx-auto mt-5">Tools</h1>
                    <div className="flex justify-evenly p-3 md:p-5 flex-col md:flex-row">
                        <p className="p-2 text-center"><img src={gitHubImg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>GitHub</p>
                        <p className="text-center"><img src={gitImage} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>Git</p>
                        <p className="text-center"><img src={viteImg} alt="" className="h-[50px] w-[50px] ml-19 md:ml-0"/>Vite</p>
                    </div>
                </div>
                </div>  
            </div>
        </div>  
  )
}

export default HeroSection;