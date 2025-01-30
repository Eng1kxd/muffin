import React from 'react'

import './css/main.css'
import Header from './components/Header'
import SectionHeader from './components/SectionHeader'
import Sweets from './components/Sweets'
import WhyWe from './components/WhyWe'
import Achievments from './components/Achievments'
import FormSection1 from './components/FormSection1'
import Realization from './components/Realization'
import Reviews from './components/Reviews'
import FormSection2 from './components/FormSection2'
import Blog from './components/Blog'
import Location from './components/Location'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'


function App() {

  return (
  <>
    <Header/>
      
    <main>
    <SectionHeader/>
    <Sweets/>
    <WhyWe/>
    <Achievments/>
    <FormSection1/>
    <Realization/>
    <Reviews/>
    <FormSection2/>
    <Blog/>
    <Location/>
    <CTABanner/>
    </main>

    <Footer/>
  </>
  )
}

export default App
