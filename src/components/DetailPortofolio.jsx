import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { portofolioList } from '../data/DataPortofolio.jsx'
import Navbar from '../components/Navbar.jsx'

function DetailPortfolio() {
    const{id} = useParams();
    const data = portofolioList.find((item) => item.id === id)
    if(data == undefined){
      return <Navigate to='/page-not-found' />
    }
  return (
<>
<Navbar />
    <div className='detail-portofolio'>
        <div className='container mx-auto px-4 pt-32'>
            <h1 className='mb-5 text-5xl text-center font-bold dark:text-white '>{data.title}</h1>
            <img src={data.image} className='mb-5' />
            <p className='mb-5 dark:text-white'><b>Skill : </b>{data.skill}</p>
            <p className='mb-5 dark:text-white'><b>Link : </b>{data.link}</p>
        </div>
    </div>
</>
  )
}

export default DetailPortfolio