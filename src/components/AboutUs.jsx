import { GraduationCap, MapPin, Target, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutUs = ({ id }) => {
  const titleRef = useScrollReveal({ threshold: 0.1 });
  const textRef = useScrollReveal({ threshold: 0.2 });
  const cardsRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id={id} className="osn-about relative py-24 bg-transparent overflow-hidden">

      {/* Detalles Cósmicos */}
      <div className="mini-star w-2 h-2 top-[30%] left-[5%]" style={{ animationDelay: '0.5s' }}></div>
      <div className="mini-star w-1 h-1 bottom-[30%] right-[8%]" style={{ animationDelay: '1.5s' }}></div>
      <div className="shooting-star-shared top-[50%] right-[20%]" style={{ animationDelay: '2s' }}></div>
      
      {/* Planeta lejano */}
      <div className="distant-planet w-20 h-20 top-[10%] right-[15%] opacity-40 shadow-[0_0_20px_rgba(255,107,53,0.5)]" style={{ background: 'radial-gradient(circle at 30% 30%, #FF6B35, transparent)' }}></div>
      
      {/* NEBULOSAS DE FONDO */}
      <div 
        className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          animation: 'float 9s ease-in-out infinite'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)',
          animation: 'float 11s ease-in-out infinite alternate'
        }}
        aria-hidden="true"
      />

      {/* ========================================================
          ELEMENTO CREATIVO: PLANETA CON ANILLOS (Puro HTML/CSS)
          ======================================================== */}
      <div 
        className="absolute top-[5%] right-[-15%] md:right-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-40 pointer-events-none rotate-12" 
        aria-hidden="true"
      >
        <div 
          className="absolute inset-x-1/4 inset-y-1/4 rounded-full bg-gradient-to-tr from-[var(--color-bg-base)] via-[#4A0E8F] to-[var(--color-secondary)] shadow-[0_0_80px_rgba(123,47,190,0.5)]"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[25%] rounded-[50%] border-[6px] border-[rgba(0,180,216,0.3)] shadow-[0_0_30px_rgba(0,180,216,0.4)] rotate-[-20deg]"
          style={{ animation: 'float 8s ease-in-out infinite reverse' }}
        />
      </div>

      <Sparkles 
        className="absolute bottom-20 left-[5%] md:left-[15%] text-[var(--color-highlight)] opacity-40" 
        size={48} 
        style={{ animation: 'twinkle 3s infinite' }}
      />
      {/* ======================================================== */}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div ref={titleRef} className="osn-section-title text-center mb-16" style={{ opacity: 0 }}>
          <h2 className="text-h1 font-display text-[var(--color-text-primary)] mb-4 drop-shadow-md text-shadow-[0_0_15px_rgba(123,47,190,0.5)]">
            Conoce la Cueva
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto rounded-full shadow-[0_0_10px_rgba(123,47,190,0.8)]" />
        </div>

        <div 
          ref={textRef} 
          className="osn-card bg-[rgba(10,10,26,0.6)] backdrop-blur-md border border-[rgba(123,47,190,0.3)] rounded-3xl p-8 md:p-12 mb-16 text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] relative transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(123,47,190,0.2)] mx-auto max-w-4xl" 
          style={{ opacity: 0 }}
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-80" />
           <p className="text-body-lg font-body text-[var(--color-text-primary)] leading-relaxed">
             <span className="text-3xl text-[var(--color-secondary)] font-serif block mb-2 opacity-50">&ldquo;</span>
             Somos <strong className="text-[var(--color-highlight)] font-semibold drop-shadow-[0_0_5px_rgba(255,107,53,0.5)]">Osonauta</strong>, una agencia con todo el poder. Desde enero nos lanzamos al universo creativo con un equipo de 4 profesionales apasionados, con formación académica y experiencia real en la industria. Llegamos hasta donde estés &mdash; tu restaurante, tu local, tu espacio &mdash; con equipo profesional y una visión clara: <strong className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">hacer que tu producto despegue</strong>. Cada proyecto es una misión. Cada imagen, un resultado.
             <span className="text-3xl text-[var(--color-secondary)] font-serif block mt-2 opacity-50">&rdquo;</span>
           </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ opacity: 0 }}>
          <div className="osn-card group bg-[rgba(10,10,26,0.5)] backdrop-blur-sm border border-[rgba(123,47,190,0.2)] rounded-2xl p-8 text-center transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_0_25px_rgba(123,47,190,0.4)] hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto bg-[rgba(123,47,190,0.15)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] transition-all duration-300 shadow-[0_0_10px_inset_rgba(123,47,190,0.5)]">
              <GraduationCap className="text-[var(--color-primary)] group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-h3 font-display text-[var(--color-text-primary)] mb-3">Equipo Profesional</h3>
            <p className="text-small text-[var(--color-text-muted)] leading-relaxed">Formación académica y experiencia real probada en la industria visual.</p>
          </div>

          <div className="osn-card group bg-[rgba(10,10,26,0.5)] backdrop-blur-sm border border-[rgba(0,180,216,0.2)] rounded-2xl p-8 text-center transition-all duration-300 hover:border-[var(--color-secondary)] hover:shadow-[0_0_25px_rgba(0,180,216,0.4)] hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto bg-[rgba(0,180,216,0.15)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-secondary)] transition-all duration-300 shadow-[0_0_10px_inset_rgba(0,180,216,0.5)]">
              <MapPin className="text-[var(--color-secondary)] group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-h3 font-display text-[var(--color-text-primary)] mb-3">A tu ubicación</h3>
            <p className="text-small text-[var(--color-text-muted)] leading-relaxed">Llegamos hasta tu restaurante, tu local comercial o tu espacio de trabajo.</p>
          </div>

          <div className="osn-card group bg-[rgba(10,10,26,0.5)] backdrop-blur-sm border border-[rgba(255,107,53,0.2)] rounded-2xl p-8 text-center transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_25px_rgba(255,107,53,0.4)] hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto bg-[rgba(255,107,53,0.15)] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-accent)] transition-all duration-300 shadow-[0_0_10px_inset_rgba(255,107,53,0.5)]">
              <Target className="text-[var(--color-accent)] group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-h3 font-display text-[var(--color-text-primary)] mb-3">Calidad que vende</h3>
            <p className="text-small text-[var(--color-text-muted)] leading-relaxed">Cada proyecto es una misión estratégica. Cada imagen, un resultado medible.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
