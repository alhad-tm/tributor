import React from 'react'
import Main from '../Main/Main'
import Products from '../Products/Products'
import Contact from '../Contact/Contact'
import About from '../About/About'

const Home = () => {
  return (
    <div id="home">
       
        <Main/>
        <About/>
        <Products/>
        <Contact/>
      
    </div>
  )
}

export default Home
