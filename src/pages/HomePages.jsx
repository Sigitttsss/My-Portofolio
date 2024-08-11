import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from './Header';
import Portofolio from './Portofolio';
import About from './About';
function HomePages() {
  return (
    <>
        <Navbar />
          <Header />
          <Portofolio />
          <About />
          {/* <HomePage /> */}
        <Footer />
    </>
  )
}

export default HomePages