import React from 'react'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import WorkedForMarquee from './components/WorkedForMarquee'
import SolutionsSection from './components/SolutionsSection'
import Values from './components/values'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      {/* <WorkedForMarquee/> */}
      <Introduction/>
      <SolutionsSection/>
      <Values/>
      <Footer/>
    </div>
  )
}

export default Home