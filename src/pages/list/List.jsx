import React, { useState } from 'react'
import './list.css'
import Header from '../../components/header/Header.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useLocation } from 'react-router'

function List() {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [ options, setOptions] = useState(location.state.options)
  return (
    <div>
      <Navbar/>
      <Header type = 'list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lstitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label >check in date</label>
              <input type="text" />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List
