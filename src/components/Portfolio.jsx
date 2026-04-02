import { useScrollReveal } from '../hooks/useScrollReveal';
import { Play, Image as ImageIcon } from 'lucide-react';

import imgCafeBrune from '../assets/portafolios/cafe brune/cafe brune rs 2.webp';
import imgCharco from '../assets/portafolios/charco/1.webp';
import imgComunidad from '../assets/portafolios/comunidad/fotos 1.webp';
import imgDidaSori from '../assets/portafolios/dida sori/rs 2.webp';
import imgMaddeta from '../assets/portafolios/maddeta/rs 32.webp';
import imgPecaminoso from '../assets/portafolios/pecaminoso/post 3.webp';

const portfolioItems = [
  {
    id: 1,
    title: 'Café Brune',
    category: 'Fotografía Gastronómica',
    image: imgCafeBrune,
    color: 'var(--color-primary)', // Morado
    icon: ImageIcon
  },
  {
    id: 2,
    title: 'Pecaminoso',
    category: 'Restaurante Comercial',
    image: imgPecaminoso,
    color: 'var(--color-secondary)', // Cyan
    icon: ImageIcon
  },
  {
    id: 3,
    title: 'Pizzería Dida Sori',
    category: 'Food Styling',
    image: imgDidaSori,
    color: 'var(--color-accent)', // Naranja
    icon: ImageIcon
  },
  {
    id: 4,
    title: 'Madetta Interiores',
    category: 'Espacios & Diseño',
    image: imgMaddeta,
    color: '#E0A96D', // Dorado/Madera
    icon: ImageIcon
  },
  {
    id: 5,
    title: 'El Charco',
    category: 'Restaurante de Mariscos',
    image: imgCharco,
    color: '#17BEBB', // Turquesa marino
    icon: ImageIcon
  },
  {
    id: 6,
    title: 'Comunidad',
    category: 'Sesión Fotográfica',
    image: imgComunidad,
    color: '#9D4EDD', // Morado claro
    icon: ImageIcon
  }
];

const Portfolio = ({ id }) => {
  const headerRef = useScrollReveal({ threshold: 0.1 });
  const galleryRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-portfolio relative py-32 bg-transparent overflow-hidden">
      
      {/* Detalles Cósmicos */}
      <div className="mini-star w-2 h-2 top-[10%] left-[12%]" style={{ animationDelay: '0.2s' }}></div>
      <div className="mini-star w-2 h-2 bottom-[15%] right-[10%]" style={{ animationDelay: '2.1s' }}></div>
      <div className="shooting-star-shared top-[20%] left-[40%]" style={{ animationDelay: '4s' }}></div>

      {/* Elemento de Fondo Cósmico */}
      <div 
        className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#12122A]/0 via-[#4A0E8F]/10 to-transparent pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" style={{ opacity: 0 }}>
          <div className="max-w-2xl">
            <h2 className="text-h1 font-display text-white mb-4 drop-shadow-lg">
              Galería de Estrellas
            </h2>
            <div className="w-20 h-1 bg-[var(--color-accent)] mb-6 shadow-[0_0_10px_rgba(255,107,53,0.8)]" />
            <p className="text-body-lg text-[var(--color-text-muted)]">
              Explora una selección de nuestras misiones exitosas. Proyectos donde la creatividad se encuentra con la estrategia para generar resultados visuales de otra galaxia para marcas reales.
            </p>
          </div>
          
          <button className="osn-btn self-start md:self-auto px-8 py-3 rounded-full border border-[var(--color-text-muted)] hover:border-white hover:text-white transition-colors duration-300 text-[var(--color-text-muted)] group flex items-center gap-3">
             Ver todo el portafolio
             <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300"></span>
          </button>
        </div>

        {/* Cambiamos a 3 columnas para acomodar los 6 proyectos perfectamente */}
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" style={{ opacity: 0 }}>
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.05)] shadow-xl"
            >
              {/* Imagen Real del Proyecto */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              
              {/* Overlay Gradiente Base (siempre visible en el fondo para que el texto se lea) */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[#0A0A1A]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Botón central (Aparece en hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 scale-50 group-hover:scale-100">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: 'rgba(10,10,26,0.6)', borderColor: `${item.color}80` }}
                >
                  {<item.icon size={24} color={item.color} />}
                </div>
              </div>

              {/* Contenido Texto */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <span 
                  className="inline-block px-4 py-1 rounded-full text-[0.65rem] md:text-xs font-bold font-display tracking-widest uppercase mb-3 border border-current shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                  style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}15`, textShadow: '0 0 5px rgba(0,0,0,0.8)' }}
                >
                  {item.category}
                </span>
                <h3 className="text-h4 md:text-h3 font-display text-white mb-2 drop-shadow-md">{item.title}</h3>
                
                {/* Línea decorativa inferior */}
                <div 
                  className="h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out mt-4 rounded-full shadow-[0_0_10px_currentColor]"
                  style={{ backgroundImage: `linear-gradient(to right, ${item.color}, transparent)`, color: item.color }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
