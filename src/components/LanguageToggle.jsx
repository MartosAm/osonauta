import React, { useState } from 'react';
import i18n from '../i18n/i18n';

const GlobeIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 0 0 20" />
  </svg>
);

const LanguageToggle = () => {
  const [lang, setLang] = useState(typeof window !== 'undefined' ? localStorage.getItem('osn_lang') || 'es' : 'es');

  // no effect needed; initial state reads localStorage

  const handleToggle = () => {
    const next = i18n.toggleLang();
    setLang(next);
  };

  return (
    <button
      onClick={handleToggle}
      data-i18n-attr="aria-label:lang.toggleAria;title:lang.toggleTitle"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-transparent hover:border-white/20 transition-colors text-sm"
    >
      <GlobeIcon className="w-5 h-5" />
      <span className="sr-only">Change language</span>
      <span className="hidden sm:inline">{lang === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
};

export default LanguageToggle;
