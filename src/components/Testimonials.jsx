import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

import imgDidaSori from '../assets/portafolios/dida sori/rs 2.webp';
import imgCharco from '../assets/portafolios/charco/1.webp';
import imgMaddeta from '../assets/portafolios/maddeta/rs 32.webp';
import imgCafeBrune from '../assets/portafolios/cafe brune/cafe brune rs 2.webp';
import imgComunidad from '../assets/portafolios/comunidad/fotos 1.webp';
import imgPecaminoso from '../assets/portafolios/pecaminoso/post 3.webp';

import logoBrune from '../assets/portafolios/compartido/BRUNÉ.webp';
import logoComunidad from '../assets/portafolios/compartido/COMUNIDAD.webp';
import logoDidaSori from '../assets/portafolios/compartido/DIDA SORI.webp';
import logoElCharco from '../assets/portafolios/compartido/EL CHARCO.webp';
import logoMadetta from '../assets/portafolios/compartido/MADETTA.webp';
import logoPecaminoso from '../assets/portafolios/compartido/PECAMINOSO.webp';

const testimonialsData = [
  {
    id: 1,
    client: 'Dida Sori',
    sector: 'Pizzería',
    text: '"Lograron capturar exactamente lo antojadizas que son nuestras pizzas. Desde que empezamos a subir el contenido, mucha más gente nos visita preguntando por lo que vieron en redes."',
    image: imgDidaSori,
    logo: logoDidaSori,
    planetColor: 'radial-gradient(circle at 30% 30%, #ff6b35, #8b2500)',
    ring: true,
    ringColor: 'rgba(255,107,53,0.4)'
  },
  {
    id: 2,
    client: 'El Charco',
    sector: 'Restaurante de Mariscos',
    text: '"Lograron retratar la frescura de nuestros mariscos y el ambiente del restaurante con una calidad brutal. El contenido nos ayudó a atraer más clientes y reservas."',
    image: imgCharco,
    logo: logoElCharco,
    planetColor: 'radial-gradient(circle at 30% 30%, #17BEBB, #0b4f6c)',
    ring: true,
    ringColor: 'rgba(23,190,187,0.35)'
  },
  {
    id: 3,
    client: 'Madetta',
    sector: 'Interiores & Diseño',
    text: '"Entendieron muy bien la iluminación y los ángulos requeridos para resaltar la calidad de nuestros espacios. Tienen ojo para el diseño y eso se nota en el resultado final."',
    image: imgMaddeta,
    logo: logoMadetta,
    planetColor: 'radial-gradient(circle at 30% 30%, #E0A96D, #5c3b18)',
    ring: true,
    ringColor: 'rgba(224,169,109,0.3)'
  },
  {
    id: 4,
    client: 'Café Brune',
    sector: 'Cafetería',
    text: '"La vibra de nuestro café se transmitió perfectamente a través de sus fotografías. Capturaron el aroma y la calidez de cada taza, ¡nos encantó!"',
    image: imgCafeBrune,
    logo: logoBrune,
    planetColor: 'radial-gradient(circle at 30% 30%, #d4a373, #5e3023)',
    ring: false,
    ringColor: 'transparent'
  },
  {
    id: 5,
    client: 'Pecaminoso',
    sector: 'Restaurante',
    text: '"Nuestros platillos ahora lucen irresistibles en todas las plataformas. Sus videos y fotos han traído a docenas de comensales nuevos antojados, un excelente servicio."',
    image: imgPecaminoso,
    logo: logoPecaminoso,
    planetColor: 'radial-gradient(circle at 30% 30%, #00b4d8, #0077b6)',
    ring: true,
    ringColor: 'rgba(0,180,216,0.4)'
  },
  {
    id: 6,
    client: 'Comunidad',
    sector: 'Sesión Fotográfica',
    text: '"Una sesión fotográfica con gran sensibilidad. Supieron capturar los momentos más emotivos y sinceros de nuestra comunidad con muchísimo respeto y calidad."',
    image: imgComunidad,
    logo: logoComunidad,
    planetColor: 'radial-gradient(circle at 30% 30%, #9d4edd, #3c096c)',
    ring: false,
    ringColor: 'transparent'
  }
];

const Testimonials = ({ id }) => {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const sliderRef = useScrollReveal({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonialsData.length - 1 : current - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="osn-testimonials relative py-24 bg-transparent overflow-hidden">
      
      {/* Detalles Cósmicos */}
      <div className="mini-star w-1.5 h-1.5 top-[15%] left-[25%]" style={{ animationDelay: '1.2s' }}></div>
      <div className="mini-star w-2 h-2 bottom-[10%] right-[30%]" style={{ animationDelay: '3.5s' }}></div>

      {/* HUD de Comunicación Intergaláctica de Fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-[rgba(0,180,216,0.05)] rounded-full flex items-center justify-center opacity-30 pointer-events-none" 
        style={{ animation: 'spin 60s linear infinite' }}
      >
        <div className="w-[80%] h-[80%] border border-[rgba(123,47,190,0.1)] rounded-full border-dashed" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Transmisiones Aliadas
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_rgba(123,47,190,0.8)] mb-6" />
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Mensajes interceptados desde las órbitas de nuestros clientes tras lograr el despegue comercial.
          </p>
        </div>

        <div ref={sliderRef} className="relative max-w-4xl mx-auto" style={{ opacity: 0 }}>
          
          <div className="relative bg-[rgba(18,18,42,0.6)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 md:p-14 shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Comilla Decorativa */}
            <Quote className="absolute top-8 left-8 text-[var(--color-primary)] opacity-20" size={80} />

            {/* Controles de navegación manuales izquierda/derecha */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.1)] rounded-full text-white hover:bg-[var(--color-primary)] hover:border-transparent transition-all duration-300"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.1)] rounded-full text-white hover:bg-[var(--color-primary)] hover:border-transparent transition-all duration-300"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
              
              {/* Representación Planeta de la Empresa */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative w-32 h-32 md:w-48 md:h-48">
                {testimonialsData.map((t, idx) => (
                  <div 
                    key={t.id}
                    className={`absolute inset-0 transition-all duration-1000 transform ${idx === activeIndex ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}
                  >
                    {/* Parte trasera del anillo */}
                    {t.ring && (
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[30%] border-[5px] rounded-[50%] rotate-[-20deg] z-0"
                        style={{ borderColor: t.ringColor, opacity: 0.45 }}
                      />
                    )}

                    {/* Planeta CSS */}
                    <div 
                      className="absolute inset-0 z-10 rounded-full shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.9),_0_0_15px_rgba(255,255,255,0.1)]"
                      style={{ background: t.planetColor, animation: 'spin 20s linear infinite' }}
                    />
                    
                    {/* Parte frontal del anillo */}
                    {t.ring && (
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[30%] rotate-[-20deg] z-20"
                      >
                        <div
                          className="absolute inset-0 rounded-[50%] border-[5px]"
                          style={{ borderColor: t.ringColor, clipPath: 'inset(52% 0 0 0)' }}
                        />
                      </div>
                    )}

                    {/* Satélite (Foto pequeña orbitando) */}
                    <img 
                      src={t.image} 
                      alt={t.client}
                      loading="lazy"
                      decoding="async"
                      className="absolute top-0 -right-4 md:top-[10%] md:-right-8 w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 border-[var(--color-bg-base)] shadow-[0_0_15px_rgba(0,0,0,0.8)] z-30"
                      style={{ animation: 'float 4s ease-in-out infinite' }}
                    />
                  </div>
                ))}
                </div>

                <div className="mt-6 w-36 md:w-44 h-14 bg-[rgba(10,10,26,0.65)] border border-[rgba(255,255,255,0.14)] rounded-xl px-3 flex items-center justify-center shadow-[0_0_18px_rgba(0,0,0,0.35)]">
                  <img
                    src={testimonialsData[activeIndex].logo}
                    alt={`Logo ${testimonialsData[activeIndex].client}`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-8 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div className="flex-1 text-center md:text-left min-h-[200px] flex flex-col justify-center relative">
                {testimonialsData.map((t, idx) => (
                  <div 
                    key={t.id}
                    className={`absolute inset-x-0 transition-all duration-700 ${idx === activeIndex ? 'opacity-100 translate-y-0 relative z-20' : 'opacity-0 translate-y-8 absolute pointer-events-none'}`}
                  >
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-body-lg md:text-h4 font-body text-white leading-relaxed mb-6 italic font-light opacity-90">
                      {t.text}
                    </p>
                    <div>
                      <h4 className="text-h4 font-display text-[var(--color-secondary)] uppercase tracking-wider drop-shadow-md">
                        Base: {t.client}
                      </h4>
                      <span className="text-small text-[var(--color-text-muted)] opacity-70">Sector {t.sector}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Controles y progreso de puntos */}
          <div className="flex justify-center mt-8 gap-3 flex-wrap">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${idx === activeIndex ? 'w-10 bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]' : 'w-2 bg-[var(--color-text-muted)] opacity-50 hover:opacity-100 hover:scale-150'}`}
                aria-label={`Ir a transmisión ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
