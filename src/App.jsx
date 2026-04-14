import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/ourwork'
import Team from './components/team'
import Contactus from './components/Contactus'
import {Toaster} from 'react-hot-toast'
import Footer from './components/footer'

function App() {
  
  const[theme,setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme'): 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme = {theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Team/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default App
