import { useScrollReveal } from '../hooks/useScrollReveal';

const Location = ({ id }) => {
  const mapRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id={id} className="osn-location relative py-20 md:py-32 bg-transparent overflow-hidden">
      {/* Fondo: Brillo estelar central */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--color-secondary)] rounded-full blur-[200px] opacity-10 pointer-events-none mix-blend-screen"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Sector Espacial
          </h2>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(255,107,53,0.8)] mb-6" />
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Rastrea nuestras coordenadas exactas. Visita nuestra cueva creativa y despeguemos juntos.
          </p>
        </div>

        <div ref={mapRef} style={{ opacity: 0 }}>
          <div className="bg-[rgba(18,18,42,0.6)] backdrop-blur-xl border border-[var(--color-secondary)]/30 rounded-3xl p-4 md:p-6 shadow-[0_0_40px_rgba(0,180,216,0.15)] relative overflow-hidden group">
            
            {/* Brillo interno superior estilo HUD */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-50" />
            
            {/* Esquinas tipo radar HUD */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[var(--color-secondary)] opacity-50"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[var(--color-secondary)] opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[var(--color-secondary)] opacity-50"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[var(--color-secondary)] opacity-50"></div>

            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative border border-[rgba(255,255,255,0.05)] bg-black">
              {/* Overlay sutil estilo escaner */}
              <div className="absolute inset-0 pointer-events-none border border-[rgba(0,180,216,0.3)] rounded-2xl z-10 transition-colors group-hover:border-[rgba(0,180,216,0.6)] shadow-[inset_0_0_30px_rgba(0,180,216,0.2)]" />
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.61284969337356!2d-104.65378267942556!3d24.029455193284843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb781823db301%3A0xab5c40168a39f258!2sOsonauta%20Cueva%20Creativa!5e0!3m2!1ses!2smx!4v1778549191401!5m2!1ses!2smx" 
                className="w-full h-full relative z-0 transition-all duration-700 invert-[90%] hue-rotate-[180deg] contrast-[1.1] opacity-80 hover:invert-0 hover:hue-rotate-0 hover:opacity-100 hover:contrast-100" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación Osonauta"
              ></iframe>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;
