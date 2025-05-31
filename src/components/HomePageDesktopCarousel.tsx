"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import AppsIcon from "../icons/apps_3.svg";
import WebIcon from "../icons/webdev_3.svg";
import GamesIcon from "../icons/games_3.svg";
import StudentIcon from "../icons/student_3.svg";
import CarouselIcon from "./CarouselIcon";
import CarouselDesktopIcon from "./CarouselIconDesktop";

const icons = [
  { Icon: GamesIcon, label: "Games", href: "/gamedevelopment" },
  { Icon: WebIcon, label: "Web", href: "/webdevelopment" },
  { Icon: AppsIcon, label: "Mobile", href: "/mobiledevelopment" },
  { Icon: StudentIcon, label: "Education", href: "/education" },
];

export default function HomePageDesktopCarousel() {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconSize = windowWidth < 500 ? 60 : windowWidth < 768 ? 80 : windowWidth < 950 ? 70 : 100;
  const xOffset = windowWidth < 500 ? 100 : windowWidth < 768 ? 120 : windowWidth < 950 ? 120 : 180;
  const yOffset = windowWidth < 500 ? 60 : windowWidth < 768 ? 80 : 80;

  const positions = [
    { dx: 0, dy: yOffset, scale: 1.3, opacity: 1 },
    { dx: xOffset, dy: -10, scale: 0.8, opacity: 0.8 },
    { dx: 0, dy: -yOffset, scale: 0.5, opacity: 0.8 },
    { dx: -xOffset, dy: -10, scale: 0.8, opacity: 0.8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex flex-col items-center"
    >
      <div className="relative w-full max-w-[300px] md:max-w-[300px] aspect-square mb-10 md:mb-0">
        {icons.map((item, index) => {
          const pos = positions[index % positions.length];

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{ x: pos.dx, y: pos.dy, scale: pos.scale, opacity: pos.opacity }}
              whileHover={{ scale: pos.scale * 1.15, opacity: pos.opacity * 1.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <CarouselDesktopIcon
                icon={item.Icon}
                label={item.label}
                href={item.href}
                fill="#5B2333"
                size={iconSize}
                isActive={false}
                showLabel={pos.opacity > 0.6}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
