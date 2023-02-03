import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Loader from "./Pages/Loader/Loader";
import styles from "./App.module.css";
import background from "./Assets/Media/background.jpg";
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
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.mainDiv}>
      <SplashAnimation />
      {/* <div className={styles.backgroundDiv}> */}
        {/* <iframe
          src="https://www.youtube.com/embed/W7axVZUeLCs?autoplay=1&mute=1&showinfo=0&controls=0&loop=1;&rel=0&fs=1&color=white&iv_load_policy=3&modestbranding=1&playlist=W7axVZUeLCs"
          className={styles.backgroundVideo}
          // {...window.innerHeight>window.innerWidth?<>
          //   width={window.innerWidth}
          // </> : <>frameborder="0"</>}
          width={window.innerWidth}
          height={window.innerHeight}
          allow="autoplay"
          muted
          autoPlay
          loop 
          playsinline
          allowFullScreen
        ></iframe> */}
        <video autoPlay loop muted id={styles.bg_video}>  
          <source src={bg} type="video/mp4" />
        </video>
        
        {/* <img src={background} alt='Background' className={styles.background} /> */}
      {/* </div> */}
      <div className={styles.backgroundFilm}>
        {loading ? (
          <Loader setLoading={setLoading} />
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default App;
