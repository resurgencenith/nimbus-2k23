import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Loader from "./Pages/Loader/Loader";
import styles from './App.module.css';
import background from './Assets/Media/background.jpg'
import { Route, Routes } from "react-router-dom"
import About from "./Pages/About/About";
import Contact from "./Pages/ContactUs/Contact.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Events from "./Pages/Events/Events.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TournamentInformation from "./Pages/Events/TounamentInformation";



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={styles.mainDiv}>
      <div className={styles.backgroundDiv}>
        <img src={background} alt='Background' className={styles.background} />
      </div>
      <div className={styles.backgroundFilm}>
        {loading ? <Loader setLoading={setLoading} /> :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/tournament" element={<TournamentInformation />} />
          </Routes>
        }
      </div>
    </div >
  );
}

export default App;
