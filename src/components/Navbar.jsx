import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import navLogo from '../assets/images/osoblancoletras.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`osn-navbar fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(10,10,26,0.85)] backdrop-blur-md border-b border-[rgba(123,47,190,0.4)] py-4'
          : 'bg-transparent py-6'
      }`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#inicio" 
          className="osn-navbar__brand flex items-center gap-3 z-50 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded hover:scale-105 transition-transform"
          aria-label="Ir al inicio"
        >
          <img src={navLogo} alt="Logo Osonauta" className="h-10 sm:h-12 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
        </a>

        <ul className="osn-navbar__nav hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[var(--color-text-primary)] font-body font-medium hover:text-[var(--color-secondary)] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded px-2 py-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="osn-btn osn-btn--outline border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none"
          >
            Hablemos
          </a>
        </div>

        <button
          className="md:hidden text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors z-50 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Alternar menú móvil"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`osn-navbar__mobile-menu md:hidden fixed inset-0 bg-[var(--color-bg-base)] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                className="block text-2xl font-display font-medium text-[var(--color-text-primary)] hover:text-[var(--color-secondary)] transition-colors py-4 focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="w-full text-center mt-4">
            <a
              href="#contacto"
              className="block w-full bg-[var(--color-primary)] text-white py-4 rounded-full font-bold text-xl hover:bg-[var(--color-primary-dark)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-secondary)] focus-visible:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
