import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlinePhp } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

function About() {
  return (
    <div className='about pt-32' id='about'>
        <div className='container mx-auto px-4 dark:text-white'>
            <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>ABOUT</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur semper libero,</p>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo cum eligendi ullam aspernatur consectetur illo ipsum perferendis animi reiciendis?</p>
            <h4 className='text-center lg:text-5xl/tight text-2xl font-medium mt-4 mb-2'>Programming Languange & Tools</h4>
        <div className='flex justify-center gap-4'>
            <FaHtml5 className='md:text-7xl text-9xl'/>
            <FaCss3Alt className='md:text-7xl text-9xl'/>
            <IoLogoJavascript className='md:text-7xl text-9xl'/>
            <MdOutlinePhp className='md:text-7xl text-9xl'/>
            <SiTailwindcss className='md:text-7xl text-9xl'/>
            <FaReact className='md:text-7xl text-9xl'/>
            <FaGitAlt className='md:text-7xl text-9xl'/>
        </div>
        </div>
    </div>
  )
}

export default About