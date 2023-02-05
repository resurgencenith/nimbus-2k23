import React from "react";
import style from "./SplashAnimation.module.css";
import anim from '../Assets/Animations/anim.mp4'
import { useEffect } from "react";
import config from "../config";

export default function SplashAnimation() {
    useEffect(()=>{
        let video = document.getElementById("anim_splash")
        video.load()
        video.addEventListener('loadeddata', function() {
            setTimeout(() => {
              document.getElementById("splash_root").classList.add(style.o0);
              setTimeout(()=>{
                document.getElementById("splash_root").classList.add(style.dNone);

              },200)
            }, config.splash_animation_time)
            
         }, false);
    })
  return (
    <>
    <div className={style.main_root_splash} id="splash_root">
      <div className={style.logo_root_splash}>
        <video width="100%" height="100%" autoPlay={true} loop muted id="anim_splash">  
          <source src={anim} type="video/mp4" />
        </video>
      </div>
    </div>
    </>
  );
}