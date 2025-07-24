import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

function Footer() { 
    return (
        <div className='h-50 w-full bg-[#ffe6e6] mt-5 border-[#ff9999] border-t-1 flex flex-col justify-center items-center'>
            <div className=''>
                <h1 className='text-center text-xl mt-3'>Feel Free to Connect with me!</h1>
                <p className='text-center'>I love almost all the sports, we can have a chat about that if you would like to do so also.</p>
            </div>

            <div className='py-2'>
                <h1 className='mb-2 text-lg me-3 font-medium'>Professional Network</h1>
                <div className='flex justify-center gap-2'>
                    <Link to={"https://www.linkedin.com/feed/"}>
                        <FaLinkedin className='h-10 w-10 p-1 border-1 border-orange-800 rounded-full' />
                    </Link>
                    <Link to={"https://peerlist.io/scroll"}>
                        <SiPeerlist className='h-10 w-10 p-1 border-1 border-orange-800 rounded-full' />
                    </Link>
                    <Link to="https://www.instagram.com/">
                    <FaInstagram className='h-10 w-10 p-1 border-1 border-orange-800 rounded-full' />
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;