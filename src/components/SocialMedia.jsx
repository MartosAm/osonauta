import { useScrollReveal } from '../hooks/useScrollReveal';

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

      {/* Grid de Redes Sociales (Placeholders) */}
      <div ref={gridRef} className="max-w-7xl mx-auto px-6 relative z-10" style={{ opacity: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="relative group h-80 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] bg-[rgba(10,10,26,0.6)] backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.03] hover:border-[var(--color-secondary)]/50 cursor-pointer"
              style={{
                animation: `float ${6 + i}s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Marco Interfaz Espacial */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50 group-hover:bg-red-500 shadow-[0_0_10px_red]" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500 shadow-[0_0_10px_yellow]" />
                <div className="w-2 h-2 rounded-full bg-green-500/50 group-hover:bg-green-500 shadow-[0_0_10px_green]" />
              </div>

              <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-[var(--color-text-muted)] group-hover:text-[var(--color-secondary)] transition-colors">
                Recibiendo...
              </div>

              {/* Contenido Placeholder */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-300">
                <div className="w-16 h-16 rounded-full border border-dashed border-[var(--color-text-muted)] group-hover:border-[var(--color-secondary)] flex items-center justify-center mb-4 group-hover:rotate-180 transition-all duration-1000">
                  <span className="font-display font-bold">+</span>
                </div>
                <p className="text-sm tracking-wider uppercase opacity-50 group-hover:opacity-100">Post #{i + 1}</p>
                <div className="w-8 h-[1px] bg-[var(--color-text-muted)]/30 mx-auto mt-4 group-hover:w-16 group-hover:bg-[var(--color-secondary)] transition-all duration-300" />
              </div>
            </div>
          ))}

        </div>

        {/* Botón Central Flotante */}
        <div className="mt-20 flex justify-center">
          <a href="#" className="relative inline-flex items-center gap-4 px-10 py-5 bg-transparent border border-[var(--color-secondary)] rounded-full text-white font-display uppercase tracking-widest hover:bg-[var(--color-secondary)]/10 transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Conectar al Servidor Global</span>
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
