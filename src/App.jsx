import React, { useEffect, useState } from 'react';
import { checkFixLang } from "./assets/helpers/lang";
import i18n from "./assets/helpers/i18n.js";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
// import RouterHandler from './router/RouterHandler.jsx';
import logoAnimation from "./assets/logo.mp4";
// import logoAnimation from "./assets/logo.gif";
// import logoAnimation from "./assets/logo.json";
// import Lottie from "lottie-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home/Home.jsx';

function App() {
  const [lang, setLang] = useState(i18n.language);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkFixLang(lang);
    setLang(i18n.language);
  }, [lang]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

    setTimeout(() => {
      setLoading(false);
    }, 10400);

    return () => {
      AOS.refresh();
    }
  }, []);

  // <Lottie animationData={logoAnimation} loop={false} className='animated-logo' />
  // <img className='animated-logo' src={logoAnimation} alt='logo' />

  return loading ? <video autoPlay muted className='animated-logo'><source src={logoAnimation} type="video/mp4" /></video> :
    <div className="App">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
}

export default App;
