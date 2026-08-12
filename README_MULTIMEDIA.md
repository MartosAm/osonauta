# Guía para Añadir Contenido Multimedia (Galería y Redes) - Osonauta

Las secciones **Galería** y **Contacto** han sido creadas con todos los efectos visuales, estructuras y animaciones espaciales solicitadas (estrellas fugaces, galaxias, nebulosas y satélites). No se ha incluido ninguna imagen o video real, solo los contenedores listos para que los agregues.

## 1. Galería Multimedia (`src/components/Gallery.jsx`)
En este archivo encontrarás dos arreglos en la parte superior:
- `videoItems`: Contiene la estructura para los videos. Para agregar uno, simplemente edita el objeto y en un futuro puedes cambiar el contenedor gris por un `iframe` de YouTube.
- `imageItems`: Contiene la estructura para las fotos. Para agregar tus fotos, importa tus imágenes (como hicimos en el Portafolio) y colócalas en la propiedad `image` o dentro del `div` correspondiente.

**Efectos visuales incluidos en Galería:**
- Lluvia de estrellas fugaces en el fondo.
- Una galaxia espiral animada hecha 100% en CSS.
- Constelaciones (puntos estelares flotantes).

## 2. Contacto y Redes (`src/components/Contact.jsx`)
La sección se diseñó como un "Centro de Mando" o panel de nave espacial, e integra tus redes sociales.
- **Formulario:** El formulario tiene todos los inputs listos. Posteriormente podrás conectarlo a un servicio como EmailJS.
- **Redes Sociales:** Los botones sociales están en una cuadrícula. Solo debes cambiar el atributo `href="#"` por las URLs reales de tu Instagram, TikTok, Facebook, etc.

**Efectos visuales incluidos en Contacto:**
- Un satélite artificial dibujado y animado por CSS orbitando la sección.
- Luces de panel de control (resplandores).

> **Nota:** El archivo `SocialMedia.jsx` se ha dejado vacío (`return null;`) porque los botones fueron integrados directamente en `Contact.jsx` para un diseño más cohesivo.
