import React, { useState } from 'react'
import css from "./Header.module.css"
import Bars from "../../assets/bars.svg"
import Trib from "../../assets/TRIBUTORlogo.svg"
import Close from "../../assets/close.png"

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
            <img style={{width:"30px",height:"30px"}} onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
          </div>
        ) : (
         <div className={css.new}>
        {mobile?   <div className={css.n1}>
              <img className={css.log} src={Trib} alt="" />
              <img className={css.close} onClick={()=>setOpened(false)} src={Close} alt="" />
            </div> :""
          }   
           <ul  className={css.ulist}>
          
          <li onClick={()=>setOpened(false)}>Home</li>
          <li onClick={()=>setDown(!down)} >Product  v </li>
          {down &&  
            <ul className={css.productsublist} >
            <li onClick={()=>setDown(false)}>Tributor for Cinemas</li>
            <li onClick={()=>setDown(false)}>Tributor for Media</li>
            <li onClick={()=>setDown(false)}>Prekets.com</li>
          </ul>
          }
          <li onClick={()=>setOpened(false)}>About</li>
          <li onClick={()=>setOpened(false)}>Contact</li>
        </ul> </div>) } 
        <div>

       </div>
       </div>

    </div> 
  )
}

export default Header
