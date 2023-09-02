import React from 'react'
import css from "./Footer.module.css"
import Trib from "../../assets/TRIBUTORlogo.svg"
import Fb from "../../assets/Facebook.svg"
import Insta from "../../assets/instagram.svg"
import Twitter from "../../assets/twitter.svg"
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
          <img src={Trib} alt="" />
        </div>


        <div className={css.div2}>
          <ul className={css.flist}>
         <HashLink to="/#about" smooth="true">  <li className={css.aboutli}>About us</li> </HashLink>  
         <HashLink to="/#products" smooth="true">  <li>Products</li> </HashLink>  
         <HashLink to="/#contact" smooth="true">  <li>Contact</li> </HashLink>  
          
          
          </ul>
        </div>
        
        <div className={css.div3}>
          <div className={css.div3left}>
     <a href="https://twitter.com/Invicious_in?s=08" target='blank'><img src={Fb} alt="" /></a> 
     <a href="https://instagram.com/invicious.in?igshid=MzRlODBiNWFlZA==" target='blank'><img src={Insta} alt="" /></a> 
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
