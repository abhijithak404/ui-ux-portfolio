import React, { useEffect, useRef } from 'react';

export const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Smooth rotation
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const normY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      
      targetRotationY = normX * 0.6; 
      targetRotationX = -normY * 0.6;
    };

    const initCanvas = () => {
      // Handle High DPI Displays
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
    };
    initCanvas();

    // 3D Point class
    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      size: number;
      colorAlpha: number;
    }

    const particles: Point3D[] = [];
    const particleCount = 500; 
    const spread = 1500; 

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spread;
      const y = (Math.random() - 0.5) * spread;
      const z = (Math.random() - 0.5) * spread;
      particles.push({
        x, y, z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 3 + 2,
        colorAlpha: Math.random() * 0.4 + 0.1
      });
    }

    const render = () => {
      if (!ctx) return;
      // Use logic width/height for clearing
      ctx.clearRect(0, 0, width, height);
      
      const isDark = document.documentElement.classList.contains('dark');
      // Particles color: Dark mode = White, Light mode = Slate-900
      const baseColor = isDark ? '255, 255, 255' : '15, 23, 42'; 

      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      const cx = width / 2;
      const cy = height / 2;
      const focalLength = 500; 

      particles.forEach((p) => {
        let x1 = p.baseX * Math.cos(rotationY) - p.baseZ * Math.sin(rotationY);
        let z1 = p.baseZ * Math.cos(rotationY) + p.baseX * Math.sin(rotationY);

        let y1 = p.baseY * Math.cos(rotationX) - z1 * Math.sin(rotationX);
        let z2 = z1 * Math.cos(rotationX) + p.baseY * Math.sin(rotationX);

        z2 += 1000; // Camera offset

        const scale = focalLength / (focalLength + z2);
        const x2d = cx + x1 * scale;
        const y2d = cy + y1 * scale;

        if (z2 > 0 && scale > 0) {
          ctx.beginPath();
          ctx.arc(x2d, y2d, p.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${baseColor}, ${p.colorAlpha})`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', initCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};