'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface DataVisualizationsProps {
  className?: string;
}

export const DataVisualizations: React.FC<DataVisualizationsProps> = ({ className }) => {
  const chartData = useMemo(() => {
    const barChart = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      height: 20 + (i * 6) + (i % 2) * 8,
      delay: i * 0.2,
    }));

    const lineChart = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: (i / 7) * 100,
      y: 30 + (i % 3) * 10 + (i % 2) * 5,
    }));

    const pieData = [
      { value: 40, color: 'rgb(59, 130, 246)', offset: 0 },
      { value: 30, color: 'rgb(239, 68, 68)', offset: 40 },
      { value: 30, color: 'rgb(34, 197, 94)', offset: 70 },
    ];

    return { barChart, lineChart, pieData };
  }, []);

  return (
    <div className={cn("w-screen h-screen overflow-hidden pointer-events-none", className)}>
      {/* Gráfico de Barras (canto superior esquerdo) */}
      <div className="absolute top-20 left-20 opacity-30">
        <svg width="120" height="80" viewBox="0 0 120 80">
          {chartData.barChart.map((bar, index) => (
            <motion.rect
              key={bar.id}
              x={index * 14 + 5}
              y={80 - bar.height}
              width="10"
              height={bar.height}
              fill="rgb(59, 130, 246)"
              initial={{ height: 0, y: 80 }}
              animate={{ 
                height: [0, bar.height, bar.height * 0.8, bar.height],
                y: [80, 80 - bar.height, 80 - (bar.height * 0.8), 80 - bar.height]
              }}
              transition={{
                duration: 3,
                delay: bar.delay,
                repeat: Infinity,
                repeatDelay: 5,
                ease: "easeInOut",
              }}
            />
          ))}
          {/* Eixos do gráfico */}
          <line x1="5" y1="5" x2="5" y2="75" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
          <line x1="5" y1="75" x2="115" y2="75" stroke="rgb(59, 130, 246)" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Gráfico de Linha (canto superior direito) */}
      <div className="absolute top-20 right-20 opacity-30">
        <svg width="120" height="80" viewBox="0 0 120 80">
          <motion.polyline
            points={chartData.lineChart.map(point => `${point.x},${point.y}`).join(' ')}
            fill="none"
            stroke="rgb(239, 68, 68)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Pontos do gráfico */}
          {chartData.lineChart.map((point, index) => (
            <motion.circle
              key={point.id}
              cx={point.x}
              cy={point.y}
              r="2"
              fill="rgb(239, 68, 68)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 2,
                repeat: Infinity,
                repeatDelay: 7,
              }}
            />
          ))}
          {/* Grid do gráfico */}
          <defs>
            <pattern id="lineGrid" width="20" height="16" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 16" fill="none" stroke="rgb(239, 68, 68)" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="120" height="80" fill="url(#lineGrid)" opacity="0.3" />
        </svg>
      </div>

      {/* Gráfico Pizza (canto inferior esquerdo) */}
      <div className="absolute bottom-20 left-20 opacity-30">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <g transform="translate(40,40)">
            {chartData.pieData.map((slice, index) => {
              const angle = (slice.value / 100) * 360;
              const startAngle = (slice.offset / 100) * 360;
              const endAngle = startAngle + angle;
              
              const x1 = Math.cos((startAngle - 90) * Math.PI / 180) * 30;
              const y1 = Math.sin((startAngle - 90) * Math.PI / 180) * 30;
              const x2 = Math.cos((endAngle - 90) * Math.PI / 180) * 30;
              const y2 = Math.sin((endAngle - 90) * Math.PI / 180) * 30;
              
              const largeArcFlag = angle > 180 ? 1 : 0;
              
              const pathData = [
                `M 0 0`,
                `L ${x1} ${y1}`,
                `A 30 30 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');

              return (
                <motion.path
                  key={index}
                  d={pathData}
                  fill={slice.color}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.1, 1] }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: "backOut",
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Indicadores de KPI (canto inferior direito) */}
      <div className="absolute bottom-20 right-20 opacity-35">
        <div className="space-y-2">
          {[
            { label: 'Dados', value: '1.2M', color: 'rgb(59, 130, 246)' },
            { label: 'Insights', value: '847', color: 'rgb(239, 68, 68)' },
            { label: 'Reports', value: '23', color: 'rgb(34, 197, 94)' },
          ].map((kpi, index) => (
            <motion.div
              key={kpi.label}
              className="flex items-center space-x-2 text-xs font-mono"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                x: [20, 0, 0, -20]
              }}
              transition={{
                duration: 6,
                delay: index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: kpi.color }}
              />
              <span style={{ color: kpi.color }}>{kpi.label}:</span>
              <span className="text-white">{kpi.value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Matriz de dados (otimizada) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15">
        <div className="grid grid-cols-8 gap-1">
          {Array.from({ length: 64 }, (_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-sm"
              style={{
                backgroundColor: [
                  'rgb(59, 130, 246)',
                  'rgb(239, 68, 68)',
                  'rgb(34, 197, 94)',
                  'rgb(168, 85, 247)'
                ][i % 4]
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [1, 1.8, 1]
              }}
              transition={{
                duration: 3 + (i % 3) * 2,
                delay: (i % 8) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Linhas de código em movimento nas laterais */}
      <div className="absolute left-0 top-1/4 opacity-20">
        {['console.log(data)', 'df.groupby()', 'SELECT COUNT(*)', 'FROM users'].map((code, index) => (
          <motion.div
            key={index}
            className="text-blue-400 font-mono text-sm mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: ["-100px", "0px", "0px", "-100px"],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
              duration: 8,
              delay: index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="absolute right-0 top-1/3 opacity-20">
        {['import pandas as pd', 'WHERE status = 1', 'Power BI Dashboard', 'matplotlib.pyplot'].map((code, index) => (
          <motion.div
            key={index}
            className="text-red-400 font-mono text-sm mb-4 text-right"
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: ["100px", "0px", "0px", "100px"],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
              duration: 10,
              delay: index * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DataVisualizations;
