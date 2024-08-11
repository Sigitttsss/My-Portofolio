import React from 'react'
import Navbar from '../components/Navbar'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaVuejs } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

function Experience() {
  return (
    <>
      <Navbar />
      <div className='experience '>
       <div className='container mx-auto px-4 pt-32'>
       <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-5 dark:text-white'>EXPERIENCE</h1>
        <VerticalTimeline className='-z-50'>
        <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F7F9F2', color: '#03346E' }}
                contentArrowStyle={{ borderRight: '7px solid  #1A3636' }}
                date="November 2022 - present"
                iconStyle={{ background: '#173B45', color: '#fff' }}
                dateClassName='text-red-700'
                icon={<FaScrewdriverWrench />}
                >
                <h3 className="vertical-timeline-element-title">Toko Sparepart Motor</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">November 2022 - Sekarang</h4> */}
                <p>
                Manajemen Administrasi
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F7F9F2', color: '#03346E' }}
                contentArrowStyle={{ borderRight: '7px solid  #1A3636' }}
                date="November 2022 - present"
                dateClassName='text-red-700'
                iconStyle={{ background: '#50B498', color: '#fff' }}
                icon={<FaReact />}
                >
                <h3 className="vertical-timeline-element-title">Learning Programming Languages</h3>
                {/* <h4 className="vertical-timeline-element-subtitle">November 2022 - Sekarang</h4> */}
                <p>
                HTML, CSS, JavaScript, TailwindCSS, React, PHP, Laravel 11
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F7F9F2', color: '#03346E' }}
                contentArrowStyle={{ borderRight: '7px solid  #1A3636' }}
                date="Juli 2021 - November 2022"
                dateClassName='text-red-700'
                iconStyle={{ background: '#1A5319', color: '#fff' }}
                icon={<FaVuejs />}
                >
                <h3 className="vertical-timeline-element-title">Sinergi Informatika Semen Indonesia (Gresik, Jawa TImur)</h3>
                <h4 className="vertical-timeline-element-subtitle">Junior Programmer (FrontEnd)</h4>
                <p>
                Development Web App MDXL-AksesToko.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
    </>
  )
}

export default Experience