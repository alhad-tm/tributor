import React from 'react'
import css from "./About.module.css"

import A1 from "../../assets/a11.svg"
import A2 from "../../assets/a22.svg"
import A3 from "../../assets/a33.svg"

const About = () => {
  return (
    <div className={css.container} id='about'>

        <div className={css.div1}>
            <span>Who we are!</span>
        </div>


        <div className={css.div2}>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, assumenda dolor? Inventore impedit modi optio voluptates? Minus, a? Dicta reiciendis voluptas sunt tempore! Quas autem delectus numquam blanditiis iure natus.
            </span>
        </div>


        <div className={css.div3}>
            <img className={css.a1} src={A1} alt="" />
            <img className={css.a1} src={A2} alt="" />
            <img className={css.a1} src={A3} alt="" />
        </div>
      
    </div>
  )
}

export default About
