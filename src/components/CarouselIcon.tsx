'use client';

import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useRef } from "react";

export default function CarouselIcon({ icon: Icon, label, fill, size, isActive, onSwipe }: any) {
  const dragX = useMotionValue(0);
  const controls = useAnimation();
  const hasSwiped = useRef(false);

  if (!isActive) {
    return (
      <Icon
        style={{
          width: size,
          height: size,
          color: fill,
        }}
      />
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
          if (info.offset.x > 150) {
            onSwipe("right");
            hasSwiped.current = true;
            controls.start({ x: 0 });
          } else if (info.offset.x < -150) {
            onSwipe("left");
            hasSwiped.current = true;
            controls.start({ x: 0 });
          }
        }
      }}
      onDragEnd={() => {
        hasSwiped.current = false;
        controls.start({ x: 0 });
      }}
      animate={controls}
      className="flex flex-col items-center cursor-grab active:cursor-grabbing"
    >
      <Icon
        style={{
          width: size,
          height: size,
          color: fill,
        }}
      />
      <p className="text-center mt-2 font-bold text-sm sm:text-base" style={{ color: fill }}>
        {label}
      </p>
    </motion.div>
  );
}
