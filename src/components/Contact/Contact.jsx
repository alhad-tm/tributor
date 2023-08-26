import React from 'react'
import css from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span>Connect with us at Tributor and let's shape the future of the film industry together. Your ideas, feedback, and collaboration are the building blocks of innovation. Reach out to us today and be a part of the cinematic revolution!</span>
        </div>


        <div className={css.div2}>
            <div className={css.div2left}>
                <span>CONTACT US</span>
                <span>Call +91 88778 80101 <br />
or contact us via email
contact@inivicious.in</span>
            </div>
            <div className={css.div2right}>
                <span>LOCATION</span>
            <span>124-H, 3rd Floor, Thendral Complex,
DB Road, RS Puram, 
Coimbatore - 641002</span>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
