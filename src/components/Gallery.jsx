import { useScrollReveal } from '../hooks/useScrollReveal';
import { Play, Image as ImageIcon, Sparkles } from 'lucide-react';

// ARREGLO DE VIDEOS (Reemplazarás los datos aquí a futuro)
const videoItems = [
  { id: 1, title: '"Reel Promocional"', type: 'Video Vertical' },
  { id: 2, title: '"Detrás de Cámaras"', type: 'Video Horizontal' },
];

// ARREGLO DE IMÁGENES (Reemplazarás los datos aquí a futuro)
const imageItems = [
  { id: 1, title: '"Campaña de Verano"' },
  { id: 2, title: '"Lanzamiento"' },
  { id: 3, title: '"Menú 2024"' },
  { id: 4, title: '"Fachada"' },
];

const Gallery = ({ id }) => {
  const headerRef = useScrollReveal({ threshold: 0.1 });
  const videosRef = useScrollReveal({ threshold: 0.2 });
  const photosRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-gallery relative py-32 bg-transparent overflow-hidden">
      
      {/* --- EFECTOS ESPACIALES DE FONDO --- */}
      
      {/* 1. Galaxia en espiral (CSS puro) */}
      <div 
        className="absolute top-10 left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full opacity-30 pointer-events-none mix-blend-screen"
        style={{
          background: 'conic-gradient(from 0deg, transparent, var(--color-primary), transparent, var(--color-secondary), transparent)',
          filter: 'blur(40px)',
          animation: 'spin 40s linear infinite'
        }}
        aria-hidden="true"
      />

      {/* 2. Estrellas Fugaces (Simuladas con divs y animaciones en línea) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[20%] left-[-10%] w-32 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80 rotate-[-45deg]"
          style={{ animation: 'float 5s ease-in-out infinite, spin 35s linear infinite' }}
        />
        <div 
          className="absolute top-[60%] right-[-5%] w-48 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-60 rotate-[-30deg]"
          style={{ animation: 'float 7s ease-in-out infinite reverse, spin 45s linear infinite' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
          <Sparkles className="text-[var(--color-accent)] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,107,53,0.8)]" size={40} style={{ animation: 'twinkle 2s infinite' }}/>
          <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-md">
            El Cinturón de Asteroides
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(255,107,53,0.8)] mb-6" />
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Nuestra bóveda multimedia. Próximamente aquí desplegaremos el contenido visual y audiovisual en su máxima resolución.
          </p>
        </div>

        {/* CINTURÓN DE VIDEOS */}
        <div ref={videosRef} className="mb-24" style={{ opacity: 0 }}>
          <h3 className="text-h3 font-display text-white border-l-4 border-[var(--color-primary)] pl-4 mb-8">
            Transmisiones en Movimiento (Videos)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoItems.map((video) => (
              <div 
                key={video.id} 
                className="group relative aspect-video bg-[rgba(10,10,26,0.6)] backdrop-blur-sm border border-[rgba(123,47,190,0.3)] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(123,47,190,0.3)]"
              >
                {/* Espacio para futuro iframe de YouTube o Video */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-bg-base)] opacity-50 z-0" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] mb-4 border border-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary)] group-hover:scale-110 transition-transform">
                    <Play size={28} className="translate-x-1" />
                  </div>
                  <p className="text-white font-display text-lg tracking-wide opacity-80">{video.title}</p>
                  <span className="text-small text-[var(--color-text-muted)]">{video.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CINTURÓN DE FOTOS */}
        <div ref={photosRef} style={{ opacity: 0 }}>
          <h3 className="text-h3 font-display text-white border-l-4 border-[var(--color-secondary)] pl-4 mb-8">
            Capturas Estelares (Imágenes)
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {imageItems.map((img) => (
              <div 
                key={img.id}
                className="group relative aspect-square bg-[rgba(10,10,26,0.6)] backdrop-blur-sm border border-[rgba(0,180,216,0.3)] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:border-[var(--color-secondary)] hover:shadow-[0_0_25px_rgba(0,180,216,0.3)]"
              >
                {/* Espacio para la futura imagen */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050510_100%)] z-0 mix-blend-overlay" />
                
                <div className="relative z-10 flex flex-col items-center opacity-60 group-hover:opacity-100 transition-opacity">
                  <ImageIcon size={32} className="text-[var(--color-secondary)] mb-3 drop-shadow-[0_0_10px_rgba(0,180,216,0.8)] group-hover:rotate-12 transition-transform" />
                  <p className="text-xs md:text-sm text-center font-display text-[var(--color-text-muted)] group-hover:text-white transition-colors">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
