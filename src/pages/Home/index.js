import React from 'react'
import About from './components/About.js'
import FeatureCards from './components/FeatureCards'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing.js'
import Section1 from './components/Section1'
import FAQ from './components/FAQ.js'
import OurTeam from './components/OurTeam.js'


export default function Home() {
  return (
    <div>
      <Navbar/>
        <Header/>
        <Section1/>
        <FeatureCards/>
        <About/>
       
<Pricing/>
<FAQ/> 
<OurTeam/>
    </div>
  )
}
