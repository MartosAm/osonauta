import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, MapPin, Phone, Share2 } from 'lucide-react';
import osonautaLogo from '../assets/logos/osonauta.png';

const Contact = ({ id }) => {
  const formRef = useScrollReveal({ threshold: 0.1 });
  const infoRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-contact relative py-32 bg-transparent overflow-hidden">
      
      {/* Fondo: Nebulosa Oscura y Satélite animado */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-[var(--color-bg-base)] to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
      
      {/* Logo Esquina Inferior Izquierda */}
      <img
        src={osonautaLogo}
        alt="Osonauta Studio"
        className="absolute bottom-8 left-8 w-32 md:w-48 opacity-60 pointer-events-none z-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-opacity duration-500 hover:opacity-100"
      />

      <div 
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[var(--color-primary)] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen"
        style={{ animation: 'glowPulse 8s infinite' }}
      />
      
      {/* Satélite (Dibujado en CSS) orbitando en el fondo */}
      <div 
        className="absolute top-[20%] left-[-10%] opacity-40 pointer-events-none z-0"
        style={{ animation: 'float 20s linear infinite' }}
      >
        <div className="relative w-32 h-32 rotate-45">
          {/* Paneles solares */}
          <div className="absolute top-1/2 left-0 w-12 h-6 bg-blue-900 border border-blue-400 -translate-y-1/2 rounded-sm opacity-80" />
          <div className="absolute top-1/2 right-0 w-12 h-6 bg-blue-900 border border-blue-400 -translate-y-1/2 rounded-sm opacity-80" />
          {/* Cuerpo central */}
          <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-gray-300 rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_white]" />
          {/* Antena */}
          <div className="absolute top-0 left-1/2 w-1 h-8 bg-gray-400 -translate-x-1/2" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Centro de Mando
          </h2>
          <div className="w-16 h-1 bg-[var(--color-secondary)] mx-auto rounded-full shadow-[0_0_10px_rgba(0,180,216,0.8)] mb-6" />
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            ¿Listo para iniciar tu misión? Establece contacto con la base Osonauta y preparemos el lanzamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* INFO Y REDES */}
          <div ref={infoRef} className="lg:col-span-4 flex flex-col gap-8" style={{ opacity: 0 }}>
            <div className="bg-[rgba(10,10,26,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-h4 font-display text-white mb-6 border-b border-[rgba(255,255,255,0.1)] pb-4">Coordenadas</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Transmisión</span>
                    <a href="mailto:hola@osonauta.com" className="text-white hover:text-[var(--color-primary)] transition-colors text-sm">hola@osonauta.com</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Base Espacial</span>
                    <p className="text-white text-sm">Negrete 807 zona centro, Durango, México, 34000</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Frecuencia</span>
                    <a href="tel:+526182663567" className="text-white hover:text-[var(--color-accent)] transition-colors text-sm">618 266 3567</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Redes Sociales Integradas */}
            <div className="bg-[rgba(10,10,26,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-h4 font-display text-white mb-6 flex items-center gap-2">
                <Share2 size={20} className="text-[var(--color-secondary)]" /> Redes Aliadas
              </h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/osonauta_cueva_creativa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#E1306C] hover:text-[#E1306C] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(225,48,108,0.5)]">
                  <span className="font-bold text-lg">IG</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584631132308" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#1877F2] hover:text-[#1877F2] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]">
                  <span className="font-bold text-lg">FB</span>
                </a>
                <a href="https://www.tiktok.com/@osonauta.studio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#00f2fe] hover:text-[#00f2fe] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,242,254,0.5)]">
                  <span className="font-bold text-lg">TK</span>
                </a>
                <a href="https://wa.me/5216182663567" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#00E676] hover:text-[#00E676] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,230,118,0.5)]">
                  <span className="font-bold text-lg">WA</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORMULARIO */}
          <div ref={formRef} className="lg:col-span-8" style={{ opacity: 0 }}>
            <div className="bg-[rgba(18,18,42,0.6)] backdrop-blur-xl border border-[var(--color-primary)]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(123,47,190,0.15)] relative overflow-hidden">
              
              {/* Brillo interno tipo panel */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />
              
              <h3 className="text-h3 font-display text-white mb-8">Enviar Transmisión</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Nombre del Piloto</label>
                    <input 
                      type="text" 
                      className="w-full bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all"
                      placeholder="Ej. Comandante Ripley"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Frecuencia (Email)</label>
                    <input 
                      type="email" 
                      className="w-full bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all"
                      placeholder="correo@nave.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Asunto de la Misión</label>
                  <input 
                    type="text" 
                    className="w-full bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                    placeholder="Ej. Sesión de fotos para mi base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Mensaje</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-[rgba(10,10,26,0.8)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
                    placeholder="Describe los detalles de la misión..."
                  />
                </div>

                <button 
                  type="button" 
                  className="w-full md:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-display uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(123,47,190,0.4)] hover:shadow-[0_0_30px_rgba(123,47,190,0.6)]"
                >
                  Iniciar Lanzamiento
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
