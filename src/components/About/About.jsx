import React from 'react'
import css from "./About.module.css"
import Test from "../../assets/p33.png"

const About = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>Who we are!</span>
        </div>


        <div className={css.div2}>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda dolor? Inventore impedit modi optio voluptates? Minus, a? Dicta reiciendis voluptas sunt tempore! Quas autem delectus numquam blanditiis iure natus.
            </span>
        </div>


        <div className={css.div3}>
            <img src={Test} alt="" />
            <img src={Test} alt="" />
            <img src={Test} alt="" />
        </div>
      
    </div>
  )
}

export default About
