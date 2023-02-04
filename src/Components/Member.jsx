import React from "react";
import IconGitHub from "../Assets/Media/Icons/github";
import IconLinkedin from "../Assets/Media/Icons/linkedin";
import styles from "./Member.module.css";

export default function Member({member}) {
  return (
    <>
      <div className={styles.member}>
          <div className={styles.image}>
            <img
              src="https://source.unsplash.com/random"
              className={`img-fluid ${styles.img}`}
            />
          </div>
          <div className={styles.inner_about}>
            <div className={styles.about}>
              <div className={styles.name}>{member.name}</div>
              <div className={styles.desc}>{member.bio}</div>
            </div>
            <div style={{height:"28px"}}></div>
          </div>
      </div>
            <div className={styles.social}>
              <div
                className={styles.social_link}
                onClick={() => {
                  window.open(member.linkedin, "_blank")
                }}
              >
                <IconLinkedin/>
              </div>
              <div
                className={styles.social_link}
                onClick={() => {
                  window.open(member.github, "_blank")

                }}
              >
                <IconGitHub />
              </div>
            </div>
    </>
  );
}
