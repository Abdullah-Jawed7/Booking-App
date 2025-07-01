import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import Featured from '../../components/featured/featured.jsx'
import "./home.css"

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
      </div>
    </div>
  )
}

export default Home

