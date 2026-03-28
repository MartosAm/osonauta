import { useEffect, useState } from 'react';
import logoOsonauta from '../assets/logos/logo.png';
import portadaImg from '../assets/logos/portada.jpg';
import portadaMobileImg from '../assets/logos/portada_mobile.png';

const Hero = ({ id }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id={id} 
      className="osn-hero min-h-screen flex flex-col items-center justify-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Elementos Cósmicos */}
      <div className="mini-star w-1 h-1 top-[15%] left-[20%]" style={{ animationDelay: '0s' }}></div>
      <div className="mini-star w-2 h-2 top-[25%] right-[15%]" style={{ animationDelay: '1s' }}></div>
      <div className="mini-star w-1.5 h-1.5 bottom-[20%] left-[10%]" style={{ animationDelay: '2s' }}></div>
      <div className="shooting-star-shared top-[10%] right-[30%]"></div>
      <div className="shooting-star-shared top-[40%] right-[10%]" style={{ animationDelay: '3s' }}></div>

      {/* Fondo para Desktop */}
      <div 
        className="hidden md:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${portadaImg})` }}
        aria-hidden="true"
      ></div>

      {/* Fondo para Móviles */}
      <div 
        className="block md:hidden absolute inset-0 z-0 bg-cover bg-[center_top_20%] bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${portadaMobileImg})` }}
        aria-hidden="true"
      ></div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0A1A]/70 via-[#0A0A1A]/60 to-[#0A0A1A] pointer-events-none"></div>

      <div className="osn-hero__content relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-8">
        
        <div className={`osn-hero__logo-wrapper mb-8 rounded-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="osn-hero__logo-circle relative w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center" 
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
             <div 
               className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(123,47,190,0.6)] overflow-hidden"
               style={{
                 background: 'radial-gradient(circle at 30% 30%, #4A0E8F 0%, #12122A 70%)',
                 border: '2px solid rgba(123,47,190,0.4)',
                 animation: 'glowPulse 3s infinite'
               }}
             >
                <div className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full bg-[rgba(10,10,26,0.5)] top-[20%] left-[20%] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"></div>
                <div className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full bg-[rgba(10,10,26,0.4)] top-[50%] left-[70%] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.5)]"></div>
                <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full bg-[rgba(10,10,26,0.3)] bottom-[15%] left-[30%] shadow-[inset_3px_3px_6px_rgba(0,0,0,0.6)]"></div>
             </div>

             <img 
               src={logoOsonauta} 
               alt="Logo Osonauta - Oso Astronauta" 
               className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
             />
          </div>
        </div>

        <h1 
          className="osn-hero__title text-display font-display text-[var(--color-text-primary)] mb-6 tracking-tight drop-shadow-lg"
          style={{ 
             opacity: 0, 
             animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.1s forwards' : 'none' 
          }}
        >
          Osonauta &mdash; Cueva Creativa
        </h1>

        <p 
          className="osn-hero__subtitle text-body-lg md:text-h3 font-body font-normal text-[var(--color-text-muted)] mb-10 max-w-2xl leading-relaxed drop-shadow-md"
          style={{ 
             opacity: 0, 
             animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.2s forwards' : 'none' 
          }}
        >
          Agencia de marketing. Impulsamos tu marca al máximo nivel con estrategia y creatividad. 
          <strong className="text-[var(--color-text-primary)] font-semibold"> Tu negocio en una nueva órbita. 🚀</strong>
        </p>

        <div 
          className="osn-hero__actions flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
          style={{ 
             opacity: 0, 
             animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.3s forwards' : 'none' 
          }}
        >
           <a 
             href="#portafolio" 
             className="osn-btn osn-btn--primary relative overflow-hidden px-8 py-4 rounded-full bg-[var(--color-primary)] text-[var(--color-text-primary)] text-lg font-semibold transition-colors duration-300 hover:bg-[var(--color-primary-dark)] focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none flex items-center justify-center group w-full sm:w-auto shadow-[0_0_15px_rgba(123,47,190,0.5)]"
           >
             <span 
               className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.25)] to-transparent opacity-0 group-hover:opacity-100 w-[200%] h-full pointer-events-none" 
               style={{ animation: 'shimmer 2s infinite linear' }}
             ></span>
             <span className="relative z-10">Ver nuestro trabajo</span>
           </a>

           <a 
             href="#contacto" 
             className="osn-btn osn-btn--outline px-8 py-4 rounded-full border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none w-full sm:w-auto"
             style={{ textShadow: '0 0 10px rgba(0,180,216,0.3)' }}
           >
             Hablemos
           </a>
        </div>
      </div>

      <div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
        style={{ 
           opacity: 0, 
           animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.8s forwards' : 'none' 
        }}
      >
         <span className="text-[var(--color-text-muted)] text-[0.75rem] font-display uppercase tracking-[0.2em]">Descubre</span>
         <div className="w-[2px] h-12 bg-gradient-to-b from-[var(--color-primary)] to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
