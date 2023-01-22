import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar';
import styles from './Events.module.css';
import events from './events';
import { Link } from 'react-router-dom';

export default function Events() {
    const [backgroundImage, setBgImage] = useState(null);
    const [selectedEvent, setEvent] = useState(null);

    useEffect(() => {
        if (backgroundImage === null) {
            setEvent(events[0]);
        }
    }, [events]);
    return (
        <div className={styles.eventsPage}>
            <div className={styles.backDiv}>
                <img src={`https://drive.google.com/uc?export=view&id=${selectedEvent?.background}`} alt="BackgroundImage" style={{ height: "100vh", minWidth: "100%", filter: 'blur(10px)' }} />
            </div>
            <div className={styles.mainDiv}>
                <div className={styles.innerDiv}>
                    <Navbar />
                    <div className={styles.eventInfo}>
                        <div className={styles.heading}>TOURNAMENTS</div>
                        <div className={styles.name}>{selectedEvent?.name || ""}</div>
                        <div className={styles.description}>{selectedEvent?.description || ""}</div>
                        <Link className={styles.button} to='/events/tournament' state={selectedEvent}   >MORE</Link>
                    </div>
                    <div className={styles.events}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-start",
                        }}>
                            {
                                events.map((event, i) =>
                                    <div className={styles.event} key={i} style={{ transform: selectedEvent?.name === event.name ? "scale(1.2)" : "scale(1)" }} onClick={() => { setEvent(event); setBgImage(event.background) }}>
                                        <img src={`https://drive.google.com/uc?export=view&id=${event.poster}`} alt='poster' style={{ width: '100%' }} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
