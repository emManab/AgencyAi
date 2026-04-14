import React from 'react'
import Titlelikho from './title'
import assets from '../assets/assets'

const ourwork = () => {

    const workData = [
        {
            title:  "Mobile App Marketing" , 
            desc : "We turn bold ideas into powerful digital solutions that connect , engage...",
            image: assets.work_mobile_app
        },
        {
            title:  "Dashboard Management" , 
            desc : "We turn bold ideas into powerful digital solutions that connect , engage...",
            image: assets.work_dashboard_management
        },
        {
            title:  "Fitness App Promotion" , 
            desc : "We turn bold ideas into powerful digital solutions that connect , engage...",
            image: assets.work_fitness_app
        },
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Titlelikho title='Our Latest work' desc="From Strategy to execution, we craft
        digital solutions that move your buisness forward."/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {workData.map((work,index)=>(
            <div key={index} className='hover:scale-102 duration-500 transition-all
            cursor-pointer'>
                <img src={work.image} alt="w-full rounded-xl" />
                <h3 className='mt-3 mb-2 text-lg
                font-semibold'>{work.title}</h3>
                <p className='text-sm opacity-60 w-5/6'>{work.desc}</p>
            </div>
        ))}
    </div>

    </div>
    
  )
}

export default ourwork
