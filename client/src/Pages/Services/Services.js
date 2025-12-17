import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import ServiceHero from './components/serviceHero'
import ServicesCollection from './components/ServicesCollection'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <ServiceHero/>
      <ServicesCollection/>
      <Footer/>
      
    </div>
  )
}

export default Services