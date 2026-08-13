import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import navLogo from '../assets/images/osoblancoletras.webp';
import LanguageToggle from './LanguageToggle.jsx';

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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del body en dispositivos móviles cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { key: 'nav.inicio', name: 'Inicio', href: '#inicio' },
    { key: 'nav.nosotros', name: 'Nosotros', href: '#nosotros' },
    { key: 'nav.servicios', name: 'Servicios', href: '#servicios' },
    { key: 'nav.portafolio', name: 'Portafolio', href: '#portafolio' },
    { key: 'nav.contacto', name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`osn-navbar fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      } ${
        isScrolled && !isMobileMenuOpen
          ? 'bg-[rgba(10,10,26,0.85)] backdrop-blur-md border-b border-[rgba(123,47,190,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 grid items-center relative" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
        <div className="col-start-1">
          <ul className="osn-navbar__nav hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[var(--color-text-primary)] font-body font-medium hover:text-[var(--color-secondary)] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded px-2 py-1"
                data-i18n={link.key}
              >
                {link.name}
              </a>
            </li>
          ))}
          </ul>
        </div>

        <div className="col-start-2 flex justify-center">
          <a 
            href="#inicio" 
            className="osn-navbar__brand flex items-center gap-3 z-50 absolute left-1/2 -translate-x-1/2 md:static md:transform-none focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded hover:scale-105 transition-transform"
            aria-label="Ir al inicio"
          >
            <img src={navLogo} alt="Logo de Osonauta, agencia de marketing en Durango" className="h-10 sm:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </a>
        </div>

        <div className="col-start-3 flex justify-end items-center gap-6">
          <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/osonauta_cueva_creativa/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#E1306C] transition-colors focus-visible:ring-2 focus-visible:ring-[#E1306C] rounded p-1" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584631132308" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#1877F2] transition-colors focus-visible:ring-2 focus-visible:ring-[#1877F2] rounded p-1" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.tiktok.com/@osonauta.studio" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#00f2fe] transition-colors focus-visible:ring-2 focus-visible:ring-[#00f2fe] rounded p-1" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://wa.me/526182663567" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#25D366] transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] rounded p-1" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
            <div className="flex items-center">
              {/* Language toggle */}
              <div className="ml-4 hidden md:block">
                <LanguageToggle />
              </div>
            </div>
          </div>

          <div className="flex items-center md:hidden gap-2 z-50">
            <div className="mr-2">
              <LanguageToggle />
            </div>
            <button
              className="text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Alternar menú móvil"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`osn-navbar__mobile-menu md:hidden fixed inset-0 bg-[rgba(10,10,26,0.95)] backdrop-blur-xl border-t border-[rgba(0,180,216,0.3)] flex flex-col items-center justify-center transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } z-40`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="flex flex-col items-center gap-6 w-full px-6">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                className="block text-2xl font-display font-medium text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] hover:bg-[rgba(0,180,216,0.05)] transition-all py-3 px-4 border border-transparent hover:border-[rgba(0,180,216,0.3)] hover:shadow-[0_0_15px_rgba(0,180,216,0.2)] rounded-lg focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none w-full"
                onClick={() => setIsMobileMenuOpen(false)}
                data-i18n={link.key}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="w-full text-center mt-6">
            <a
              href="#contacto"
              className="block w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow-[0_0_20px_rgba(123,47,190,0.5)] border border-[rgba(224,64,251,0.5)] text-white py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none"
              data-i18n="hero.btn.contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hablemos
            </a>
          </li>
          <li className="w-full text-center mt-6">
            <div className="inline-flex items-center justify-center">
              <LanguageToggle />
            </div>
          </li>
          <li className="w-full flex justify-center gap-6 mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)]">
            <a href="https://www.instagram.com/osonauta_cueva_creativa/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#E1306C] transition-colors focus-visible:ring-2 focus-visible:ring-[#E1306C] rounded p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(225,48,108,0.2)]" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61584631132308" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#1877F2] transition-colors focus-visible:ring-2 focus-visible:ring-[#1877F2] rounded p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(24,119,242,0.2)]" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.tiktok.com/@osonauta.studio" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#00f2fe] transition-colors focus-visible:ring-2 focus-visible:ring-[#00f2fe] rounded p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,242,254,0.2)]" aria-label="TikTok">
              <TikTokIcon />
            </a>
            <a href="https://wa.me/526182663567" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[#25D366] transition-colors focus-visible:ring-2 focus-visible:ring-[#25D366] rounded p-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(37,211,102,0.2)]" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
