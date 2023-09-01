import React, { useState } from 'react'
import css from "./Header.module.css"
import Bars from "../../assets/bars.svg"
import Trib from "../../assets/TRIBUTORlogo.svg"
import Close from "../../assets/close.png"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Arrowd from "../../assets/chevron-right.svg"

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [opened, setOpened] = useState(false);
  const [down,setDown]=useState(false)
  
  

  return (
    <div className={css.container}>
      <div className={css.left}>
        <img src={Trib} alt="" />
       
      </div>


      <div className={css.right}>

     
          

       {opened === false && mobile === true ? (
          <div className={css.sw} onClick={() => setOpened(true)}>
            <img style={{width:"20px",height:"20px"}} onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
          </div>
        ) : (
         <div className={css.new}>
        {mobile?   <div className={css.n1}>
              <img className={css.log} src={Trib} alt="" />
              <img className={css.close} onClick={()=>setOpened(false)} src={Close} alt="" />
            </div> :""
          }   
           <ul  className={css.ulist}> 
          
       <HashLink smooth={true} to="/#home">  <li onClick={()=>setOpened(false)}>Home</li></HashLink>  
       <div className={css.productset}>  
        <HashLink onClick={()=>setOpened(false)} smooth={true} to="/#products"> <li  >Product</li> </HashLink>
        <img onClick={()=>setDown(!down)} src={Arrowd} alt="" />
       </div>
          
          {down &&  
            <ul className={css.productsublist} >
          <HashLink onClick={()=>setOpened(false)} to="/tcinema/#tcinema"><li onClick={()=>setDown(false)}>Tributor for Cinemas</li></HashLink>   
          <HashLink onClick={()=>setOpened(false)} to="/tmedia/#tmedia"><li onClick={()=>setDown(false)}>Tributor for Media</li></HashLink>   
          <HashLink onClick={()=>setOpened(false)} to="/prekets/#prekets"><li onClick={()=>setDown(false)}>Prekets</li></HashLink>   
       
          </ul> 
          }
          <HashLink smooth={true} to="/#about">  <li onClick={()=>setOpened(false)}>About</li></HashLink>  
          <HashLink smooth={true} to="/#contact">  <li onClick={()=>setOpened(false)}>Contact</li></HashLink>  
       
        </ul> </div>) } 
        <div>
 
       </div>
       </div>

    </div> 
  )
}

export default Header
