import React from "react";
import style from "./Team.module.css";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Member from "../../Components/Member";
import team from "./team.js";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={`${style.contactwrapper}`}>
          <div className={`${style.left} `}>
            <div className={`${style.imageclass}`}>
              {/* <Member/> */}
              <Member member={team.final_year[0]} />

              {/* <img src="images/Rectange27.png" alt="" className={`img-fluid ${style.members}`} /> */}
              <hr id={`${style.underline1}`} />
            </div>
          </div>
          <div className={`${style.details} `}>
              <div className={`${style.middle}  `}>
                <div className={`${style.name} `}>
                  <span>
                    <h2 id={style.team_member}>Mohd. Uvesh</h2>
                  </span>
                  <span id={style.post}>SECRETARY</span>
                </div>
                <div className={`${style.discoverteam} `}>
                  <span id={style.discover}>
                    D I S C O V E R
                    <hr id="underline2" />
                  </span>
                  <div className={style.ourTeam}>OUR TEAM</div>
                </div>
              </div>
              
          </div>
        
      </div>

      {/* {team.final_year.map((member, i) => {
        return (
          <>
            <Member key={i} member={member} />
          </>
        );
      })} */}

      <Footer />
    </>
  );
}
