import React, { Suspense, lazy } from 'react';
import StarField from './components/StarField.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';

// Componentes con Lazy Loading (carga diferida para mejorar LCP)
const Services = lazy(() => import('./components/Services.jsx'));
const Process = lazy(() => import('./components/Process.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const Gallery = lazy(() => import('./components/Gallery.jsx'));
const SocialMedia = lazy(() => import('./components/SocialMedia.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

// Placeholder visual mientras cargan las secciones pesadas
const LoadingFallback = () => (
  <div style={{ padding: '50px 0', textAlign: 'center', opacity: 0.5 }}>
    <p>Iniciando módulos de la nave...</p>
  </div>
);

function App() {
  return (
    <div className="osn-app-container">
      <StarField />
      <Navbar />
      <main id="main-content">
        <Hero id="inicio" />
        <AboutUs id="nosotros" />
        
        <Suspense fallback={<LoadingFallback />}>
          <Services id="servicios" />
          <Process id="proceso" />
          <Gallery id="portafolio" />
          <Testimonials id="testimonios" />
          <SocialMedia id="redes" />
          <Contact id="contacto" />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
