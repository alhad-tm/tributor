import React from 'react'
import css from "./Products.module.css"
import P1 from "../../assets/p1.svg"
import P2 from "../../assets/p2.svg"
import P3 from "../../assets/p33.png"
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className={css.container} id='products'>
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
                  <Link to="/tcinema"> <button onClick={() => window.scrollTo(0, 0)} className={css.viewdetailsbtn}>View details</button>  </Link>  
                </div>
            </div>
            <div className={css.right}>
                <img src={P1} alt="" />
            </div>
        </div>

        {/* product2 */}
        <div className={css.p2}>
            <div className={css.left}>
                <div className={css.left1}>
                    <span className={css.head}>Tributor for Media</span>
                   
                </div>

                <div className={css.left2}>
                    <span className={css.desc}>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span>
                </div>

                <div className={css.left3}>
                    <button className={css.registerbtn}>Register</button>
                    <Link to="/tmedia"> <button onClick={() => window.scrollTo(0, 0)} className={css.viewdetailsbtn}>View details</button>  </Link>  
                </div>
            </div>
            <div className={css.p2right}>
                <img src={P2} alt="" />
            </div>
        </div>

        {/* product2 */}


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
                    <Link to="/prekets"> <button onClick={() => window.scrollTo(0, 0)} className={css.viewdetailsbtn}>View details</button>  </Link>  
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
