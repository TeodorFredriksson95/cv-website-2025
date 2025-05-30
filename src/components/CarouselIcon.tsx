'use client';

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function CarouselIcon({ icon: Icon, label, fill, size, isActive, onSwipe, opacity = 1 }: any) {
  const dragX = useMotionValue(0);
  const controls = useAnimation();
  const hasSwiped = useRef(false);
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getThreshold = () => {
    if (windowWidth < 500) return 75;
    if (windowWidth < 768) return 100;
    return 150;
  };

  const threshold = getThreshold();

  const shadowColor = isActive ? "rgba(91,35,51,0.4)" : "rgba(0,0,0,0.15)";
  const shadowScale = isActive ? 1.5 : 0.8;
  const shadowOpacity = isActive ? 0.3 : 0.15;

  if (!isActive) {
    return (
      <div className="relative flex flex-col items-center">
        <svg
          className="absolute bottom-0 left-1/2 will-change-transform -translate-x-1/2 z-0"
          width={size * 1.2}
          height={size * 0.2}
          viewBox="0 0 100 20"
          style={{ opacity: shadowOpacity }}
        >
          <ellipse cx="50" cy="10" rx="50" ry="10" fill={shadowColor} />
        </svg>

        <Icon
          className="relative z-10"
          style={{
            width: size,
            height: size,
            color: fill,
          }}
        />
      </div>
    );
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.3}
      style={{ x: dragX }}
      onDrag={(e, info) => {
        if (!hasSwiped.current) {
          if (info.offset.x > threshold) {
            onSwipe("right");
            hasSwiped.current = true;
            dragX.set(0); // Reset position immediately
          } else if (info.offset.x < -threshold) {
            onSwipe("left");
            hasSwiped.current = true;
            dragX.set(0); // Reset position immediately
          }
        }
      }}
      onDragEnd={() => {
        hasSwiped.current = false;
        dragX.set(0); // Always reset the drag position
      }}
      animate={controls}
      className="relative flex flex-col items-center will-change-transform cursor-grab active:cursor-grabbing"
    >
      <motion.svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
        width={size * 1.2}
        height={size * 0.2}
        viewBox="0 0 100 20"
        animate={{
          scale: shadowScale,
          opacity: shadowOpacity,
        }}
      >
        <ellipse cx="50" cy="10" rx="50" ry="10" fill={shadowColor} />
      </motion.svg>

      <Icon
        className="relative z-10"
        style={{
          width: size,
          height: size,
          color: fill,
        }}
      />
      <p className="relative z-10 text-center mt-2 will-change-transform font-semibold text-sm sm:text-base" style={{ color: fill }}>
        {label}
      </p>
    </motion.div>
  );
}
