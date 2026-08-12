import { useScrollReveal } from '../hooks/useScrollReveal';
import { Radar } from 'lucide-react';

import logoBrune from '../assets/portafolios/compartido/BRUNÉ.webp';
import logoComunidad from '../assets/portafolios/compartido/COMUNIDAD.webp';
import logoDidaSori from '../assets/portafolios/compartido/DIDA SORI.webp';
import logoElCharco from '../assets/portafolios/compartido/EL CHARCO.webp';
import logoMadetta from '../assets/portafolios/compartido/MADETTA.webp';
import logoPecaminoso from '../assets/portafolios/compartido/PECAMINOSO.webp';

const logosData = [
  { id: 1, name: 'Dida Sori', logo: logoDidaSori, bgClass: 'bg-white', imgClass: 'w-full h-full object-cover rounded-full p-2' },
  { id: 2, name: 'El Charco', logo: logoElCharco, bgClass: 'bg-[rgba(10,10,26,0.6)]', imgClass: 'w-24 h-24 md:w-32 md:h-32 p-2 object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]' },
  { id: 3, name: 'Madetta', logo: logoMadetta, bgClass: 'bg-white', imgClass: 'w-full h-full object-cover rounded-full p-2' },
  { id: 4, name: 'Café Brune', logo: logoBrune, bgClass: 'bg-white', imgClass: 'w-full h-full object-cover rounded-full p-2' },
  { id: 5, name: 'Pecaminoso', logo: logoPecaminoso, bgClass: 'bg-white', imgClass: 'w-full h-full object-cover rounded-full p-2' },
  { id: 6, name: 'Comunidad', logo: logoComunidad, bgClass: 'bg-white/90', imgClass: 'w-24 h-24 md:w-32 md:h-32 p-2 object-contain' }
];

const Testimonials = ({ id }) => {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const radarRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-testimonials relative py-24 bg-transparent overflow-hidden">
      
      {/* Fondo: HUD del Radar */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-[rgba(0,180,216,0.05)] rounded-full flex items-center justify-center opacity-30 pointer-events-none" 
        style={{ animation: 'spin 60s linear infinite' }}
      >
        <div className="w-[80%] h-[80%] border border-[rgba(123,47,190,0.1)] rounded-full border-dashed" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <Radar className="text-[var(--color-secondary)] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(0,180,216,0.8)]" size={40} style={{ animation: 'pulse 2s infinite' }} />
          <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Radar de Aliados
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_rgba(123,47,190,0.8)] mb-6" />
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Detectando señales de las marcas que viajan con nosotros. Órbitas locales con alcance estelar.
          </p>
        </div>

        {/* Contenedor del Marquee */}
        <div ref={radarRef} className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl bg-[rgba(18,18,42,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] shadow-[0_0_40px_rgba(0,0,0,0.5)] py-12 pb-20" style={{ opacity: 0 }}>
          
          {/* Sombras en los bordes para un efecto de difuminado al entrar/salir del radar */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[rgb(14,14,33)] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[rgb(14,14,33)] to-transparent z-10 pointer-events-none"></div>

          {/* Carrusel infinito */}
          <div className="flex w-max animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
            
            {/* Primer set de logos */}
            <div className="flex items-center gap-10 px-5">
              {logosData.map((client) => (
                <div key={`set1-${client.id}`} className={`group relative flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full ${client.bgClass} border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300 overflow-hidden`}>
                  <div className="flex items-center justify-center w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={`Logo de ${client.name}, cliente de Osonauta en Durango`} 
                      className={`max-w-full max-h-full ${client.imgClass} group-hover:scale-110 transition-transform duration-300`}
                      loading="lazy"
                    />
                  </div>
                  {/* Etiqueta del radar al hacer hover */}
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs md:text-sm font-display text-[var(--color-secondary)] tracking-widest uppercase transition-opacity duration-300 z-20">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Segundo set de logos (Duplicado para lograr el loop infinito) */}
            <div className="flex items-center gap-10 px-5">
              {logosData.map((client) => (
                <div key={`set2-${client.id}`} className={`group relative flex flex-col items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full ${client.bgClass} border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] transition-all duration-300 overflow-hidden`}>
                  <div className="flex items-center justify-center w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={`Logo de ${client.name}, cliente de Osonauta en Durango`} 
                      className={`max-w-full max-h-full ${client.imgClass} group-hover:scale-110 transition-transform duration-300`}
                      loading="lazy"
                    />
                  </div>
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs md:text-sm font-display text-[var(--color-secondary)] tracking-widest uppercase transition-opacity duration-300 z-20">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
