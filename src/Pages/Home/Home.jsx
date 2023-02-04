import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import styles from "./Home.module.css";
import Characters from "../../Characters";
import { Link } from "react-router-dom";
import VanillaTilt from "../../lib/vanilla-tilt.js";
import rect from "../../Assets/Media/rect.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css";

export default function Home() {
  const [currentCharacter, setCharacter] = useState(0);
  useEffect(() => {
    VanillaTilt.init(document.getElementById("char"), {
      max: 15,
      speed: 200,
      glare: true,
      "max-glare": 1,
    });
  });
  useEffect(() => {
    let char1 = document.getElementById("char1");
    let char2 = document.getElementById("char2");
    let char3 = document.getElementById("char3");

    let imgs = [char1, char2, char3];

    setTimeout(() => {
      setTimeout(() => {
        for (let i = 0; i < Characters.length; i++) {
          if (i === currentCharacter) {
            imgs[i].classList.add("in");
            imgs[i].classList.remove("out");
            console.log(imgs[i] )
        } else {
            imgs[i].classList.remove("in");
            imgs[i].classList.add("out");
          }
        }
      }, 2000);
      for (let i = 0; i < Characters.length; i++) {
        if (i === currentCharacter) {
          imgs[i].style.opacity = 1;
        } else {
          imgs[i].style.opacity = 0;
        }
      }
      if (currentCharacter === Characters.length - 1) {
        setCharacter(0);
      } else {
        setCharacter(currentCharacter + 1);
      }
    }, 4000); 
  }, [currentCharacter]);
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
            src={Characters[currentCharacter]}
            alt="character"
            className={`${styles.character} charr`}
            id="char1"
          />
          <img
            src={Characters[currentCharacter]}
            alt="character"
            className={`${styles.character} charr`}
            id="char2"
          />
          <img
            src={Characters[currentCharacter]}
            alt="character"
            className={`${styles.character} charr`}
            id="char3"
          />
        </div>
      </div>
    </div>
  );
}
