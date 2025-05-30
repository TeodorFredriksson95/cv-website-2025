"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import AppsIcon from "../icons/apps_3.svg";
import WebIcon from "../icons/webdev_3.svg";
import GamesIcon from "../icons/games_3.svg";
import StudentIcon from "../icons/student_3.svg";
import CarouselIcon from "./CarouselIcon";

const icons = [
  { Icon: GamesIcon, label: "Games", href: "/gamedevelopment" },
  { Icon: WebIcon, label: "Web", href: "/webdevelopment" },
  { Icon: AppsIcon, label: "Mobile", href: "/mobiledevelopment" },
  { Icon: StudentIcon, label: "Education", href: "/education" },
];
export default function HomePageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1000);
  const count = icons.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconSize = windowWidth < 500 ? 60 : windowWidth < 768 ? 80 : 100;
  const xOffset = windowWidth < 500 ? 100 : windowWidth < 768 ? 140 : 180;
  const yOffset = windowWidth < 500 ? 40 : windowWidth < 768 ? 50 : 80;

  const handleSwipe = (direction: "left" | "right") => {
    setActiveIndex((prev) =>
      direction === "left" ? (prev + 1) % count : (prev - 1 + count) % count
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full max-w-[400px] aspect-square perspective-1000">
        {icons.map((item, index) => {
          const { Icon } = item;
          const position = (index - activeIndex + count) % count;

          let dx = 0,
            dy = 0,
            scale = 1,
            opacity = 1,
            fill = "#5B2333";

          if (position === 0) {
            dx = 0;
            dy = yOffset;
            scale = 1.3;
            opacity = 1;
            fill = "#0F8B8D";
          } else if (position === 1) {
            dx = xOffset;
            dy = -10;
            scale = 0.8;
            opacity = 0.8;
          } else if (position === 2) {
            dx = 0;
            dy = -yOffset;
            scale = 0.5;
            opacity = 0.5;
          } else if (position === 3) {
            dx = -xOffset;
            dy = -10;
            scale = 0.8;
            opacity = 0.8;
          }

          const isActive = position === 0;
          const showLabel = position !== 2;

          return (
            <motion.div
              key={index}
              animate={{ x: dx, y: dy, scale, opacity }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <CarouselIcon
                icon={Icon}
                label={item.label}
                href={item.href}
                fill={fill}
                size={iconSize}
                isActive={isActive}
                onSwipe={handleSwipe}
                opacity={opacity}
                showLabel={showLabel}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
