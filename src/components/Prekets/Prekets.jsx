import React from 'react'
import css from "./Prekets.module.css"
import P3 from "../../assets/p33.png"

const Prekets = () => {
  return (
    <div className={css.container} id='prekets'>
        <div className={css.div1}>
            <span>PREKETS.COM</span>
        </div>

        <div className={css.div2}>
            <span>Streamline your movie ticketing process with prekets, at the lowest price out on market!</span>
        </div>

        <div className={css.div3}>
            <span>Our ticketing system, Prekets, offers affordable access to the best movie experiences. With our low-cost tickets, you can enjoy your favourite movies without breaking the bank. Plus, our platform is easy to use, ensuring a hassle-free ticket buying process. Get ready to sit back, relax, and enjoy the show!</span>
        </div>

        <div className={css.div4}>
            <button className={css.downloadbtn}>Download app</button>
        </div>

        <div className={css.div5}>
            <img src={P3} alt="" />
        </div>
        {/* <div className={css.bottomcontact}>
           
           <span>Contact us to learn more about our pricing details for the product</span>
           <button className={css.contactbtn}>Contact</button>
      
 
   </div> */}


      
    </div>
  )
}

export default Prekets
