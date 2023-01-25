import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import styles from './Home.module.css'
import Characters from '../../Characters';
import {Link} from 'react-router-dom'

export default function Home() {
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
                <div className={styles.welcomeText}>
                    <div className={styles.clubName}>RESURGENCE</div>
                    <div className={styles.clubInfo}>E-Sports Club</div>
                    <Link to='/events' className={styles.playButton}>PLAY <div className={styles.bottomBorder}></div></Link>
                </div>
                <img src={Characters[currentCharacter]} alt="character" className={styles.character} />
            </div>
        </div>
    )
}