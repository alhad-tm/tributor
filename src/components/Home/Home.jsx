import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Products from '../Products/Products'
import Contact from '../Contact/Contact'
import About from '../About/About'

const Home = () => {
  return (
    <div>
        <Header/>
        <Main/>
        <About/>
        <Products/>
        <Contact/>
      
    </div>
  )
}

export default Home
