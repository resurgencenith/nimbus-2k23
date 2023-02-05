import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import styles from "./Home.module.css";
import "./Home.css";
import chars from "../../Characters";
import { Link } from "react-router-dom";
import VanillaTilt from "../../lib/vanilla-tilt.js";
import rect from "../../Assets/Media/rect.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import config from "../../config";



export default function Home() {
  const [state, setState] = useState({
    currentCharacter: 0,
    nextCharacter: 1,
    counter:0,
  });
  console.log(state)
  useEffect(() => {
    VanillaTilt.init(document.getElementById("img1"), {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
      scale:1.15,
      reset:false,

    });
    VanillaTilt.init(document.getElementById("img2"), {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
      scale:1.15,
      reset:false,
      
    });
  });


  useEffect(() => {
    let curr = document.getElementById("img1");
    let next = document.getElementById("img2");
    setTimeout(() => {
      let i = state.currentCharacter;
      let j = state.nextCharacter;

      
      if(i===chars.length-1){
        j=0
      }
      if(i>chars.length-1){
        i=0
      }

      
      curr.classList.add("out")
      next.classList.remove("d-none")
      next.classList.add("in")
      next.src = chars[j];
      setTimeout(()=>{
        next.classList.remove("in")
        curr.classList.add("d-none")
        curr.classList.remove("out")
        curr.src = chars[i];

        //swap the src
        curr.src=next.src
        curr.classList.remove("d-none")
        next.classList.add("d-none")
        

        setState({
          currentCharacter: i+1,
          nextCharacter: j+1,
          counter:state.counter+1
        })

      },500)

      if(state.counter%2===0){

      }


    }, config.splash_animation_time + config.char_change_time)

  }, [state.currentCharacter]);


  return (
    <div className={styles.homepage}>
      <Navbar />

      <div className={styles.rect}>
        <img className={styles.rectImg} src={rect} />
      </div>
      <div className={styles.welcome}>
        <div className={styles.welcomeText} id="welcomeText">
          <div className={styles.clubName}>RESURGENCE</div>
          <div className={styles.clubInfo}>E-Sports Club</div>
          <Link to="/events" className={styles.playButton}>
            PLAY <div className={styles.bottomBorder}></div>
          </Link>
        </div>
        {/* <Carousel key={0} autoPlay={true} infiniteLoop={true} width="100%" height="50%">
          <div>
            <img alt="abhay" src={char2} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img alt="" src="https://source.unsplash.com/random" />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel> */}
        <div className={styles.characterContainer} id="charr">
          <img
            className={`${styles.character}`}
            id="img1"
            src={chars[0]}
          />
          <img
            className={`${styles.character} d-none`}
            id="img2"
          />
        </div>
      </div>
    </div>
  );
}
