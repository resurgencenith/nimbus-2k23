import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import styles from "./Events.module.css";
import events from "./events";
import { Link } from "react-router-dom";

export default function Events() {
  let [event, setEvent] = useState(events[0]);

  
  return (
    <div className={styles.eventsPage}>
      <div className={styles.backDiv}>
        <img
          src={event.background}
          alt="BackgroundImage"
          style={{ height: "100vh", minWidth: "100%", filter: "blur(10px)" }}
        />
      </div>
      <div className={styles.mainDiv}>
        <div className={styles.innerDiv}>
          <Navbar />
          <div className={styles.eventInfo}>
            <div className={styles.heading}>TOURNAMENTS</div>
            <div className={styles.name}>{event?.name || ""}</div>
            <div className={styles.description}>
              {event?.description || ""}
            </div>
            <div className={styles.button}>
                <Link
                className={styles.button_link}
                to="/events/tournament"
                state={event}
                >
                MORE
                </Link>
            </div>
          </div>
          <div className={styles.events}>
            
              {events.map((eventL, i) => (
                <div
                  className={styles.event}
                  key={i}
                  style={{
                    transform:
                      eventL?.name === event.name
                        ? "scale(1.09)"
                        : "scale(1)",
                  }}
                  onClick={() => {
                    setEvent(eventL);
                  }}
                >
                  <img
                    src={eventL.poster}
                    alt="poster"
                    style={{ width: "100%",height:"50%" }}
                  />
                </div>
              ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
