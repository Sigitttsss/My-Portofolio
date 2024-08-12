import React from 'react'
import profilePicture from '../assets/profile.png'
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div className='header pb-10' id='header'>
        <div className='container mx-auto px-4'>
        <div className='hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32'>
          <div className='box md:order-1 order-2 '>
            <h1 className='lg:text-5xl/tight md:text-start text-center text-3xl font-medium mb-7 dark:text-white'>Hi, I'am Sigit Sugiantoro <span className='font-bold text-sky-400 underline'>Programmer - DevOps</span></h1>
            <p className='md:text-start text-center text-base/8 mb-5 dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur semper libero, id sagittis massa efficitur sed. Aenean feugiat justo non ex condimentum, vel gravida mi rutrum.</p>
            <div className='md:justify-normal justify-center flex mb-5 gap-3 dark:text-white'>
                <a href='' className='sm:text-center  text-4xl'><FaInstagram /></a> 
                <a href='' className='text-4xl'><FaTiktok /></a>
                <a href='' className='text-4xl'><FaTwitter /></a>
                <a href='' className='text-4xl'><FaFacebookF /></a>
            </div>
            <HashLink to='/#about' className='md:justify-normal md:w-36 justify-center flex bg-sky-400 hover:bg-sky-500 transition-all py-1 px-4 text-white shadow rounded-full'>Tentang Saya</HashLink>
          </div>
          <div className='box md:order-2 order-1'>
            <img src={profilePicture} alt='Hero Image' className='md:w-full w-[900px] mx-auto '/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header