'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier for parallax effect (-1 to 1)
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: string[]; // Custom offset values
  className?: string;
  id?: string; // HTML id attribute
  enableRotation?: boolean;
  enableScale?: boolean;
  enableOpacity?: boolean;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  offset = ['0px', '200px'],
  className = '',
  id,
  enableRotation = false,
  enableScale = false,
  enableOpacity = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as any
  });

  // Transform scroll progress based on speed and direction
  const getTransformRange = () => {
    const baseRange = [-200 * speed, 200 * speed];
    
    switch (direction) {
      case 'down':
        return [baseRange[1], baseRange[0]]; // Reverse for down movement
      case 'left':
        return baseRange;
      case 'right':
        return [baseRange[1], baseRange[0]];
      default: // 'up'
        return baseRange;
    }
  };

  const transformRange = getTransformRange();

  // Primary movement transform
  const y = useTransform(scrollYProgress, [0, 1], direction === 'up' || direction === 'down' ? transformRange : [0, 0]);
  const x = useTransform(scrollYProgress, [0, 1], direction === 'left' || direction === 'right' ? transformRange : [0, 0]);

  // Optional effects - always create hooks, but conditionally apply values
  const rotate = useTransform(
    scrollYProgress, 
    [0, 1], 
    enableRotation ? [0, 360 * speed] : [0, 0]
  );
  const scale = useTransform(
    scrollYProgress, 
    [0, 1], 
    enableScale ? [1, 1 + (0.2 * Math.abs(speed))] : [1, 1]
  );
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    enableOpacity ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  return (
    <div ref={ref} className={className} id={id}>
      <motion.div
        style={{
          y,
          x,
          rotate: rotate as MotionValue<number>,
          scale: scale as MotionValue<number>,
          opacity: opacity as MotionValue<number>
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;