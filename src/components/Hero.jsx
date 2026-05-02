import { useEffect, useState } from 'react';
import logoOsonauta from '../assets/images/osonauta logo blanco.webp';

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

      {/* Nebulosas Estelares (Nubes cósmicas de fondo) */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#5E1F94] opacity-40 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-[float_12s_ease-in-out_infinite] mix-blend-screen overflow-hidden"></div>
      <div className="absolute top-[30%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00f2fe] opacity-20 rounded-full blur-[90px] md:blur-[120px] pointer-events-none animate-[float_18s_ease-in-out_infinite_reverse] mix-blend-screen overflow-hidden"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#FF416C] opacity-15 rounded-full blur-[120px] md:blur-[180px] pointer-events-none animate-[float_25s_ease-in-out_infinite] mix-blend-screen overflow-hidden"></div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0A1A]/70 via-[#0A0A1A]/60 to-[#0A0A1A] pointer-events-none"></div>

      <div className="osn-hero__content relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-8">
        
        <div className={`osn-hero__logo-wrapper flex items-center justify-center mb-8 rounded-full transition-opacity duration-1000 relative ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {/* Estrellas saliendo del planeta */}
          <div className="absolute inset-0 z-0" style={{ animation: 'spin 20s linear infinite' }}>
            <div className="mini-star w-2 h-2 top-[-10%] left-[20%]" style={{ animationDelay: '0.2s' }}></div>
            <div className="mini-star w-3 h-3 top-[50%] right-[-15%]" style={{ animationDelay: '0.8s' }}></div>
            <div className="mini-star w-1.5 h-1.5 bottom-[-5%] left-[30%]" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div 
            className="osn-hero__logo-circle relative w-[65vw] h-[65vw] max-w-[288px] max-h-[288px] md:max-w-[384px] md:max-h-[384px] md:w-96 md:h-96 rounded-full flex items-center justify-center mt-4" 
            style={{ animation: 'float 4s ease-in-out infinite', transformStyle: 'preserve-3d' }}
          >
             {/* Órbitas 3D envolviendo al planeta morado */}
             {/* Órbita 1 */}
             <div className="absolute top-1/2 left-1/2 w-[85vw] h-[85vw] max-w-[350px] max-h-[350px] md:max-w-[450px] md:max-h-[450px] md:w-[450px] md:h-[450px]" style={{ transform: 'translate(-50%, -50%) rotateX(65deg) rotateY(-15deg)', transformStyle: 'preserve-3d' }}>
               <div className="w-full h-full rounded-full border-[2px] border-[rgba(255,255,255,0.15)] animate-[spin_15s_linear_infinite] relative" style={{ transformStyle: 'preserve-3d' }}>
                 {/* Planeta orbitando en la línea */}
                 <div className="absolute top-0 left-1/2 w-6 h-6 bg-gradient-to-br from-[#00f2fe] to-[#4facfe] shadow-[0_0_15px_#00f2fe] rounded-full" style={{ marginTop: '-12px', marginLeft: '-12px', transform: 'rotateX(-65deg)' }} />
               </div>
             </div>
             
             {/* Órbita 2 */}
             <div className="absolute top-1/2 left-1/2 w-[100vw] h-[100vw] max-w-[450px] max-h-[450px] md:max-w-[580px] md:max-h-[580px] md:w-[580px] md:h-[580px]" style={{ transform: 'translate(-50%, -50%) rotateX(75deg) rotateY(25deg)', transformStyle: 'preserve-3d' }}>
               <div className="w-full h-full rounded-full border-[1.5px] border-[rgba(255,255,255,0.1)] animate-[spin_25s_linear_reverse_infinite] relative" style={{ transformStyle: 'preserve-3d' }}>
                 {/* Otros planetas orbitando en la línea */}
                 <div className="absolute top-1/2 left-0 w-8 h-8 bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] shadow-[0_0_20px_#FF416C] rounded-full" style={{ marginTop: '-16px', marginLeft: '-16px', transform: 'rotateX(-75deg)' }} />
                 <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-gradient-to-br from-[#F5AF19] to-[#F12711] shadow-[0_0_10px_#F5AF19] rounded-full" style={{ marginTop: '-8px', marginLeft: '-8px', transform: 'rotateX(-75deg)' }} />
               </div>
             </div>

             {/* Textura y relieve 3D del planeta principal */}
             <div 
               className="absolute inset-0 rounded-full shadow-[0_0_60px_rgba(123,47,190,0.8),inset_-15px_-15px_30px_rgba(0,0,0,0.9),inset_15px_15px_30px_rgba(255,255,255,0.3)] overflow-hidden"
               style={{
                 background: 'radial-gradient(circle at 35% 35%, #5E1F94 0%, #1A0B2E 70%)',
                 border: '1px solid rgba(123,47,190,0.5)',
                 animation: 'glowPulse 4s infinite'
               }}
             >
                {/* Cráteres y atmósfera */}
                <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full bg-[rgba(10,10,26,0.5)] top-[20%] left-[20%] shadow-[inset_3px_5px_8px_rgba(0,0,0,0.9)] filter blur-[1px]"></div>
                <div className="absolute w-6 h-6 md:w-10 md:h-10 rounded-full bg-[rgba(10,10,26,0.3)] top-[60%] left-[70%] shadow-[inset_2px_3px_5px_rgba(0,0,0,0.7)] filter blur-[1px]"></div>
                <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-[rgba(10,10,26,0.4)] bottom-[10%] left-[30%] shadow-[inset_4px_6px_10px_rgba(0,0,0,0.8)] filter blur-[2px]"></div>
                {/* Satélite en miniatura orbitando el planeta */}
                <div className="absolute top-[10%] content-[''] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}></div>
             </div>

             <img 
               src={logoOsonauta} 
               alt="Logo Osonauta - Oso Astronauta" 
               fetchPriority="high"
               className="w-[55vw] h-[55vw] max-w-[240px] max-h-[240px] md:max-w-[320px] md:max-h-[320px] md:w-80 md:h-80 object-contain relative z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]" 
               style={{ transform: 'translateZ(40px)' }}
             />
          </div>
        </div>

        <div 
          className="osn-hero__title-container flex flex-col items-center mb-6 drop-shadow-lg relative"
          style={{ 
             opacity: 0, 
             animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.1s forwards' : 'none' 
          }}
        >
          {/* Detalles espaciales en el título */}
          <div className="absolute -top-4 -right-8 w-12 h-12 border-2 border-dashed border-[var(--color-secondary)] opacity-30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-[var(--color-accent)] rounded-full shadow-[0_0_10px_var(--color-accent)] animate-[ping_2s_infinite]" />

          {/* Osonauta Estilizado - Estilo Star Wars (Simétrico y estructurado) */}
          <div className="relative z-10 w-full flex justify-center items-center py-2">
            <h1 
              className="text-center font-black uppercase m-0 p-0 tracking-widest"
              style={{ 
                fontFamily: '"Archivo Black", Impact, sans-serif',
                fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
                lineHeight: '1',
                color: 'transparent', // Fondo hueco característico de SW
                WebkitTextStroke: '2px #fff', // Contorno grueso definido
                textShadow: '0 0 20px rgba(0, 242, 254, 0.4), 0 0 40px rgba(123, 47, 190, 0.4)',
                transform: 'scaleY(1.15)', // Efecto alargado de las letras estelares épicas
              }}
            >
              OSONAUTA
            </h1>
          </div>
        </div>

        {/* Cueva Creativa separado y bajado */}
        <div 
          className="mb-10 text-center"
          style={{ 
             opacity: 0, 
             animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.2s forwards' : 'none' 
          }}
        >
          <span className="inline-block px-6 py-2 text-sm md:text-base text-white font-display uppercase tracking-[0.3em] border border-[var(--color-primary)] rounded-full bg-[rgba(123,47,190,0.1)] backdrop-blur-sm shadow-[0_0_15px_rgba(123,47,190,0.3)]">
            Cueva Creativa
          </span>
        </div>

        <p 
          className="osn-hero__subtitle text-body-lg md:text-h3 font-body font-normal text-[var(--color-text-muted)] mb-12 max-w-2xl leading-relaxed drop-shadow-md"
          style={{ 
             opacity: 0, 
             animation: mounted ? 'fadeSlideUp 0.8s ease-out 0.3s forwards' : 'none' 
          }}
        >
          Diseños de otro mundo para lanzar tu marca. Impulsamos tu negocio al máximo nivel con estrategia y creatividad. 
          <strong className="text-[var(--color-text-primary)] font-semibold block mt-4 text-[var(--color-secondary)] border-b border-[var(--color-secondary)] pb-1 inline-block"> Tu producto en una nueva órbita.</strong>
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
