import { useEffect, useMemo, useState } from 'react';
import { X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BUSINESS_LABELS = {
  'cafe brune': 'Cafe Brune',
  charco: 'El Charco',
  comunidad: 'Comunidad',
  'dida sori': 'Dida Sori',
  maddeta: 'Madetta',
  pecaminoso: 'Pecaminoso'
};

const BUSINESS_ORDER = ['charco', 'pecaminoso', 'cafe brune', 'dida sori', 'maddeta', 'comunidad'];
const EXCLUDED_BUSINESSES = new Set(['compartido', 'fresh fades']);

const portfolioImages = import.meta.glob('../assets/portafolios/**/*.webp', {
  eager: true,
  import: 'default'
});

const toBusinessId = (folderName) => folderName.trim().toLowerCase();

const toPrettyName = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const buildGalleryByBusiness = () => {
  const grouped = {};

  Object.entries(portfolioImages).forEach(([path, src]) => {
    const parts = path.split('/');
    const folderName = parts[parts.length - 2] ?? '';
    const fileName = parts[parts.length - 1] ?? '';
    const businessId = toBusinessId(folderName);

    if (!businessId || EXCLUDED_BUSINESSES.has(businessId)) return;

    if (!grouped[businessId]) {
      grouped[businessId] = {
        id: businessId,
        name: BUSINESS_LABELS[businessId] ?? toPrettyName(businessId),
        images: []
      };
    }

    grouped[businessId].images.push({
      id: `${businessId}-${fileName}`,
      src,
      fileName
    });
  });

  const sortedBusinesses = Object.values(grouped)
    .map((business) => ({
      ...business,
      images: business.images.sort((a, b) =>
        a.fileName.localeCompare(b.fileName, 'es', { numeric: true, sensitivity: 'base' })
      )
    }))
    .sort((a, b) => {
      const indexA = BUSINESS_ORDER.indexOf(a.id);
      const indexB = BUSINESS_ORDER.indexOf(b.id);
      const orderA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
      const orderB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;

      if (orderA !== orderB) return orderA - orderB;
      return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    });

  return sortedBusinesses;
};

const galleryByBusiness = buildGalleryByBusiness();

const Gallery = ({ id }) => {
  const headerRef = useScrollReveal({ threshold: 0.1 });
  const filtersRef = useScrollReveal({ threshold: 0.2 });
  const photosRef = useScrollReveal({ threshold: 0.2 });
  const [activeBusiness, setActiveBusiness] = useState(galleryByBusiness[0]?.id ?? '');
  const [selectedImage, setSelectedImage] = useState(null);

  const activeBusinessData = useMemo(
    () => galleryByBusiness.find((business) => business.id === activeBusiness) ?? galleryByBusiness[0],
    [activeBusiness]
  );

  useEffect(() => {
    if (!selectedImage) return;

    const onEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [selectedImage]);

  return (
    <section id={id} className="osn-gallery relative py-32 bg-transparent overflow-hidden">

      <div 
        className="absolute top-10 left-[-10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full opacity-30 pointer-events-none mix-blend-screen"
        style={{
          background: 'conic-gradient(from 0deg, transparent, var(--color-primary), transparent, var(--color-secondary), transparent)',
          filter: 'blur(40px)',
          animation: 'spin 40s linear infinite'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Cabecera */}
        <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
          <Sparkles className="text-[var(--color-accent)] mx-auto mb-4 drop-shadow-[0_0_15px_rgba(255,107,53,0.8)]" size={40} style={{ animation: 'twinkle 2s infinite' }}/>
          <h2 className="text-h2 md:text-h1 font-display text-white mb-4 drop-shadow-md">
            Galeria por Negocio
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto rounded-full shadow-[0_0_10px_rgba(255,107,53,0.8)] mb-6" />
          <p className="text-body-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Navega por carpetas reales de cada marca y revisa su material visual en una vista clara, tematica y optimizada para movil.
          </p>
        </div>

        <div ref={filtersRef} className="mb-10" style={{ opacity: 0 }}>
          <h3 className="text-h3 font-display text-white border-l-4 border-[var(--color-primary)] pl-4 mb-6">
            Selecciona una marca
          </h3>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {galleryByBusiness.map((business) => {
              const isActive = business.id === activeBusinessData?.id;

              return (
                <button
                  key={business.id}
                  onClick={() => setActiveBusiness(business.id)}
                  className={`shrink-0 px-4 py-2 rounded-full border text-sm font-display tracking-wide transition-all duration-300 ${isActive
                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-[0_0_15px_rgba(123,47,190,0.5)]'
                    : 'bg-[rgba(10,10,26,0.5)] text-[var(--color-text-muted)] border-[rgba(255,255,255,0.15)] hover:text-white hover:border-[var(--color-secondary)]'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="inline-flex items-center gap-2">
                    {business.name}
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${isActive ? 'border-white/60 bg-white/20 text-white' : 'border-white/20 bg-white/5 text-[var(--color-text-muted)]'}`}>
                      {business.images.length}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div ref={photosRef} style={{ opacity: 0 }}>
          {activeBusinessData ? (
            <>
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-h3 font-display text-white border-l-4 border-[var(--color-secondary)] pl-4">
                  {activeBusinessData.name}
                </h3>
                <span className="text-small text-[var(--color-text-muted)]">
                  {activeBusinessData.images.length} imagenes
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {activeBusinessData.images.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage({ src: image.src, alt: `${activeBusinessData.name} ${index + 1}` })}
                    className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,26,0.55)] hover:border-[var(--color-secondary)] hover:shadow-[0_0_25px_rgba(0,180,216,0.25)] transition-all duration-300"
                  >
                    <img
                      src={image.src}
                      alt={`${activeBusinessData.name} ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.45)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-2 left-2 text-[10px] md:text-xs text-white/90 font-body px-2 py-1 rounded-md bg-[rgba(10,10,26,0.55)] border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Ver
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="border border-[rgba(255,255,255,0.12)] rounded-2xl p-8 text-center bg-[rgba(10,10,26,0.55)]">
              <ImageIcon className="mx-auto mb-3 text-[var(--color-secondary)]" size={30} />
              <p className="text-body text-[var(--color-text-muted)]">
                No hay imagenes disponibles en esta seccion todavia.
              </p>
            </div>
          )}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-[rgba(5,5,15,0.92)] backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar imagen"
            >
              <X size={18} className="mx-auto" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.45)]"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
