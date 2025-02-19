import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Featured from '../components/home/Featured'
import Trending from '../components/home/Trending'
import TopSeller from '../components/home/TopSeller'
import Auction from '../components/home/Auction'
import Collection from '../components/home/Collection'
import Sold from '../components/home/Sold'
import Imaginations from '../components/home/Imaginations'
import Visibility from '../components/home/Visibility'
import Faq from '../components/home/Faq'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <HeroSection/>
      <Featured/>
      <Trending/>
      <TopSeller/>
      <Auction/>
      <Collection/>
      <Sold/>
      {/* <Imaginations/> */}
      <Visibility/>
      <Faq/>
      {/* <Footer/> */}
    </main>
  )
}

export default Home
