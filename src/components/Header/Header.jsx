import React, { useState } from 'react'
import css from "./Header.module.css"
import Bars from "../../assets/bars.svg"
import Trib from "../../assets/TRIBUTOR.png"

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
        ) : ( <ul  className={css.ulist}>
          
          <li>Home</li>
          <li onClick={()=>setDown(!down)} >Product </li>
          {down &&  
            <ul className={css.productsublist} >
            <li onClick={()=>setDown(false)}>Tributor for Cinemas</li>
            <li onClick={()=>setDown(false)}>Tributor for Media</li>
            <li onClick={()=>setDown(false)}>Prekets.com</li>
          </ul>
          }
          <li>About</li>
          <li>Contact</li>
        </ul> ) }
        <div>

       </div>
       </div>

    </div> 
  )
}

export default Header
