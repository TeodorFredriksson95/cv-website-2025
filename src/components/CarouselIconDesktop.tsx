'use client';

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type CarouselIconProps = {
  icon?: React.ElementType;
  label: string;
  fill?: string;
  size?: number;
  isActive: boolean;
  showLabel?: boolean;
  href: string;
};

export default function CarouselDesktopIcon({
  icon: Icon, label, fill, size = 40, isActive, showLabel = true, href
}: CarouselIconProps) {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState(1000);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shadowColor = "rgba(0,0,0,0.8)";
  const shadowScale = isHovered ? 1.6 : (isActive ? 1.5 : 0.8);
  const shadowOpacity = isHovered ? 0.4 : (isActive ? 0.3 : 0.15);

  const Shadow = () => (
    <motion.svg
      className="relative mt-2 z-0"
      width={size * 1.6}
      height={size * 0.2}
      viewBox="0 0 100 20"
      animate={{ scale: shadowScale, opacity: shadowOpacity }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <ellipse cx="50" cy="10" rx="50" ry="10" fill={shadowColor} />
    </motion.svg>
  );

  return (
    <motion.div
      style={{ userSelect: "none", touchAction: "none" }}
      onClick={() => router.push(href)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
      className="relative flex flex-col items-center will-change-transform hover:cursor-pointer"
      whileHover={{ scale: 1 }}
    >
      {Icon && (
        <Icon
          className="relative z-10"
          style={{ width: size, height: size, color: fill }}
        />
      )}
      {showLabel && (
        <p className="relative z-10 text-center mt-2 font-semibold text-xl sm:text-2xl lg:text-2xl" style={{ color: fill }}>
          {label}
        </p>
      )}
      <Shadow />
    </motion.div>
  );
}
