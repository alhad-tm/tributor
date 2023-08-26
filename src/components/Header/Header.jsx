import React, { useState } from 'react'
import css from "./Header.module.css"
import Bars from "../../assets/animation_list.gif"

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [opened, setOpened] = useState(false);
  const [down,setDown]=useState(false)

  return (
    <div className={css.container}>
          

       {opened === false && mobile === true ? (
          <div onClick={() => setOpened(true)}>
            <img style={{width:"30px",height:"30px"}} onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
          </div>
        ) : ( <ul>
          <li>home</li>
          <li onClick={()=>setDown(!down)}>products </li>
          {down &&  
            <ul >
            <li>p1</li>
            <li>p2</li>
          </ul>
          }
        
          <li>Contact</li>
        </ul> ) }
        <div>

       </div>
    </div> 
  )
}

export default Header
