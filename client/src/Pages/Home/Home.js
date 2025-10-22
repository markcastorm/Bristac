import React from 'react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Hero from './components/Hero'
import Introduction from './components/Introduction'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Introduction/>
      <Footer/>
    </div>
  )
}

export default Home