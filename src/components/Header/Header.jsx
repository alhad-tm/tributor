import React, { useEffect, useRef, useState } from 'react'
import css from "./Header.module.css"
import Bars from "../../assets/bars2.svg"
import Trib from "../../assets/TRIBUTORlogo.svg"
import Close from "../../assets/close.png"

import { HashLink } from 'react-router-hash-link'
// import Arrowd from "../../assets/drop.svg"



const Header = () => {
  const [activeNav, setActiveNav] = useState('/')


  const mobile = window.innerWidth <= 768 ? true : false;
  const [opened, setOpened] = useState(false);
  const [down,setDown]=useState(false)
  
  const documentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (documentRef.current && !documentRef.current.contains(event.target)) {
        setDown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={css.container} >
      <div className={css.wrap}>

      <div className={css.left}>
      <a href="/">  <img className={css.mlogo} src={Trib} alt="" /> </a>   
      </div>


      <div className={css.right}>
       {opened === false && mobile === true ? (
          <div className={css.sw} onClick={() => setOpened(true)}>
            <img  onClick={()=>setOpened(false)} className={css.bars} src={Bars} alt="" />
          </div>
        ) : (
         <div className={css.new}>
        {mobile?   <div className={css.n1}>
              <img className={css.log} src={Trib} alt="" />
              <img className={css.close} onClick={()=>setOpened(false)} src={Close} alt="" />
            </div> :""
          }   
           <ul  className={css.ulist}> 
          
       <HashLink  onClick={() => setActiveNav('/#home')} className={activeNav === '/#home' ? 'active' : ''}  smooth={true} to="/#home">  <li onClick={()=>setOpened(false)}>Home</li></HashLink>  
       <div className={css.productset} onClick={()=>setDown(!down)}>  
     <HashLink onClick={() => setActiveNav('/#products')} className={activeNav === '/#products' ? 'active' : ''} smooth={true} >
      <div className={css.textsvg} ref={documentRef}
      >
       <li className={css.pdt}  >Product</li> 
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#240;&#159;&#166;&#134; icon &#34;arrow ios downward&#34;">
<path id="Vector" d="M11.9998 16C11.7661 16.0005 11.5397 15.9191 11.3598 15.77L5.35979 10.77C5.15557 10.6003 5.02715 10.3564 5.00277 10.092C4.97839 9.82753 5.06005 9.56425 5.22979 9.36003C5.39953 9.15581 5.64344 9.02739 5.90786 9.00301C6.17229 8.97863 6.43557 9.06029 6.63979 9.23003L11.9998 13.71L17.3598 9.39003C17.4621 9.30697 17.5798 9.24493 17.7061 9.2075C17.8324 9.17007 17.9649 9.15798 18.096 9.17192C18.227 9.18586 18.354 9.22555 18.4696 9.28873C18.5853 9.3519 18.6873 9.4373 18.7698 9.54003C18.8614 9.64285 18.9307 9.76348 18.9735 9.89435C19.0163 10.0252 19.0316 10.1635 19.0185 10.3006C19.0053 10.4377 18.964 10.5705 18.8971 10.6909C18.8303 10.8112 18.7392 10.9165 18.6298 11L12.6298 15.83C12.4447 15.9555 12.2229 16.0154 11.9998 16Z" fill="#A3A3A3"/>
</g>
</svg>
</div>
       </HashLink>   
      
     

       </div>
          
          {down &&  
            <ul  onClick={()=>setDown(false)} className={css.productsublist} >
        <div className={css.productsublistdiv} onClick={() => window.scrollTo(0, 0)}>   <HashLink onClick={()=>setOpened(false)} to="/tcinema/"><li onClick={()=>setDown(false)}>Tributor for Cinemas</li></HashLink>   </div>
        <div className={css.productsublistdiv} onClick={() => window.scrollTo(0, 0)}>   <HashLink onClick={()=>setOpened(false)} to="/tmedia/"><li onClick={()=>setDown(false)}>Tributor for Media</li></HashLink>    </div>
        <div className={css.productsublistdiv} onClick={() => window.scrollTo(0, 0)}>  <HashLink onClick={()=>setOpened(false)} to="/prekets/"><li onClick={()=>setDown(false)}>Prekets</li></HashLink>   </div>
       
          </ul> 
          }
          <HashLink  onClick={() => setActiveNav('/#about')} className={activeNav === '/#about' ? 'active' : ''} smooth={true} to="/#about">  <li onClick={()=>setOpened(false)}>About</li></HashLink>  
          <HashLink onClick={() => setActiveNav('/#contact')} className={activeNav === '/#contact' ? 'active' : ''} smooth={true} to="/#contact">  <li onClick={()=>setOpened(false)}>Contact</li></HashLink>  
       
        </ul> </div>) } 
        <div>
 
       </div>
       </div>
       </div>

    </div> 
  )
}

export default Header