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
        <Navbar />
        <div className={styles.innerDiv}>
          <div className={styles.eventInfo}>
            <div className={styles.heading}>ONGOING TOURNAMENTS</div>
            <div className={styles.data}>
              <div className={styles.dataWithoutVideo}>
                <div className={styles.name}>{event?.name || ""}</div>
                <div className={styles.description}>
                  {event?.description || ""}
                </div>
              </div>
              {/* <iframe
                width="560"
                height="210"
                src={event?.video}
                frameborder="0"
                style={{marginTop:"2%"}}
                allowFullScreen
              ></iframe> */}
              {/* <div className={styles.videoDiv}>

              </div> */}
            </div>
          </div>
          <div className={styles.events}>
            {events.map((eventL, i) => (
              <Link
                className={styles.event}
                key={i}
                to="/events/tournament"
                state={eventL}
              >
                <img
                  src={eventL.poster}
                  alt="poster"
                  style={{ width: "100%", height: "90%" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
