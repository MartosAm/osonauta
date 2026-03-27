import { MessageSquare, Rocket, MonitorPlay, Send, Compass } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import osoAstronauta from '../assets/logos/oso_vol.png';

const processSteps = [
  {
    step: '01',
    title: 'Coordenadas & Briefing',
    description: 'Nos reunimos para entender tu negocio, definir la misión y establecer los objetivos visuales a lograr.',
    icon: MessageSquare,
    align: 'left',
    color: 'var(--color-primary)'
  },
  {
    step: '02',
    title: 'Aterrizaje en tu Local',
    description: 'Llegamos a tu espacio con todo nuestro equipo fotográfico y de video para capturar la esencia de tus productos.',
    icon: Rocket,
    align: 'right',
    color: 'var(--color-secondary)'
  },
  {
    step: '03',
    title: 'Magia en la Cueva',
    description: 'Llevamos el material raw a nuestra base. Editamos, retocamos y ensamblamos piezas listas para impactar en redes.',
    icon: MonitorPlay,
    align: 'left',
    color: 'var(--color-accent)'
  },
  {
    step: '04',
    title: 'Despliegue & Órbita',
    description: 'Entregamos tu contenido en máxima resolución, optimizado para cada plataforma. Listos para ver crecer tus números.',
    icon: Send,
    align: 'right',
    color: '#00E676'
  }
];

const Process = ({ id }) => {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  // We'll give elements individual refs inside a map theoretically, but to keep it simple, 
  // we'll just track the container and let CSS handle children or just reveal the whole block.
  const timelineRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section id={id} className="osn-process relative py-24 bg-transparent overflow-hidden">
      
      {/* Fondo cósmico sutil */}
      <div 
        className="absolute bottom-0 right-[20%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          animation: 'float 7s ease-in-out infinite alternate'
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div ref={titleRef} className="text-center mb-20" style={{ opacity: 0 }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Compass className="text-[var(--color-secondary)]" size={32} style={{ animation: 'float 4s ease-in-out infinite' }} />
            <h2 className="text-h1 font-display text-white drop-shadow-md">
              Plan de Misión
            </h2>
          </div>
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-6">
            Una ruta clara y probada estructurada en cuatro fases, diseñada para llevar tu proyecto desde la idea al espacio digital.
          </p>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_rgba(123,47,190,0.8)]" />
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto" style={{ opacity: 0 }}>
          
          {/* Línea Central (Desktop) / Línea Lateral (Mobile) */}
          <div 
            className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent opacity-30 shadow-[0_0_10px_rgba(0,180,216,0.5)] md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-16 relative">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.align === 'left';

              return (
                <div key={item.step} className={`relative flex flex-col md:flex-row items-start md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Nodo Timeline */}
                  <div className="absolute left-[30px] md:left-1/2 w-12 h-12 rounded-full border-4 border-[#0a0a1a] bg-[#1a1a2e] flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(123,47,190,0.4)] transition-transform duration-300 hover:scale-110"
                       style={{ borderColor: item.color, boxShadow: `0 0 15px ${item.color}40` }}>
                    <span className="text-xs font-display font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">{item.step}</span>
                  </div>

                  {/* Espacio en el lado vacío (Desktop) */}
                  <div className="hidden md:flex md:w-1/2 justify-center items-center relative">
                    {item.step === '02' && (
                      <img 
                        src={osoAstronauta} 
                        alt="Osonauta explorando" 
                        className="w-48 lg:w-64 h-auto drop-shadow-[0_0_20px_rgba(0,180,216,0.3)] z-0" 
                        style={{ 
                          animation: 'float 6s ease-in-out infinite' 
                        }}
                      />
                    )}
                  </div>

                  {/* Tarjeta de Contenido */}
                  <div className={`w-full md:w-1/2 pl-20 md:px-12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div 
                      className="group relative bg-[rgba(10,10,26,0.6)] backdrop-blur-sm border border-[rgba(255,255,255,0.05)] rounded-2xl p-8 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(123,47,190,0.15)] hover:-translate-y-1"
                      style={{ '--hover-color': item.color }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = item.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                      }}
                    >
                       <div className={`w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.03)] flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#1a1a3a] ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`}>
                         <Icon size={24} color={item.color} className="group-hover:scale-110 transition-transform" />
                       </div>
                       <h3 className="text-h4 font-display text-white mb-2">{item.title}</h3>
                       <p className="text-body text-[var(--color-text-muted)] leading-relaxed group-hover:text-white transition-colors">
                         {item.description}
                       </p>

                       {/* Resplandor decorativo interno */}
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-5 mix-blend-overlay transition-opacity duration-500 pointer-events-none rounded-2xl" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;
