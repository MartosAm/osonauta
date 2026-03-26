import React, { Suspense } from 'react';
import StarField from './components/StarField.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Portfolio from './components/Portfolio.jsx';
import Clients from './components/Clients.jsx';
import Testimonials from './components/Testimonials.jsx';
import Gallery from './components/Gallery.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="osn-app-container">
      <StarField />
      <Navbar />
      <main id="main-content">
        <Hero id="inicio" />
        <AboutUs id="nosotros" />
        <Services id="servicios" />
        <Process id="proceso" />
        <Portfolio id="portafolio" />
        <Clients id="clientes" />
        <Testimonials id="testimonios" />
        <Gallery id="galeria" />
        <SocialMedia id="redes" />
        <Contact id="contacto" />
      </main>
    </div>
  );
}

export default App;
