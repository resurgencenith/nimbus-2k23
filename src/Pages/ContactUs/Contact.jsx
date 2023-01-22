import React from "react";
import style from './Contact.module.css'
import Button from 'react-bootstrap/Button';
import Navbar from "../../Components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className={`${style.contactwrapper} d-flex`}>
        <div className={`${style.contactus} container-fluid row`}>
          <div className={`${style.left} d-flex col-sm-5`}>
            <div className={`fluid-container ${style.imageclass}`}>
              <img src="images/Rectange27.png" alt="" className={`img-fluid ${style.members}`} />
              <hr id={`${style.underline1}`} />
            </div>
            {/* <div class="container" id="underline1">
      
                      </div> */}
          </div>
          <div className={`${style.details} d-flex col-sm-7`}>
            <div className={`${style.main} d-flex`}>
              <div className={`${style.middle}   d-flex`}>
                <div className={`${style.name} d-flex text-white`}>
                  <span>
                    <h2 id={style.team_member}>SIDHARTH</h2>
                  </span>
                  <span id={style.post}>SECRETARY</span>
                </div>
                <div className={`${style.discoverteam} d-flex text-white`}>
                  <span id={style.discover}>D I S C O V E R
                    <hr id="underline2" />
                  </span>
                  {/* <div class="container" id="underline2"></div> */}
                  <span id="ourteam">OUR TEAM</span>
                </div>
              </div>
              <div className={`${style.buttonwrapper} d-flex`}>
                <button className="btn btn-default next">
                  <img src="" alt="" className={`${style.nextbtn}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.bottom} container-fluid d-flex row`}>
          <div className={`${style.handles} d-flex col-sm-5`}>
            <div className={`${style.instagram}`}>
              <a href="#" id={style.insta}>Instagram</a>
            </div>
            <div className={`${style.feedback}`}>
              <a href="#" id={style.feed}>Feedback</a>
            </div>
            <div className={`${style.twitter}`}>
              <a href="#" id={style.twitt}>Twitter</a>
            </div>
          </div>
          <div className={`${style.contactform} d-flex col-sm-7`}>
            <div className={`${style.message} d-flex`}>
              <input type="text" id={style.msg} placeholder="Message" />
            </div>
            <div className={`${style.email} d-flex`}>
              <input type="email" id={style.mail} placeholder="Email" />
              <button type="submit" id={style.submitted}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}