import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Prekets from './components/Prekets/Prekets';
import Tcinema from './components/Tcinema/Tcinema';
import Tmedia from './components/Tmedia/Tmedia';
import Header from "./components/Header/Header"
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import Backto from "../src/assets/backto.svg"



function App() {
  const [state,setState]=useState(false)

  const backTo=()=>{
    
  if (window.scrollY>100){
    setState(true)
  } else{
    setState(false)
  }

  }

  window.addEventListener("scroll",backTo)
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
       
          <Route path='/' exact element={<Home/>}/>
          <Route path='/tmedia'  element={ <Tmedia/>}/>
          <Route path='/tcinema' element={ <Tcinema/>}/>
          <Route path='/prekets'  element={   <Prekets/>}/>
        </Routes>
        {/* <Contact/> */}
        <Footer/>
        <img onClick={()=>window.scrollTo({top: 0,left: 0,behavior: "smooth",})} className= { state? "tobtn2":" tobtn"} src={Backto}></img>
      </Router>
 
  
  

    </div>
  );
}

export default App;
