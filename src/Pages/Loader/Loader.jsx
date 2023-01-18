import React, { useEffect, useState } from 'react'
import styles from './Loader.module.css'
import background from '../../Assets/Media/background.jpg'
import logo from '../../Assets/Media/logo.png'

export default function Loader({ setLoading }) {
    const [width, setWidth] = useState('0px')
    const [top, setTop] = useState('50%')
    const [left, setLeft] = useState('50%')
    useEffect(() => {
        if (width === '0px') {
            setTimeout(() => {
                setWidth('500px');
            }, 1000)
        }
        else if (width === '500px') {
            setTimeout(() => {
                setWidth('100px');
            }, 3000)
        }
        else {
            setTimeout(() => {
                setTop('30px');
                setLeft('50px');
            }, 2000)
        }
    }, [width])

    useEffect(() => {
        if (top === '30px') {
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        }
    }, [top])
    return (
        <div className={styles.logoDiv}>
            <img src={logo} alt='logo' className={styles.logo} style={{ width: width, top: top, left: left }} />
        </div>
    )
}
