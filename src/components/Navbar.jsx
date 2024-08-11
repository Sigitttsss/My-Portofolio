import React, {useEffect, useState} from 'react'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdPermMedia } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import DarkMode from './DarkMode';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Navbar() {
  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)

  function tampilMenu(){
    if(show == ''){
      setShow('tampil')
    }else{
      setShow('')
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 5){
        setScroll(true);
        setShow(false);
      }else{
        setScroll(false)
      }
    })
  })
  

  let menuActive = show ? "left-0" : "-left-full";
  let scrollActive = scroll ? "py-6 bg-sky-400 shadow " : "py-4"

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className='container mx-auto px-4'>
        <div className='navbar-box flex items-center justify-between'>
          <div className='logo'>
            <h1 className='sm:text-2xl text-2xl font-bold dark:text-white'>
              <Link to='/'>Portofolio</Link>
              </h1>
          </div>
          <div className={`${setShow}`} onClick={tampilMenu}> 
            <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white 
            transition-all dark:shadow-none dark:transition-all`}>
              <li className='flex items-center gap-3'>
                <FaHome className="ri-home-2-line text-3xl md:hidden block"></FaHome>
                <HashLink to='/#header' className='font-medium dark:text-white hover:underline'>Beranda</HashLink>
              </li>
              <li className='flex items-center gap-3'>
                <MdPermMedia className="ri-image-line text-3xl md:hidden block"></MdPermMedia>
                <HashLink to='/#portofolio' className='font-medium dark:text-white hover:underline'>Portofolio</HashLink>
              </li>
              <li className='flex items-center gap-3'>
                <FaPerson className="ri-information-line text-3xl md:hidden block"></FaPerson>
                <HashLink to='/#about' className='font-medium dark:text-white hover:underline'>Tentang Saya</HashLink>
              </li>
              <li className='flex items-center gap-3'>
              <IoIosSettings className="ri-settings-3-line text-3xl md:hidden block"></IoIosSettings>
                <Link to='/experience' className='font-medium dark:text-white hover:underline'>Experience</Link>
              </li>
            </ul>
          </div>
          <div className='social flex items-center gap-2'>
            <DarkMode />
            <a href='#' className='bg-sky-800 px-5 py-2 rounded-full text-white font-bold hover:bg-slate-500 transition-all'><FaSearch /></a>
            <button onClick={tampilMenu}>
              {
                show == '' ? (<FaBars className="text-3xl md:hidden block dark:text-white" ></FaBars>) : (<IoClose className="ri-menu-2-line text-3xl md:hidden block dark:text-white"></IoClose>)
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar