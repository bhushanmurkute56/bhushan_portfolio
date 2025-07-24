import HeroImg from "./HeroImg.png";
import { FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import {Link} from "react-router"

function Main() {
  return (
    <div className="h-[650px] md:h-[675px]">
    <div className="flex">
        <div className="pt-30 pl-10">
        <h1 className='text-3xl text-left m-5 md:m-0 md:p-10 font-bold flex justify-start'>Hey, I am Bhushan Murkute</h1>
        <p className='pl-10 h-30 w-110 md:w-190 text-xl'>Passionate about building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. <span className="bg-[#ffccff]">I focus on clean design, smooth user experiences</span> and <span className="bg-[#ffccff]">performance-driven development. </span></p>
        <button className="border-1 p-3 ml-35 mx-5 rounded-xl hover:bg-[#ffccff] cursor-pointer mt-15 md:mt-5">Resume</button>
        <button className="border-1 p-3 rounded-xl  hover:bg-[#ffccff] cursor-pointer">Hire Me</button>
        <div className="flex justify-center pt-10 mr-70 cursor-pointer pl-[160px] md:pl-0">
        <Link to="https://www.linkedin.com/in/bhushan-murkute-4a7392253/"><FaLinkedin className="h-[40px] w-[40px] mr-3"/></Link>
        <Link to="https://peerlist.io/bhushanmurkute"><SiPeerlist className="h-[40px] w-[40px] mr-3"/></Link>
        <Link to="https://www.instagram.com/bhushan__murkute/"><FaInstagram className="h-[40px] w-[40px]"/></Link>
        </div>
        </div>
        <div className="flex justify-end pt-25 ml-30">
            <img src={HeroImg} alt="" className="h-[500px] w-[500px]"/>
        </div>
    </div>
    </div>
  )
}

export default Main;