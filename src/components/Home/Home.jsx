import React from 'react'
import Main from '../Main/Main'
import Products from '../Products/Products'
import Contact from '../Contact/Contact'
import About from '../About/About'
import { Routes,Route } from 'react-router-dom'


const Home = () => {
  return (
    <div id="home">
       
        <Main/>
        {/* <Routes>

       
      <Route path="/component-a" element ={<About />} /> 
      </Routes> */}
      <About/>
        <Products/>
        <Contact/>
      
    </div>
  )
}

export default Home
