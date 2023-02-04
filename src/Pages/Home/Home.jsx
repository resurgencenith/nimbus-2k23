import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import styles from './Home.module.css'
import Characters from '../../Characters';
import {Link} from 'react-router-dom'
// import VanillaTilt from '../../lib/vanilla-tilt.js';
import VanillaTilt from 'vanilla-tilt';

export default function Home() {
    
    VanillaTilt.init(document.getElementById("character"),{
        max:25,
        speed:400
    })
    VanillaTilt.init(document.getElementById("welcomeText"),{
        max:5,
        speed:40
    })
    const [currentCharacter, setCharacter] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            let i = currentCharacter;
            if (i === (Characters.length - 1)) i = 0;
            else i++;
            setCharacter(i);
        }, 2000)
    }, [currentCharacter])
    return (
        <div className={styles.homepage}>
            <Navbar />
            <div className={styles.welcome}>
                <div className={styles.welcomeText} id="welcomeText">
                    <div className={styles.clubName}>RESURGENCE</div>
                    <div className={styles.clubInfo}>E-Sports Club</div>
                    <Link to='/events' className={styles.playButton}>PLAY <div className={styles.bottomBorder}></div></Link>
                </div>
                <img src={Characters[currentCharacter]} alt="character" id="character" className={styles.character} />
            </div>
        </div>
    )
}