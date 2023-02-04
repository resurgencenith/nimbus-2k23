import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../Assets/Media/logo.png'
import { Link, useLocation } from "react-router-dom"
import VanillaTilt from '../lib/vanilla-tilt';

export default function Navbar() {
    const location = useLocation();
    useEffect(() => {
        VanillaTilt.init(document.getElementById("logo"),{
            max:25,
            speed:40000
        })
        setCurrentRoute(location.pathname);
    }, [location])
    const [currentRoute, setCurrentRoute] = useState('/')
    const [styleBar1, setStyleBar1] = useState({});
    const [styleBar2, setStyleBar2] = useState({});
    const [styleBar3, setStyleBar3] = useState({});
    const [styleNavbar, setStyleNavbar] = useState({});
    const [bars, setBars] = useState({});
    const [opened, setOpened] = useState(false);

    const openAnimate = () => {
        setOpened(true);
        setStyleNavbar({
            width: "100%"
        })
        setStyleBar2({
            width: "75%",
            margin: "5px auto"
        });
        setStyleBar3({
            width: "50%",
            margin: "5px auto"
        });
        setTimeout(() => {
            setStyleBar1({
                margin: "7px auto",
                width: "50%"
            });
            setStyleBar2({
                margin: "7px auto",
                width: "50%"
            });
            setStyleBar3({
                display: "none"
            });
            setBars({
                transform: "rotate(90deg) translateX(-50%)"
            })
        }, 125);
        setTimeout(() => {
            setStyleBar1({
                transform: "rotate(45deg)",
                margin: 0
            });
            setStyleBar2({
                transform: "rotate(-45deg)",
                margin: 0
            });
            setBars({
                transform: "rotate(90deg) translateX(0%)"
            })
        }, 125);
    }

    const closeAnimate = () => {
        setOpened(false);
        setStyleNavbar({
            width: "0%"
        })
        setStyleBar1({
            transform: "rotate(0deg)",
            margin: "5px 0"
        });
        setStyleBar2({
            transform: "rotate(0deg)",
            margin: "5px 0"
        });
        setBars({
            transform: "rotate(90deg)"
        });
        setTimeout(() => {
            setBars({
                transform: "rotate(0deg) translateX(-50%)"
            });
            setStyleBar3({
                display: "block"
            });
        }, 125)
    }

    const openNavbar = () => {
        if (opened) closeAnimate();
        else openAnimate();
    }
    return (
        <div className={styles.navbar}>
            <Link to='/' className={styles.logo_root} id="logo_root">

                <img src={logo} alt='logo' className={styles.logo} id="logo" />
            </Link>
            <div className={styles.navs} style={styleNavbar}>
                <Link to='/' style={{textDecoration:"none"}}>
                    <div className={styles.nav}>Home <div className={styles.border} style={{ backgroundColor: currentRoute === '/' ? 'white' : 'transparent' }}></div></div>
                </Link>
                <Link to='/events' style={{textDecoration:"none"}}><div className={styles.nav}>Events <div className={styles.border} style={{ backgroundColor: currentRoute === '/events'|| currentRoute==='/events/tournament' ? 'white' : 'transparent' }}></div></div></Link>
                <Link to='/team' style={{textDecoration:"none"}}><div className={styles.nav}>Team <div className={styles.border} style={{ backgroundColor: currentRoute === '/team' ? 'white' : 'transparent' }}></div></div></Link>
                <Link to='/about'  style={{textDecoration:"none"}}><div className={styles.nav}>About <div className={styles.border} style={{ backgroundColor: currentRoute === '/about' ? 'white' : 'transparent' }}></div></div></Link>
            </div>
            <div className={styles.bars} style={bars} onClick={() => openNavbar()}>
                <div className={styles.bar1} style={styleBar1}></div>
                <div className={styles.bar2} style={styleBar2}></div>
                <div className={styles.bar3} style={styleBar3}></div>
            </div>
        </div>
    )
}
