import React from "react";
import style from './Contact.module.css'
import Button from 'react-bootstrap/Button';

export default function Contact(){
return(
            <div className={`${style.contactwrapper} d-flex`}>
              <div className={`${style.contactus} container-fluid row`}>
                <div className={`${style.left} d-flex col-sm-5`}>
                  <div className="fluid-container imageclass">
                    <img src="" alt="" className={`img-fluid ${style.members}`} />
                    <hr id="underline1" />
                  </div>
                  {/* <div class="container" id="underline1">
      
                      </div> */}
                </div>
                <div className={`${style.details} d-flex col-sm-7`}>
                  <div className={`${style.main} d-flex`}>
                    <div className={`${style.middle}   d-flex`}>
                      <div className={`${style.name} d-flex text-white`}>
                        <span>
                          <h2 id="team-member">SIDHARTH</h2>
                        </span>
                        <span id="post">SECRETARY</span>
                      </div>
                      <div className={`${style.discoverteam} d-flex text-white`}>
                        <span id="discover">D I S C O V E R
                          <hr id="underline2" />
                        </span>
                        {/* <div class="container" id="underline2"></div> */}
                        <span id="ourteam">OUR TEAM</span>
                      </div>
                    </div>
                    <div className={`${style.buttonwrapper} d-flex`}>
                      <button className="btn btn-default next">
                        <img src="/images/next.png" alt="" className={`${style.nextbtn}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.bottom} container-fluid d-flex row`}>
                <div className={`${style.handles} d-flex col-sm-5`}>
                  <div className={`${style.instagram}`}>
                    <a href="#" id="insta">Instagram</a>
                  </div>
                  <div className={`${style.feedback}`}>
                    <a href="#" id="feed">Feedback</a>
                  </div>
                  <div className={`${style.twitter}`}>
                    <a href="#" id="twitt">Twitter</a>
                  </div>
                </div>
                <div className={`${style.contactform} d-flex col-sm-7`}>
                  <div className={`${style.message} d-flex`}>
                    <input type="text"  id="msg" placeholder="Message" />
                  </div>
                  <div className={`${style.email} d-flex`}>
                    <input type="email"  id="mail" placeholder="Email" />
                    <button type="submit" id="submitted">Send</button>
                  </div>
                </div>
              </div>
            </div>
)
}





