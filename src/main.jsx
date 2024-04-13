import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css";
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Services from './Components/services/Services';
import Work from './Components/work/Work';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollUp from './Components/scrollup/ScrollUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </React.StrictMode>,
)
