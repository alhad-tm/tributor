import React from 'react'
import css from "./Tmedia.module.css"
import P2 from "../../assets/p2.svg"
import Dot from "../../assets/animation_list.gif"

const Tmedia = () => {
  return (
    <div className={css.maincontainer} id='tmedia'>
    <div className={css.container}>
        <div className={css.top}>
            <div className={css.head}>
                <span>Tributor for Media</span>
                <span>Simplify content management with tributor, with analytics and content rights at your fingertips!</span>
            </div>
            <div className={css.details}>
                <div className={css.dleft}>
                    <img src={P2} alt="" />
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
                                <span>DCP Tracking</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Key Management</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Digital Agreements(Legal)</span>
                            </div>
                        </div>
                        <div className={css.listright}>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Daily Box Data</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCRs, WCRs, TCR</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Analytics</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Payment Gateway</span>
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
                <div className={css.box1}>
                    <span className={css.bx1}>DCP Services</span>
                    <span className={css.bx2}>Avail a comprehensive DCP (Digital Cinema Package) tracking, encoding and key management system, allowing you to easily manage your movie's digital assets across different distribution channels.</span>
                </div>
                <div className={css.box2}>
                    <span className={css.bx1}>Analytics</span>
                    <span className={css.bx2}> Get detailed insights into your movie's performance with our analytics feature. Track box office revenues, social media engagement, audience demographics, and more in real-time to make informed decisions! </span>
                </div>
            </div>
            <div className={css.boxwrap}>
                <div className={css.box3}>
                    <span className={css.bx1}>Agreement management</span>
                    <span className={css.bx2}>Keep track of all your agreements in one place with our user dashboard. Easily view, sign, and manage agreements with distributors, theatres, and other partners.</span>
                </div>
                <div className={css.box4}>
                    <span className={css.bx1}>Payment gateway</span>
                    <span className={css.bx2}> Simplify the payment process with our integrated payment gateway. Receive revenue splits from theatres and other distribution partners directly to your bank account on a weekly basis.</span>
                </div>
            </div>
        </div>

    </div>

    <div className={css.bottomcontact}>
           
           <span>Contact us to learn more about our pricing details for the product</span>
           <button className={css.contactbtn}>Contact</button>
      

   </div>
    </div>
  )
}

export default Tmedia
