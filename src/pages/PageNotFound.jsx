import React from 'react'
import Navbar from '../components/Navbar'

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className='pagenotfound pt-48 md:pt-96' id='pagenotfound'>
        <div className='container mx-auto px-4 dark:text-white'>
            <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>PAGE NOT FOUND</h1>
        </div>
    </div>
    </>
  )
}

export default PageNotFound