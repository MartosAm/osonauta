import { useScrollReveal } from '../hooks/useScrollReveal';
import { Play } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Campaña Gastronómica',
    category: 'Fotografía & Video',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
    color: 'var(--color-primary)'
  },
  {
    id: 2,
    title: 'Lanzamiento de Marca',
    category: 'Identidad Visual',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa221f0?q=80&w=600&auto=format&fit=crop',
    color: 'var(--color-secondary)'
  },
  {
    id: 3,
    title: 'Gestión de Redes',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
    color: 'var(--color-accent)'
  },
  {
    id: 4,
    title: 'Spot Publicitario',
    category: 'Producción de Video',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600&auto=format&fit=crop',
    color: '#00E676'
  }
];

const Portfolio = ({ id }) => {
  const headerRef = useScrollReveal({ threshold: 0.1 });
  const galleryRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-portfolio relative py-32 bg-transparent overflow-hidden">
      
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
              Explora una selección de nuestras misiones más exitosas. Proyectos donde la creatividad se encuentra con la estrategia para generar impacto real.
            </p>
          </div>
          
          <button className="osn-btn self-start md:self-auto px-8 py-3 rounded-full border border-[var(--color-text-muted)] hover:border-white hover:text-white transition-colors duration-300 text-[var(--color-text-muted)] group flex items-center gap-3">
             Ver todo el portafolio
             <span className="w-6 h-[1px] bg-current group-hover:w-10 transition-all duration-300"></span>
          </button>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8" style={{ opacity: 0 }}>
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.05)]"
            >
              {/* Imagen de Fondo (Placeholder temporal para que luzca bien) */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                loading="lazy"
              />
              
              {/* Overlay Gradiente */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-[#0A0A1A] via-[rgba(10,10,26,0.4)] to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
              />

              {/* Botón Play central (Aparece en hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 scale-50 group-hover:scale-100">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: 'rgba(10,10,26,0.5)' }}
                >
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>

              {/* Contenido Texto */}
              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
                <span 
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold font-display tracking-widest uppercase mb-3 border border-current"
                  style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}15` }}
                >
                  {item.category}
                </span>
                <h3 className="text-h3 font-display text-white mb-2">{item.title}</h3>
                
                {/* Línea decorativa inferior */}
                <div 
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out mt-4"
                  style={{ backgroundImage: `linear-gradient(to right, ${item.color}, transparent)` }}
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
