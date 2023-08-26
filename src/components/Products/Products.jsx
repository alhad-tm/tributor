import React from 'react'
import css from "./Products.module.css"
import P1 from "../../assets/p1.svg"
import P2 from "../../assets/p2.svg"
import P3 from "../../assets/p33.png"

const Products = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span>PRODUCTS</span>
            <span>Tributor by Invicious</span>
        </div>

        <div className={css.p1}>
            <div className={css.left}>
                <div className={css.left1}>
                    <span className={css.head}>Tributor for cinemas</span>
                   
                </div>

                <div className={css.left2}>
                    <span className={css.desc}>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span>
                </div>

                <div className={css.left3}>
                    <button className={css.registerbtn}>Register</button>
                    <button className={css.viewdetailsbtn}>View details</button>
                </div>
            </div>
            <div className={css.right}>
                <img src={P1} alt="" />
            </div>
        </div>
        <div className={css.p2}>
            <div className={css.left}>
                <div className={css.left1}>
                    <span className={css.head}>Tributor for cinemas</span>
                   
                </div>

                <div className={css.left2}>
                    <span className={css.desc}>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span>
                </div>

                <div className={css.left3}>
                    <button className={css.registerbtn}>Register</button>
                    <button className={css.viewdetailsbtn}>View details</button>
                </div>
            </div>
            <div className={css.right}>
                <img src={P2} alt="" />
            </div>
        </div>
        <div className={css.p1}>
            <div className={css.left}>
                <div className={css.left1}>
                    <span className={css.head}>Tributor for cinemas</span>
                   
                </div>

                <div className={css.left2}>
                    <span className={css.desc}>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span>
                </div>

                <div className={css.left3}>
                    <button className={css.registerbtn}>Register</button>
                    <button className={css.viewdetailsbtn}>View details</button>
                </div>
            </div>
            <div className={css.right}>
                <img src={P3} alt="" />
            </div>
        </div>


      
    </div>
  )
}

export default Products
