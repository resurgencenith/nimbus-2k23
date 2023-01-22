import React from 'react'
import style from './Footer.module.css'
import config from '../config';
import IconGitHub from '../Assets/Media/Icons/github';
import InstagramIcon from '../Assets/Media/Icons/instagram';
import LInkedInIcon from '../Assets/Media/Icons/linkedin';
import TwitterIcon from '../Assets/Media/Icons/twitter';


export default function Footer() {
  return (
    <div className={style.verticalNavbar} >
      
        <div className={style.iconVerticalNavbar} onClick={()=> window.open(config.github, "_blank")}>
          <IconGitHub />
        </div>
        <div className={style.iconVerticalNavbar}  onClick={()=> window.open(config.instagram, "_blank")}>
          <InstagramIcon />
        </div>
        <div className={style.iconVerticalNavbar}  onClick={()=> window.open(config.linkedin, "_blank")}>
          <LInkedInIcon />
        </div>
        <div className={style.iconVerticalNavbar}  onClick={()=> window.open(config.twitter, "_blank")}>
          <TwitterIcon />
        </div>
        
        
      
    </div>
  );
}
