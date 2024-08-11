import React from 'react'
import { Link } from 'react-router-dom'
import { portofolioList } from '../data/DataPortofolio'

function Portofolio() {
  return (
    <div className='portofolio pt-32' id='portofolio'>
        <div className='container mx-auto px-4'>
        <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2 dark:text-white'>PORTOFOLIO</h1>
            <p className='text-center dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur semper libero,</p>
            <div className='service-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
              {
                portofolioList.map((item) => {
                    return(
                    <div className='box bg-white rounded-2xl shadow p-4 item dark:bg-slate-400' key={item.id}>
                        <h3 className='text-xl font-bold mt-6 mb-2 text-black dark:text-white'>Project : {item.id} - {item.title}</h3>
                        <Link to={`/portofolio/${item.id}`}><img src={item.image} /></Link>
                        <p className='text-base/loose text-black dark:text-white'><span className='font-bold'>Skill : </span> {item.skill}</p>
                    </div>
                    )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Portofolio