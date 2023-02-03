import React from "react";
import IconGitHub from "../Assets/Media/Icons/github";
import IconLinkedin from "../Assets/Media/Icons/linkedin";
import styles from "./Member.module.css";

export default function Member() {
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
              <div className={styles.name}>abhay</div>
              <div className={styles.desc}>richest</div>
            </div>
            <div className={styles.social}>
              <div
                className={styles.social_link}
                onClick={() => {
                  window.open("", "_blank")
                }}
              >
                <IconLinkedin/>
              </div>
              <div
                className={styles.social_link}
                onClick={() => {
                  window.open("", "_blank")

                }}
              >
                <IconGitHub />
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
