import React from 'react'
import assets from '../assets/assets'
import Titlelikho from './title'

const Services = () => {
    const serviceData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solution that connect, engage..',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We turn bold ideas into powerful digital solution that connect, engage..',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We turn bold ideas into powerful digital solution that connect, engage..',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We turn bold ideas into powerful digital solution that connect, engage..',
            icon: assets.social_icon
        }
    ]

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src= {assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Titlelikho title= 'How can we help?' desc='From strategy to execution, we craft digital solutions that move your buisness forward'/>

    </div>
  )
}

export default Services
