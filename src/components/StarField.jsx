import { useEffect, useRef } from 'react';

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrameId = 0;
    let isAnimating = false;
    let speed = 2;

    // Colores estelares permitidos
    const STAR_COLORS = ['#FFFFFF', '#00B4D8', '#C084FC', '#FF6B35'];

    let stars = [];

    const createStar = (zVal) => {
      // Coordenadas esparcidas alrededor del centro
      return {
        x: (Math.random() - 0.5) * canvas.width * 2.5,
        y: (Math.random() - 0.5) * canvas.height * 2.5,
        z: zVal !== undefined ? zVal : canvas.width,
        pz: zVal !== undefined ? zVal : canvas.width,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
      };
    };

    const initStars = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reducimos densidad para bajar consumo en CPU/GPU, sobre todo en mobile
      const isMobile = window.innerWidth < 768;
      const numStars = isMobile ? 90 : 240;
      speed = isMobile ? 1.2 : 2;

      stars = [];
      for (let i = 0; i < numStars; i++) {
        // Distribuimos equitativamente las estrellas en profundidad inicial
        stars.push(createStar(Math.random() * canvas.width));
      }
    };

    const drawStars = () => {
      // Limpiamos el canvas sin rellenarlo de negro, así permitimos que se vea la nebulosa CSS de fondo
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        // Acercar la estrella hacia el observador
        star.z -= speed;

        // Si la estrella "pasa" la cámara virtual, reaparece en el horizonte
        if (star.z <= 1) {
          const newStar = createStar(canvas.width);
          star.x = newStar.x;
          star.y = newStar.y;
          star.z = newStar.z;
          star.pz = newStar.pz;
        }

        // Proyectar la posición 3D (z) actual en el plano 2D (pantalla)
        const zFactor = 160.0 / star.z;
        const px = star.x * zFactor + centerX;
        const py = star.y * zFactor + centerY;

        // Proyectar la posición 3D ANTERIOR (pz) para dibujar una línea de vuelo
        const pzFactor = 160.0 / star.pz;
        const ppx = star.x * pzFactor + centerX;
        const ppy = star.y * pzFactor + centerY;

        // Guardamos el z recién renderizado como anterior para el prox frame
        star.pz = star.z;

        // Dibujo de la estela brillante
        ctx.beginPath();
        // Usamos la posición anterior y actual para la línea
        ctx.moveTo(ppx, ppy);
        ctx.lineTo(px, py);
        ctx.lineWidth = Math.min(2.5, Math.max(0.5, zFactor * 1.2)); // Más gruesa si está más cerca
        ctx.strokeStyle = star.color;
        
        // Difuminamos la estrella para que no se vea como líneas duras
        // Simulando resplandor ligero
        ctx.shadowBlur = zFactor * 3;
        ctx.shadowColor = star.color;

        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(drawStars);
    };

    const startAnimation = () => {
      if (isAnimating || reduceMotionQuery.matches) return;
      isAnimating = true;
      drawStars();
    };

    const stopAnimation = () => {
      if (!isAnimating) return;
      isAnimating = false;
      cancelAnimationFrame(animationFrameId);
    };

    // Inicializar el espacio y la animación
    initStars();
    startAnimation();

    const handleResize = () => {
      initStars();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    const handleReducedMotionChange = () => {
      if (reduceMotionQuery.matches) {
        stopAnimation();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        initStars();
        startAnimation();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    reduceMotionQuery.addEventListener('change', handleReducedMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      reduceMotionQuery.removeEventListener('change', handleReducedMotionChange);
      stopAnimation();
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
