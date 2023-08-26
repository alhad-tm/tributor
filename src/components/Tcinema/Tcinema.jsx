import React from 'react'
import css from "./Tcinema.module.css"
import Dot from "../../assets/animation_list.gif"
import P1 from "../../assets/p1.svg"

const Tcinema = () => {
  return (
    <div className={css.container}>
           <div className={css.top}>
            <div className={css.head}>
                <span>Tributor for Media</span>
                <span>Simplify content management with tributor, with analytics and content rights at your fingertips!</span>
            </div>
            <div className={css.details}>
                <div className={css.dleft}>
                    <img src={P1} alt="" />
                </div>
                <div className={css.dright}>
                    <div className={css.lists}>
                        <div className={css.listleft}>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                        </div>
                        <div className={css.listright}>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Encoding</span>
                            </div>
                        </div>


                       
                    </div>
                    <div className={css.btn}>
                        <button className={css.registerbtn}>Register</button>
                    </div>
                </div>
            </div>

        </div>


        <div className={css.center}>
            <div className={css.boxwrap}>
                <div className={css.box}>
                    <span>DCP Services</span>
                    <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
                <div className={css.box}>
                    <span>DCP Services</span>
                    <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
            </div>
            <div className={css.boxwrap}>
                <div className={css.box}>
                    <span>DCP Services</span>
                    <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
                <div className={css.box}>
                    <span>DCP Services</span>
                    <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
            </div>
            <div className={css.boxwrap}>
                <div className={css.box}>
                    <span>DCP Services</span>
                    <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
                <div className={css.box}>
                    <span>DCP Services</span>
                    <span>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
            </div>
        </div>


        <div className={css.bottomcontact}>
           
                <span>Contact us to learn more about our pricing details for the product</span>
                <button>Contact</button>
           

        </div>
      
    </div>
  )
}

export default Tcinema
