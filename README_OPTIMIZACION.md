# README de Optimizacion

Este documento resume las acciones para mantener Osonauta ligero en peso de descarga, CPU y tiempo de render.

## Objetivo

Reducir:
- peso de recursos descargados
- trabajo de render/animacion en cliente
- bloqueos de carga inicial

Manteniendo la identidad visual cosmica del sitio.

## Estado actual (31-03-2026)

Refactors aplicados:
- Se elimino la carga diferida de `Clients` porque el componente retorna `null`.
- Se estabilizo `useScrollReveal` para evitar reinstanciar `IntersectionObserver` por cambios de referencia en `options`.
- Se optimizo `StarField`:
  - menos particulas (mobile y desktop)
  - pausa al ocultar pestaña
  - respeta `prefers-reduced-motion`
- Se marcaron imagenes decorativas/no criticas con `loading="lazy"` y `decoding="async"`.
- Se optimizaron assets pesados sin cambiar composicion visual de la interfaz:
  - `comunidad/fotos 1.webp`: 3264x4928 (511.7 KB) -> 1400x2114 (82.4 KB)
  - `logos/osonauta.webp`: 1024x1536 (237.5 KB) -> 720x1080 (107.9 KB)
  - `logos/oso_vol.webp`: 1024x1536 (196.5 KB) -> 720x1080 (92.7 KB)
  - `dida sori/rs 2.webp`: 1080x1350 (306.2 KB) -> 960x1200 (199.7 KB)
  - `cafe brune rs 2.webp`: 1080x1350 (238.1 KB) -> 960x1200 (153.6 KB)

## Metricas de build

Referencia previa:
- `1746 modules transformed`
- chunk extra innecesario: `Clients-*.js`

Luego de los refactors:
- `1745 modules transformed`
- se elimino el chunk `Clients-*.js`
- build OK con `vite build`
- nueva salida de assets en `dist` con top mas bajo: max ~204 KB entre imagenes usadas en build

## Assets mas pesados detectados

Top actuales (aprox):
- `src/assets/portafolios/dida sori/rs 2.webp` -> 208 KB
- `src/assets/portafolios/cafe brune/cafe brune rs 2.webp` -> 164 KB
- `src/assets/portafolios/fresh fades /rs 14.webp` -> 120 KB
- `src/assets/logos/osonauta.webp` -> 116 KB
- `src/assets/logos/oso_vol.webp` -> 104 KB

## Flujo recomendado para imagenes

1. Redimensionar antes de subir (no usar originales gigantes).
2. Convertir a WebP con calidad controlada.
3. Usar `loading="lazy"` para contenido fuera del viewport.
4. Usar `decoding="async"` en imagenes no criticas.

## Script de conversion existente

El proyecto incluye `optimize.js` (usa `sharp`) para convertir PNG/JPG en `src/assets` a WebP.

Ejecutar:

```bash
node optimize.js
```

Nota:
- El script elimina el archivo original despues de generar `.webp`.
- Recomendado correr en una rama o con backup si se van a convertir muchos archivos.

## Checklist rapida antes de merge

- `npm run build` sin errores.
- Revisar si aparecio algun chunk nuevo innecesario.
- Validar que nuevas imagenes no superen el presupuesto de peso.
- Confirmar que animaciones pesadas no se ejecuten en segundo plano sin necesidad.

## Siguientes optimizaciones sugeridas

1. Migrar arreglos de datos hardcodeados en componentes a `src/data/*` para mantener componentes mas livianos y mantenibles.
2. Introducir presupuestos de tamaño por imagen (ejemplo: max 220 KB por imagen de portfolio).
3. Considerar placeholders ligeros (LQIP) para imagenes mas grandes del portfolio.
4. Evaluar carga por seccion basada en viewport para diferir modulos muy abajo en la pagina.
