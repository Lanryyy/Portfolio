'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface DataBackgroundProps {
  className?: string;
}

export const DataBackground: React.FC<DataBackgroundProps> = ({ className }) => {
  const dataElements = useMemo(() => {
    const elements = [];
    
    // Pontos de dados (otimizado para 25 elementos)
    for (let i = 0; i < 25; i++) {
      elements.push({
        id: `point-${i}`,
        type: 'point',
        x: (i * 4) % 100,
        y: (i * 2.5) % 100,
        size: (i % 3) + 3,
        delay: i * 0.3,
        duration: 15 + (i % 5) * 5,
      });
    }
    
    // Linhas de conexão (otimizado para 10 elementos)
    for (let i = 0; i < 10; i++) {
      elements.push({
        id: `line-${i}`,
        type: 'line',
        x1: (i * 8) % 100,
        y1: (i * 9) % 100,
        x2: (i * 10) % 100,
        y2: (i * 11) % 100,
        delay: i * 0.5,
        duration: 20 + (i % 3) * 10,
      });
    }
    
    // Código flutuante (otimizado para 15 elementos)
    const codeSnippets = [
      'Python', 'SQL', 'Power BI', 'React', 'pandas', 'numpy', 'matplotlib',
      'Dashboard', 'KPI', 'ETL', 'BI', 'Analytics', 'Insights',
      'λ', 'Σ', 'π', '∞',
    ];
    
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: `code-${i}`,
        type: 'code',
        text: codeSnippets[i % codeSnippets.length],
        x: (i * 6) % 100,
        y: (i * 4) % 100,
        delay: i * 0.4,
        duration: 25 + (i % 4) * 5,
        fontSize: 0.5 + (i % 2) * 0.1,
      });
    }
    
    return elements;
  }, []);

  return (
    <div className={cn("w-screen h-screen overflow-hidden pointer-events-none", className)}>
      {/* Fundo colorido sutil para dados */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-red-900/10 opacity-30"></div>
      
      {/* Grid de fundo mais visível */}
      <div className="absolute inset-0 opacity-25">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="data-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgb(59, 130, 246)"
                strokeWidth="0.8"
                opacity="0.4"
              />
              <circle cx="0" cy="0" r="1" fill="rgb(59, 130, 246)" opacity="0.3" />
            </pattern>
            <pattern
              id="data-grid-secondary"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120"
                fill="none"
                stroke="rgb(239, 68, 68)"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#data-grid)" />
          <rect width="100%" height="100%" fill="url(#data-grid-secondary)" />
        </svg>
      </div>

      {/* Padrão hexagonal adicional */}
      <div className="absolute inset-0 opacity-8">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="hex-pattern"
              width="100"
              height="87"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="50,0 93.3,25 93.3,62 50,87 6.7,62 6.7,25"
                fill="none"
                stroke="rgb(168, 85, 247)"
                strokeWidth="0.5"
                opacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex-pattern)" />
        </svg>
      </div>

      {/* Elementos de dados animados */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          {/* Gradientes para pontos */}
          <radialGradient id="pointGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.8" />
            <stop offset="70%" stopColor="rgb(239, 68, 68)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          
          {/* Gradiente para linhas */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="rgb(239, 68, 68)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Renderizar pontos de dados */}
        {dataElements
          .filter(el => el.type === 'point')
          .map((point) => (
            <motion.circle
              key={point.id}
              cx={`${point.x}%`}
              cy={`${point.y}%`}
              r={point.size}
              fill="url(#pointGradient)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0.3, 0.6, 0],
                scale: [0, 1, 1.2, 1, 0],
                x: [0, Math.sin(point.delay) * 20, 0],
                y: [0, Math.cos(point.delay) * 15, 0]
              }}
              transition={{
                duration: point.duration,
                delay: point.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Renderizar linhas de conexão */}
        {dataElements
          .filter(el => el.type === 'line')
          .map((line) => (
            <motion.line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
      </svg>

      {/* Código flutuante */}
      <div className="absolute inset-0">
        {dataElements
          .filter(el => el.type === 'code')
          .map((code) => (
            <motion.div
              key={code.id}
              className="absolute text-blue-400/30 font-mono select-none"
              style={{
                left: `${code.x}%`,
                top: `${code.y}%`,
                fontSize: `${code.fontSize}rem`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: [0, 0.5, 0.2, 0.5, 0],
                y: [20, -20, -40, -60, -80],
                x: [0, Math.sin(code.delay) * 10, 0]
              }}
              transition={{
                duration: code.duration,
                delay: code.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {code.text}
            </motion.div>
          ))}
      </div>

      {/* Múltiplos efeitos de brilho para cobertura total */}
      <div className="absolute inset-0">
        {/* Brilho central principal */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-[800px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(239, 68, 68, 0.1) 40%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Brilhos secundários nos cantos */}
        <div className="absolute top-0 left-0">
          <motion.div
            className="w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="absolute bottom-0 right-0">
          <motion.div
            className="w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
        </div>

        {/* Ondas de dados que passam pela tela */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, transparent 20%, transparent 80%, rgba(239, 68, 68, 0.05) 100%)',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default DataBackground;
