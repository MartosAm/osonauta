import { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Colores estelares permitidos
    const STAR_COLORS = ['#FFFFFF', '#00B4D8', '#C084FC'];

    let stars = [];

    const initStars = () => {
      // Ajustar tamaño del canvas al tamaño real de la ventana
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Cantidad de estrellas: ~100 en mobile, ~200 en desktop
      const isMobile = window.innerWidth < 768;
      const numStars = isMobile ? 100 : 200;

      stars = [];

      for (let i = 0; i < numStars; i++) {
        // Tamaños: 1px (común, densas) o 2px (menos común, brillantes)
        const radius = Math.random() > 0.8 ? 2 : 1;
        
        // Ciclo random de 2s a 5s asumiendo 60fps (aprox 120 a 300 frames)
        const cycleDuration = (Math.random() * 3 + 2) * 60; 
        const alphaChange = (1.0 - 0.3) / cycleDuration;

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
          alpha: Math.random() * 0.7 + 0.3, // Inicial entre 0.3 y 1.0
          alphaChange: (Math.random() > 0.5 ? 1 : -1) * alphaChange,
          minAlpha: 0.3,
          maxAlpha: 1.0,
        });
      }
    };

    const drawStars = () => {
      // Limpiar el canvas en cada frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Actualizar la opacidad para el efecto "twinkle"
        star.alpha += star.alphaChange;
        
        // Invertir ciclo cuando alcanza los límites de opacidad
        if (star.alpha <= star.minAlpha) {
          star.alpha = star.minAlpha;
          star.alphaChange *= -1;
        } else if (star.alpha >= star.maxAlpha) {
          star.alpha = star.maxAlpha;
          star.alphaChange *= -1;
        }

        // Dibujar la estrella
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Usar opacidad global para el parpadeo y asignar color
        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = star.color;
        ctx.fill();
      });

      // Restaurar opacidad global general
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(drawStars);
    };

    // Inicializar el espacio y la animación
    initStars();
    drawStars();

    // Redimensionado dinámico en caso de rotar pantalla o cambiar ventana
    const handleResize = () => {
      initStars();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup para performance (matar listeners y la animación)
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="osn-starfield fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default StarField;
