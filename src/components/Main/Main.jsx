import React from 'react'
import css from "./Main.module.css"
import Tb1 from "../../assets/tributor1.svg"
import Darrow from "../../assets/downarrow.svg"

const Main = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <img src={Tb1} alt="" />
        </div>

        <div className={css.div2}>
            <span>Crafted with Passion and Precision</span>
        </div>
        <div className={css.div3}>
            <span>Tributor stands as your all-inclusive destination for flawless film distribution and content management, coupled with a cutting-edge movie ticket booking app.</span>
        </div>

        <div className={css.div4}>
          <span>Our Products</span>
          <img src={Darrow} alt="" />
           </div>
      
    </div>
  )
}

export default Main 
  