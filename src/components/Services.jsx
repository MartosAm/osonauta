import { Film, Aperture, PenTool, Radio } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const servicesData = [
  {
    title: 'Edición de Video',
    description: 'Transformamos tus grabaciones en piezas dinámicas, atractivas y listas para impactar en Reels, TikToks o YouTube.',
    icon: Film,
    color: 'var(--color-primary)', // Morado
    hoverShadow: 'rgba(123,47,190,0.6)',
  },
  {
    title: 'Fotografía',
    description: 'Capturamos la esencia de tus platillos o productos con equipo profesional e iluminación de alta calidad. Directo en tu local.',
    icon: Aperture,
    color: 'var(--color-secondary)', // Cyan
    hoverShadow: 'rgba(0,180,216,0.6)',
  },
  {
    title: 'Diseño Gráfico',
    description: 'Creamos identidades visuales únicas y memorables que representan fielmente los valores y la misión de tu marca.',
    icon: PenTool,
    color: 'var(--color-accent)', // Naranja
    hoverShadow: 'rgba(255,107,53,0.6)',
  },
  {
    title: 'Gestión de Redes',
    description: 'Manejamos tus plataformas sociales con estrategias de contenido, calendarios de publicación y un enfoque en el crecimiento orgánico.',
    icon: Radio,
    color: '#00E676', // Un verde/cyan brillante como color adicional
    hoverShadow: 'rgba(0,230,118,0.6)',
  }
];

const Services = ({ id }) => {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const gridRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-services relative py-16 md:py-24 bg-transparent overflow-hidden">
      
      {/* Estilos locales para HUD scanner */}
      <style>
        {`
          @keyframes hud-scan {
            0% { top: -10%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 110%; opacity: 0; }
          }
        `}
      </style>
      
      {/* Detalles Cósmicos */}
      <div className="mini-star w-1.5 h-1.5 top-[10%] left-[8%]" style={{ animationDelay: '2.5s' }}></div>
      <div className="mini-star w-2 h-2 bottom-[15%] right-[12%]" style={{ animationDelay: '0.8s' }}></div>
      <div className="shooting-star-shared top-[30%] left-[10%]" style={{ animationDelay: '5s' }}></div>
      
      {/* Nebulosas sutiles para fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 60%)',
          animation: 'glowPulse 6s infinite'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div ref={titleRef} className="osn-section-title text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-h1 font-display text-[var(--color-text-primary)] mb-4 drop-shadow-md text-shadow-[0_0_15px_rgba(0,180,216,0.5)]">
            Nuestra Órbita de Servicios
          </h2>
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-6">
            Equipados con todas las herramientas para llevar la imagen de tu negocio directamente a las estrellas.
          </p>
          <div className="w-16 h-1 bg-[var(--color-secondary)] mx-auto rounded-full shadow-[0_0_10px_rgba(0,180,216,0.8)]" />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" style={{ opacity: 0 }}>
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-[rgba(10,10,26,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-8 md:p-10 transition-all duration-500 overflow-hidden"
                style={{
                  '--hover-color': service.color,
                  '--hover-shadow': service.hoverShadow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = service.color;
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${service.hoverShadow}`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Fondo iluminado oculto que aparece en hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${service.color} 0%, transparent 60%)` }}
                />

                {/* HUD Scan Line y Esquinas */}
                <div 
                  className="absolute left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 z-20 pointer-events-none hidden group-hover:block" 
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`, 
                    boxShadow: `0 0 15px ${service.color}`,
                    animation: 'hud-scan 2.5s ease-in-out infinite' 
                  }}
                ></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: service.color }}></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: service.color }}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className="w-16 h-16 rounded-xl border border-[rgba(255,255,255,0.1)] flex items-center justify-center mb-6 transition-all duration-500 shadow-lg"
                    style={{ backgroundColor: `color-mix(in srgb, ${service.color} 20%, transparent)` }}
                  >
                    <Icon 
                      size={32} 
                      color={service.color} 
                      className="group-hover:scale-110 transition-transform duration-500" 
                      style={{ filter: `drop-shadow(0 0 8px ${service.color})` }}
                    />
                  </div>
                  
                  <h3 className="text-h3 font-display text-white mb-4 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-body text-[var(--color-text-muted)] leading-relaxed flex-grow group-hover:text-[var(--color-text-primary)] transition-colors duration-300 relative z-10">
                    {service.description}
                  </p>

                  {/* Detalle tipo tarjeta espacial */}
                  <div className="absolute bottom-2 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                     <div className="w-1 h-1 rounded-full bg-[var(--color-primary)]"></div>
                     <div className="w-1 h-1 rounded-full bg-[var(--color-secondary)]"></div>
                     <div className="w-1 h-1 rounded-full bg-[var(--color-accent)]"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
