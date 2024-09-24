import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Listing from './components/Listing'
import db from '../db.json'
const App = () => {
const [data, setData] = useState([]);

useEffect(() =>{
    setData(db);
},[])

  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <Listing 
      title = "We've got what everyone's listening to"
      description = "Best sellers. New releases. That story you've been waiting for."
      data = {data}
      />
    </>
  )
}

export default App
