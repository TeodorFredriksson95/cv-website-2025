'use client';

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CarouselIcon({
  icon: Icon, label, fill, size, isActive, onSwipe, opacity = 1, showLabel = true, href
}: any) {
  const dragX = useMotionValue(0);
  const controls = useAnimation();
  const hasSwiped = useRef(false);
  const [windowWidth, setWindowWidth] = useState(1000);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getThreshold = () => {
    if (windowWidth < 400) return 50;
    if (windowWidth < 500) return 75;
    if (windowWidth < 768) return 100;
    return 150;
  };

  const threshold = getThreshold();

  const shadowColor = isActive ? "rgba(91,35,51,0.4)" : "rgba(0,0,0,0.15)";
  const shadowScale = isActive ? 1.5 : 0.8;
  const shadowOpacity = isActive ? 0.3 : 0.15;

  const Shadow = () => (
    <motion.svg
      className="relative mt-2 z-0"
      width={size * 1.6}
      height={size * 0.2}
      viewBox="0 0 100 20"
      animate={{ scale: shadowScale, opacity: shadowOpacity }}
    >
      <ellipse cx="50" cy="10" rx="50" ry="10" fill={shadowColor} />
    </motion.svg>
  );

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.3}
      style={{ x: dragX, userSelect: "none", touchAction: "none"  }}
      onDrag={(e, info) => {
        if (!hasSwiped.current) {
          if (info.offset.x > threshold) {
            onSwipe("right");
            hasSwiped.current = true;
            dragX.set(0);
          } else if (info.offset.x < -threshold) {
            onSwipe("left");
            hasSwiped.current = true;
            dragX.set(0);
          }
        }
      }}
      onDragEnd={() => {
        hasSwiped.current = false;
        dragX.set(0);
      }}
      onClick={() => router.push(href)}
      animate={controls}
      className="relative flex flex-col items-center will-change-transform cursor-grab active:cursor-grabbing"
    >
      <Icon
        className="relative z-10 pointer-events-none"
        style={{ width: size, height: size, color: fill }}
      />
      {showLabel && (
        <p className="relative z-10 text-center mt-2 font-semibold text-sm sm:text-base pointer-events-none" style={{ color: fill }}>
          {label}
        </p>
      )}
      <Shadow />
    </motion.div>
  );
}
