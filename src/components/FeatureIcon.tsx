import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureIconProps {
  src: string;
  alt: string;
  label: string;
    delay?: number;
}

export default function FeatureIcon({ src, alt, label }: FeatureIconProps) {
  return (
   <div className="z-50 flex flex-col items-center group justify-center hover:cursor-pointer w-[60px] sm:w-[100px] md:w-[80px]">
  <div className="relative w-full aspect-square">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain will-change-transform transform scale-100 opacity-100 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"
    />
  </div>
  <span className="mt-2 font-bold text-md sm:text-xl  text-center will-change-transform transform scale-90 opacity-90 group-hover:scale-100 group-hover:text-accent group-hover:opacity-100 transition-all duration-300">
    {label}
  </span>
</div>

  );
}
