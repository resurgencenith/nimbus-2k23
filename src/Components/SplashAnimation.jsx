import React from 'react'
import style from './SplashAnimation.module.css'

export default function SplashAnimation() {
    setTimeout(() => {
          document.getElementById("splash_root").classList.add(style.dNone)
      }, 3000);
    return (
        <div className={style.main_root_splash} id="splash_root">
          <div className={style.logo_root_splash}>
            
            
          </div>
        </div>
      );
}
