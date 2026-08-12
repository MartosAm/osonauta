# Osonauta — Arquitectura y Secciones de la Web 🚀

Este documento detalla cada uno de los componentes y secciones visuales que conforman la página web de **Osonauta**, su propósito dentro del storytelling espacial y qué tecnología implementan para brillar.

---

## Estructura General

### 1. `StarField.jsx` (El Universo de Fondo)
*   **Propósito:** Provee el fondo inmersivo animado que da la sensación de estar flotando en el espacio real (efecto parallax de estrellas).
*   **Detalle Técnico:** Renderizado separado para no penalizar el *main tree* de React, manteniendo la estética de constelaciones fijas en la parte posterior (z-index bajo).

### 2. `Navbar.jsx` (Navegación Táctica / HUD)
*   **Propósito:** Es la barra superior anclada que permite viajar rápido (`scroll`) entre las constelaciones (secciones) de la web.
*   **Detalle Técnico:** Cuenta con efecto glassmorphism (`backdrop-blur`) que aparece sólo tras hacer scroll y posee un menú interactivo `hamburger` (ícono `Menu`/`X` de Lucide) completamente animado en móvil.

---

## Secciones (Módulos de la Nave)

### 3. `Hero.jsx` (Lanzamiento / Inicio) `#inicio`
*   **Propósito:** La pantalla de bienvenida de alto impacto. Engancha visualmente al usuario visitante presentándole tu logotipo de Oso Astronauta al centro de un espectacular sistema holográfico y estelar.
*   **Detalle Técnico:** Recrea un planeta en 3D y anillos u órbitas en movimiento exclusivamente con CSS avanzado (sombras progresivas, transformaciones tridimensionales). Tiene etiquetado superior de `fetchPriority="high"` para el logo (óptimo LCP).

### 4. `AboutUs.jsx` (Conoce la Cueva) `#nosotros`
*   **Propósito:** Presenta al equipo detrás de la agencia, sus formaciones, su propuesta de valor (movilidad, academia y estrategia probada) en tarjetas flotantes tipo estaciones espaciales.
*   **Detalle Técnico:** Presenta animaciones cinéticas sutiles `onHover` (las tarjetas suben suavemente) y efectos tipo destello de nebulosas (`radial-gradient` en fondos secundarios).

### 5. `Services.jsx` (Nuestros Servicios / Radar) `#servicios`
*   **Propósito:** Describe puntualmente qué soluciones comerciales entregan (ej. fotografía de producto, video comercial, manejo de redes).
*   **Detalle Técnico:** Tarjetas minimalistas envueltas con bordes estilo HUD de ciencia ficción.

### 6. `Process.jsx` (Bitácora de Despegue) `#proceso`
*   **Propósito:** Explica a los prospectos el "paso a paso" de trabajar con Osonauta (Contacto -> Estrategia -> Shooting -> Venta) para establecer confianza y profesionalismo.
*   **Detalle Técnico:** Línea de tiempo visual (Timeline) usando flexbox o grids que en móvil se pliega de manera vertical.

### 7. `Gallery.jsx` (Galería por Negocio / Portafolio) `#portafolio`
*   **Propósito:** Muestra "carpetas reales" del material visual (`.webp`) tomado a negocios específicos (El Charco, Pecaminoso, etc.) con sus debidas nomenclaturas y una vista modal elegante (Click & Expand).
*   **Detalle Técnico:** Reemplazó recientemente a un portfolio genérico repetido. Obtiene automáticamente las fotos usando `import.meta.glob` ordenándolas con scripts propios. Posee filtros por clic horizontales que funcionan espléndido en swiping touch.

### 8. `Testimonials.jsx` (Transmisiones Aliadas) `#testimonios`
*   **Propósito:** Carrusel social de validación (Reviews) usando testimonios de clientes con sus respectivos logos como si fueran sistemas solares enteros.
*   **Detalle Técnico:** Utiliza rotación y ocultamiento (`opacity / rotate-90 / scale`) para intercambiar los planetas-logos con CSS fluido en 3D. Incorporó un estado de `isPaused` vía touch/mouse para mejorar el UX de lectura en móviles.

### 9. `SocialMedia.jsx` (Red de Satélites) `#redes`
*   **Propósito:** Fomentar el cruce de audiencias derivando a tus visitantes hacia tu canal de YouTube o redes externas.
*   **Detalle Técnico:** Contiene tarjetas inteligentes (YouTube Shorts caseros intercativos). Para no dañar los Core Web Vitals, implementamos Lazy Load: los videos se quedan estáticos y muy ligeros hasta que al hacer *Clic* en la tarjeta, entra el `Iframe` real pesado ahorrándote 5-20 MB de carga inicial.

### 10. `Contact.jsx` (Frecuencia Abierta) `#contacto`
*   **Propósito:** El formulario final estratégico para captación de clientes. (Call To Action principal).
*   **Detalle Técnico:** Suele incorporar campos estilizados en neón con botones que emiten glows, asegurando que mandar un mensaje parezca iniciar el cohete.

---

> *"Desde enero nos lanzamos al universo creativo... Cada proyecto es una misión. Cada imagen, un resultado."* 🛸