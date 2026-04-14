import React, { useState } from 'react'
import Titlelikho from './title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const Contactus = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "3e662b76-574b-4bba-89c8-c910759f46c0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success('Thank you for your submission');
      event.target.reset();
    } else {
      toast.error(data.message);
    }
  };


  return (
    

    <div id='contact-us' className='flex flex-col items-center gap-8
    px-6 sm:px-12 md:px-20 lg:px-24 xl:px-40 py-20 text-gray-700
    dark:text-white'>
        <Titlelikho title="Reach out to us" desc="From strategy to execution, we craft
        digital solutions that move your business forward." />
        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-5 sm:gap-6
        max-w-2xl w-full'>
            <div className='flex flex-col'>
                <label className='mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200'>Your Name</label>
                <div className='flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300
                dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-300
                focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20
                dark:focus-within:ring-primary/30 hover:border-gray-400 dark:hover:border-gray-500'>
                    <img src={assets.person_icon} alt="" className='w-5 h-5 opacity-60' />
                    <input name="name" type="text" placeholder='Enter your name' className='w-full text-sm outline-none
                    bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500' required/>
                </div>
            </div>
            <div className='flex flex-col'>
                <label className='mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200'>Email Address</label>
                <div className='flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300
                dark:border-gray-600 bg-white dark:bg-gray-800 transition-all duration-300
                focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20
                dark:focus-within:ring-primary/30 hover:border-gray-400 dark:hover:border-gray-500'>
                    <img src={assets.email_icon} alt="" className='w-5 h-5 opacity-60' />
                    <input name="email" type="email" placeholder='Enter your email' className='w-full text-sm outline-none
                    bg-transparent placeholder:text-gray-400 dark:placeholder:text-gray-500' required/>
                </div>
            </div>
            <div className='sm:col-span-2 flex flex-col'>
                <label className='mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200'>Message</label>
                <textarea name='message' rows={6} placeholder='Tell us about your project...'
                className='px-4 py-3 text-sm outline-none rounded-xl border border-gray-300
                dark:border-gray-600 bg-white dark:bg-gray-800 resize-none
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                transition-all duration-300
                focus:border-primary focus:ring-2 focus:ring-primary/20
                dark:focus:ring-primary/30 hover:border-gray-400 dark:hover:border-gray-500' required></textarea>
            </div>
            <button type='submit' className='w-max flex items-center gap-2 bg-primary text-white
            text-sm font-semibold px-10 py-3.5 rounded-full cursor-pointer
            shadow-lg shadow-primary/25 dark:shadow-primary/40
            hover:scale-105 hover:shadow-xl hover:shadow-primary/30
            active:scale-95 transition-all duration-300'>
                Submit
                <img src={assets.arrow_icon} alt="" className='w-4 h-4' />
            </button>
        </form>
    </div>
  )
}

export default Contactus
