import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

const AnimatedBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const animate = () => {
      setParticles(prev => prev.map(particle => {
        const newX = particle.x + particle.vx;
        const newY = particle.y + particle.vy;

        return {
          ...particle,
          x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
          y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY,
        };
      }));
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-cyan-400 rounded-full opacity-60"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 2}px rgba(0, 217, 255, 0.5)`,
          }}
        />
      ))}
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
    </div>
  );
};

export default AnimatedBackground;