'use client';

import React, { useRef, useEffect } from 'react';

// Configuration for the starfield
const STAR_COLOR = '#FFFFFF';
const STAR_SIZE = 2; // max star size
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;
const STAR_COUNT = 1000;

interface Star {
  x: number;
  y: number;
  z: number;
}

const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const pointerX = useRef<number | null>(null);
  const pointerY = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    let animationFrameId: number;

    const resize = () => {
      const { devicePixelRatio = 1 } = window;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      starsRef.current = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * width,
        });
      }

      context.scale(devicePixelRatio, devicePixelRatio);
    };

    const mouseMove = (event: MouseEvent) => {
      pointerX.current = event.clientX;
      pointerY.current = event.clientY;
    };
    
    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      context.clearRect(0, 0, width, height);

      if (!reducedMotion.current) {
        // Star movement logic
        const focalX = pointerX.current ?? width / 2;
        const focalY = pointerY.current ?? height / 2;
        const speed = 0.1;

        starsRef.current.forEach(star => {
          const dx = focalX - star.x;
          const dy = focalY - star.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          star.x += (dx / dist) * speed;
          star.y += (dy / dist) * speed;
          star.z -= speed;

          if (
            star.z <= 0 ||
            star.x < -OVERFLOW_THRESHOLD ||
            star.x > width + OVERFLOW_THRESHOLD ||
            star.y < -OVERFLOW_THRESHOLD ||
            star.y > height + OVERFLOW_THRESHOLD
          ) {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
            star.z = width;
          }
        });
      }

      // Drawing stars
      context.fillStyle = STAR_COLOR;
      starsRef.current.forEach(star => {
        const k = width / star.z;
        const px = star.x * k + (width - width * k) / 2;
        const py = star.y * k + (height - height * k) / 2;

        if (px >= 0 && px < width && py >= 0 && py < height) {
          const size = ((1 - star.z / width) * STAR_SIZE);
          context.beginPath();
          context.arc(px, py, size * STAR_MIN_SCALE + size * (1 - STAR_MIN_SCALE), 0, Math.PI * 2);
          context.fill();
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    render();
    
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(ellipse at bottom, hsl(var(--primary)) 0%, hsl(var(--primary) / 60) 40%, #000 100%)',
      }}
      aria-hidden="true"
    />
  );
};

export default StarfieldCanvas;
