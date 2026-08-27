import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ShopByCategory from './components/Category'
import FeaturedSelection from './components/Featured'
import WhyRelievia from './components/Why'
import AboutRelievia from './components/AboutR'
import CtaContact from './components/CTA'
import RelieviaFAQ from './components/FAQ'
const App = () => {
  return (
    <><Navbar />
    <Hero/>
    <ShopByCategory/>
   <RelieviaFAQ/>
    <WhyRelievia/>
    <AboutRelievia/>
    <CtaContact/></>
  )
}

export default App