import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Events from "./Pages/Events/Events.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TournamentInformation from "./Pages/Events/TounamentInformation";
import SplashAnimation from "./Components/SplashAnimation";
import bg from "./Assets/Animations/bg.mp4";


function App() {
  useEffect(() => {
    AOS.init();
    let bgVideo = document.getElementById("bg_video")
    window.addEventListener("resize",()=>{  
      

      if(window.innerWidth/window.innerHeight<1.85){
        bgVideo.style.height = "100vh"
        bgVideo.style.width = "auto"
      }else{
        bgVideo.style.marginRight = "auto"
        bgVideo.style.width = "100vw" 
        bgVideo.style.height = "auto"
        bgVideo.style.marginLeft = "auto"

      }
    }
    ,true)
  }, []);

  return (
    <div className={styles.mainDiv}>
      <SplashAnimation />
      <div className={styles.backgroundDiv} id="backgroundDiv">
        
        <video autoPlay loop muted className={styles.bg_video} id="bg_video">  
          <source src={bg} type="video/mp4" id="bg_video_source"/>
        </video>
        
      </div>
      <div className={styles.backgroundFilm}>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route
              path="/events/tournament"
              element={<TournamentInformation />}
            />
          </Routes>
        
      </div>
    </div>
  );
}

export default App;
