import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import Featured from '../../components/featured/featured.jsx'
import PropertyList from '../../components/propertyList/PropertyList.jsx'
import FeaturedProperties from '../../components/featuresProperties/FeaturedProperties.jsx'
import MailList from '../../components/mailList/MailList.jsx'
import Footer from '../../components/footer/Footer.jsx'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Home Guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home

