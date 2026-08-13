import { useScrollReveal } from '../hooks/useScrollReveal';
import { Mail, MapPin, Phone, Share2 } from 'lucide-react';
import osonautaLogo from '../assets/logos/osonauta.webp';

// Import local de iconos (si hiciera falta) o puro SVG temporalmente
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
);

const Contact = ({ id }) => {
  const formRef = useScrollReveal({ threshold: 0.1 });
  const infoRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-contact relative py-20 md:py-32 bg-transparent overflow-hidden">
      
      {/* Fondo: Nebulosa Oscura y Satélite animado */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-[var(--color-bg-base)] to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />
      
      {/* Logo Esquina Inferior Izquierda */}
      <img
        src={osonautaLogo}
        alt="Logo de Osonauta, agencia de marketing en Durango"
        loading="lazy"
        decoding="async"
        className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-48 md:w-72 opacity-80 pointer-events-none z-0 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-opacity duration-500 hover:opacity-100"
      />

      <div 
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[var(--color-primary)] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen"
        style={{ animation: 'glowPulse 8s infinite', boxShadow: '0 0 28px rgba(123,47,190,0.85)', willChange: 'opacity, transform' }}
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
          <h2 data-i18n="contact.title" className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Centro de Mando
          </h2>
          <div className="w-16 h-1 bg-[var(--color-secondary)] mx-auto rounded-full shadow-[0_0_10px_rgba(0,180,216,0.8)] mb-6" />
          <p data-i18n="contact.subtitle" className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            ¿Listo para iniciar tu misión? Establece contacto con la base Osonauta y preparemos el lanzamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* INFO Y REDES */}
          <div ref={infoRef} className="lg:col-span-4 flex flex-col gap-8" style={{ opacity: 0 }}>
            <div className="bg-[rgba(10,10,26,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 data-i18n="contact.coordsTitle" className="text-h4 font-display text-white mb-6 border-b border-[rgba(255,255,255,0.1)] pb-4">Coordenadas</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span data-i18n="contact.coords.transmission" className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Transmisión</span>
                    <a href="mailto:osonauta.marketing@gmail.com" className="text-white hover:text-[var(--color-primary)] transition-colors text-sm break-all">Osonauta.marketing@gmail.com</a>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span data-i18n="contact.coords.base" className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Base Espacial</span>
                    <p className="text-white text-sm">Negrete 807 zona centro, Durango, México, 34000</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span data-i18n="contact.coords.frequency" className="block text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1">Frecuencia</span>
                    <a href="tel:+526182663567" className="text-white hover:text-[var(--color-accent)] transition-colors text-sm">+52 618 266 3567</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Redes Sociales Integradas */}
            <div className="bg-[rgba(10,10,26,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 data-i18n="contact.social.title" className="text-h4 font-display text-white mb-6 flex items-center gap-2">
                <Share2 size={20} className="text-[var(--color-secondary)]" /> Redes Aliadas
              </h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/osonauta_cueva_creativa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#E1306C] hover:text-[#E1306C] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(225,48,108,0.5)] bg-[rgba(10,10,26,0.5)]">
                  <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584631132308" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#1877F2] hover:text-[#1877F2] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] bg-[rgba(10,10,26,0.5)]">
                  <FacebookIcon />
                </a>
                <a href="https://www.tiktok.com/@osonauta.studio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#00f2fe] hover:text-[#00f2fe] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,242,254,0.5)] bg-[rgba(10,10,26,0.5)]">
                  <TikTokIcon />
                </a>
                <a href="https://wa.me/5216182663567" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white hover:border-[#00E676] hover:text-[#00E676] transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,230,118,0.5)] bg-[rgba(10,10,26,0.5)]">
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          </div>

          {/* TRANSMISIÓN DIRECTA (WhatsApp) */}
          <div ref={formRef} className="lg:col-span-8 flex flex-col justify-center" style={{ opacity: 0 }}>
            <div className="bg-[rgba(18,18,42,0.6)] backdrop-blur-xl border border-[#25D366]/50 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(37,211,102,0.15)] relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px]">
              
              {/* Brillo interno tipo panel */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#25D366] to-transparent opacity-50" />
              
              <div className="w-24 h-24 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,211,102,0.3)]">
                <WhatsAppIcon className="w-12 h-12 text-[#25D366]" />
              </div>

              <h3 data-i18n="contact.title" className="text-h2 font-display text-white mb-6">Transmisión Directa</h3>
              <p data-i18n="contact.direct.subtitle" className="text-body-lg text-[var(--color-text-muted)] mb-12 max-w-md">
                Evita las esperas. Conecta directamente con la base a través de nuestro canal seguro de WhatsApp.
              </p>
              
              <a 
                href="https://wa.me/526182663567?text=Hola%20Osonauta,%20estoy%20listo%20para%20iniciar%20mi%20misi%C3%B3n.%20Me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white font-display uppercase tracking-widest px-12 py-5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] border border-[#25D366]/50 hover:scale-105 flex items-center justify-center gap-4"
                data-i18n="contact.cta"
              >
                <div className="w-6 h-6 flex items-center justify-center"><WhatsAppIcon /></div>
                Enviar Mensaje
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
