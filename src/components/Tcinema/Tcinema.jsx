import React from 'react'
import css from "./Tcinema.module.css"
import Dot from "../../assets/animation_list.gif"
import P1 from "../../assets/p1.svg"

const Tcinema = () => {
  return (
    <div className={css.maincontainer} id='tcinema'>
    <div className={css.container}>
           <div className={css.top}>
            <div className={css.head}>
                <span>Tributor for Cinema</span>
                <span>Elevate your movie screening experience with our platform, having full control of your exhibition process!</span> 
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
                                <span>DCP Tracking</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>DCP Key Management</span>
                            </div>

                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Digital Agreement(Legal)</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Analytics & Performance</span>
                            </div>
                        </div>
                        <div className={css.listright}>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Screen Ads Aggregator</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Screen + Show Configurator</span>
                            </div>
                            <div className={css.set}>
                                <img src={Dot} alt="" />
                                <span>Integrated Workflow with `Distributors</span>
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
                <div className={css.box1} >
                    <span className={css.bx1}>DCP Services</span>
                    <span className={css.bx2}>Easily manage all your digital cinema packages (DCPs) from a single dashboard. Managing your keys is now easier than ever. </span>
                </div>
                <div className={css.box2}>
                    <span className={css.bx1}>Analytics</span>
                    <span className={css.bx2}>Get real-time insights into your box office performance, including ticket sales, and screen performance. Use this information to make data-driven decisions and optimize your marketing strategies.</span>
                </div>
            </div>
            <div className={css.boxwrap}>
                <div className={css.box3}>
                    <span className={css.bx1}>Agreement management</span>
                    <span className={css.bx2}>Keep track of all your agreements and contracts with stakeholders in one place. Get alerts when agreements are about to expire and automate the renewal process.</span>
                </div>
                <div className={css.box4}>
                    <span className={css.bx1}>Screen Ads aggregator</span>
                    <span className={css.bx2}>Choose which ads to display on which screens and schedule them in advance. Make sure your advertisers reach their target audience and maximize your ad revenue.</span>
                </div>
            </div>
            <div className={css.boxwrap}>
                <div className={css.box5}>
                    <span className={css.bx1}>Screen and show configuration</span>
                    <span className={css.bx2}>Configure your theatre screens and shows in a user-friendly interface. Manage show times, ticket prices, seating arrangements, and more.</span>
                </div>
                <div className={css.box6}>
                    <span className={css.bx1}>Payment gateway</span>
                    <span className={css.bx2}>Streamline your payment process and get paid faster with our secure and easy-to-use payment gateway. Settle all payments on a weekly basis and automatically split movie revenue with other stakeholders.</span>
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

export default Tcinema
