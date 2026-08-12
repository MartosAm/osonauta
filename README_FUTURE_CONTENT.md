# Guía para Añadir Contenido Multimedia Futuro - Osonauta

Este archivo fue creado para explicar cómo actualizar o inyectar las verdaderas imágenes y videos en las nuevas secciones de la galería multimedia y redes.

## 1. Sección Galería Multiformato (`src/components/Gallery.jsx`)
Esta sección se diseñó como un cinturón de asteroides donde cada roca es realmente una pieza visual.
- **Videos de YouTube:** Dentro del archivo `Gallery.jsx`, vas a notar objetos llamados `const videoItems`. Solo tienes que cambiar la propiedad `youtubeId` por el ID real del video. El diseño usará el `iframe` ligero con lazy loading automáticamente.
- **Imágenes Reales:** Estarán bajo los `const imageItems`. Verás rutas "placeholder". Intercambia esas rutas por los `import` reales apuntando a tus carpetas dentro de `src/assets/`.

## 2. Sección Redes / Contacto (`src/components/Contact.jsx` / `SocialMedia.jsx`)
- Puedes combinar `SocialMedia` dentro de `Contact` para tener un "Centro de Control". 
- **Formulario:** El formulario tiene un diseño tipo "Panel de Nave Espacial". Si vas a conectarlo a algún sistema (EmailJS, Formspree, etc.), deberás agregar el atributo `action=""` o manejar la lógica en el `onSubmit` dentro del `<form>`.
- **Enlaces Redes:** Simplemente reemplaza el valor `href="#"` de cada botón social (Instagram, TikTok, WhatsApp) en el archivo por tu URL real.

> **Nota:** Todos los efectos CSS (cometas, satélites, nebulosas) son componentes independientes creados mediante CSS puro, así que no interferirán con tu contenido. No borres los contenedores `div` que tengan nombres de clases como `meteor-shower`, `galaxy-swirl` o `orbit-satellite`.
