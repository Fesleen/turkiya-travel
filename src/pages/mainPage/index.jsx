import React from 'react'
import Header from '../../components/header'
import Hero from '../../components/hero'
import AboutUs from '../../components/aboutUs'
import Slider from '../../components/slider'
import Photo from '../../components/photoComponent'
import Places from '../../components/places'
import Blog from '../../components/blog'
import Contact from '../../components/contact'
import Footer from '../../components/footer'

const MainPages = () => {
  return (
    <>
   <Header/>
   <Hero/>
   <AboutUs/>
   <Slider/>
   <Photo/>
   <Places/>
   <Blog/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default MainPages