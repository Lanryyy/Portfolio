'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier for parallax effect (-1 to 1)
  rotateOnScroll?: boolean;
  scaleOnScroll?: boolean;
  fadeOnScroll?: boolean;
  delay?: number; // Delay before animation starts (0-1)
  className?: string;
  triggerOnce?: boolean; // Animate only once when coming into view
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  speed = 0.3,
  rotateOnScroll = false,
  scaleOnScroll = false,
  fadeOnScroll = false,
  delay = 0,
  className = '',
  triggerOnce = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as any
  });

  // Apply delay to scroll progress
  const delayedProgress = useTransform(
    scrollYProgress,
    [0, delay, 1],
    [0, 0, 1]
  );

  // Movement transforms
  const y = useTransform(
    delayedProgress,
    [0, 1],
    [50 * speed, -50 * speed]
  );

  // Rotation transform
  const rotate = rotateOnScroll
    ? useTransform(delayedProgress, [0, 1], [0, 360 * speed])
    : 0;

  // Scale transform
  const scale = scaleOnScroll
    ? useTransform(delayedProgress, [0, 0.5, 1], [0.8, 1.1, 0.8])
    : 1;

  // Opacity transform
  const opacity = fadeOnScroll
    ? useTransform(delayedProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    : useTransform(delayedProgress, [0, 0.1, 0.9, 1], [0.7, 1, 1, 0.7]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y,
          rotate: rotate as MotionValue<number>,
          scale: scale as MotionValue<number>,
          opacity: opacity as MotionValue<number>
        }}
        initial={triggerOnce ? { opacity: 0, y: 50 } : undefined}
        whileInView={triggerOnce ? { opacity: 1, y: 0 } : undefined}
        transition={triggerOnce ? { duration: 0.6, delay: delay * 0.5 } : undefined}
        viewport={triggerOnce ? { once: true, margin: '-10%' } : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxContainer;