import React from 'react'
import css from "./Footer.module.css"
import Trib from "../../assets/TRIBUTOR.png"
import Fb from "../../assets/Facebook.svg"
import Insta from "../../assets/instagram.svg"
import Twitter from "../../assets/twitter.svg"

const Footer = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
          <img src={Trib} alt="" />
        </div>


        <div className={css.div2}>
          <ul className={css.flist}>
            <li className={css.aboutli}>About us</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className={css.div3}>
          <div className={css.div3left}>
     <a href="https://twitter.com/Invicious_in?s=08" target='blank'><img src={Fb} alt="" /></a> 
     <a href="https://twitter.com/Invicious_in?s=08" target='blank'><img src={Insta} alt="" /></a> 
     <a href="https://twitter.com/Invicious_in?s=08" target='blank'><img src={Twitter} alt="" /></a> 
 
          </div>
          <div className={css.div3right}>
            <span>Copyright © 2023 tributor</span>
          </div>
        </div>
      
    </div>
  )
}

export default Footer
