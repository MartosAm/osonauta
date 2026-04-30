import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const shortsIds = [
  'Pw6h-Us-kQ0',
  'vnMYG3U9fio',
  '4aa53788xog',
  'YzN77tJ9TQ8',
  'svMYD_Dkmkw',
  'NiWHYS4a71I',
  's7uynnO0edk',
  's8SwK4kUoR0'
];

const ShortVideo = ({ videoId, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="relative group h-[28rem] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,26,0.6)] backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[var(--color-secondary)]/50 cursor-pointer"
      style={{
        animation: `float ${6 + (index % 4)}s ease-in-out infinite alternate`,
        animationDelay: `${index * 0.2}s`
      }}
      onClick={() => setIsLoaded(true)}
    >
      {isLoaded ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
          title={`YouTube Short ${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          {/* Thumbnail */}
          <img 
            src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`} 
            alt="Short Thumbnail" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
            loading="lazy"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)]/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-secondary)] backdrop-blur-sm">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Decoración */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/50 group-hover:bg-red-500 shadow-[0_0_10px_red]" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 shadow-[0_0_10px_yellow]" />
            <div className="w-2 h-2 rounded-full bg-green-500/50 group-hover:bg-green-500 shadow-[0_0_10px_green]" />
          </div>
        </>
      )}
    </div>
  );
};

const SocialMedia = ({ id }) => {
  const gridRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id={id} className="relative py-32 bg-transparent overflow-hidden">
      
      {/* Elementos de fondo cósmicos */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)] rounded-full blur-[200px] opacity-10 pointer-events-none mix-blend-screen" />
      <div className="absolute -bottom-32 right-0 w-[400px] h-[400px] bg-[var(--color-accent)] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-screen" />

      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
        <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Red de Satélites
        </h2>
        <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full shadow-[0_0_10px_var(--color-accent)] mb-6" />
        <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
          Intercepta nuestras transmisiones diarias. Explora los feeds estelares desde nuestra estación en redes sociales.
        </p>
      </div>

      {/* Grid de YouTube Shorts */}
      <div ref={gridRef} className="max-w-7xl mx-auto px-6 relative z-10" style={{ opacity: 0 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shortsIds.map((videoId, i) => (
            <ShortVideo key={videoId} videoId={videoId} index={i} />
          ))}
        </div>

        {/* Botón Central Flotante */}
        <div className="mt-20 flex justify-center">
          <a href="https://www.youtube.com/@osonauta" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-4 px-10 py-5 bg-transparent border border-[var(--color-secondary)] rounded-full text-white font-display uppercase tracking-widest hover:bg-[var(--color-secondary)]/10 transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Ver más en YouTube</span>
            <div className="w-2 h-2 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_var(--color-secondary)] group-hover:scale-[3] transition-transform duration-500 relative z-10" />
            
            {/* Destello de fondo hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default SocialMedia;
