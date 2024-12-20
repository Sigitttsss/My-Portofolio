import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlinePhp } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

function About() {
  return (
    <div className='about pt-32' id='about'>
        <div className='container mx-auto px-4 dark:text-white'>
            <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>ABOUT</h1>
            <p className='text-center'>Saya merupakan Junior Programmer pengalaman kerja 1,5 tahun di perusahaan Sinergi Informatika Semen Indonesia. <br/><br/>Serta memiliki kemampuan analisis yang baik serta kemampuan untuk terus belajar.</p> 
            
            <p className='text-center'>Punya kepribadian yang gigih dan pantang menyerah. Memiliki manajemen waktu yang baik.</p>
            <h4 className='text-center lg:text-5xl/tight text-2xl font-medium mt-4 mb-2'>Programming Languange & Tools</h4>
        <div className='flex justify-center gap-4'>
            <FaHtml5 className='md:text-8xl text-6xl'/>
            <FaCss3Alt className='md:text-8xl text-6xl'/>
            <IoLogoJavascript className='md:text-8xl text-6xl'/>
            <MdOutlinePhp className='md:text-8xl text-6xl'/>
        </div>
        <div className='flex justify-center gap-4'>
            <SiTailwindcss className='md:text-8xl text-6xl'/>
            <FaReact className='md:text-8xl text-6xl'/>
            <FaGitAlt className='md:text-8xl text-6xl'/>
            <FaLaravel className='md:text-8xl text-6xl' />
        </div>
        </div>
    </div>
  )
}

export default About