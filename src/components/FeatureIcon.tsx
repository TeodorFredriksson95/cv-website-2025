import Image from "next/image";

interface FeatureIconProps {
  src: string;
  alt: string;
  label: string;
}

export default function FeatureIcon({ src, alt, label }: FeatureIconProps) {
  return (
    <div className="z-50 flex flex-col items-center group justify-center hover:cursor-pointer">
      <div className="relative rounded-full w-[96px] h-[96px] md:w-[120px] md:h-[120px] flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain transform scale-100 opacity-100 group-hover:scale-110 will-change-transform group-hover:opacity-100 transition-all duration-300"
        />
      </div>
        <span className="mt-2 font-bold text-xl md:text-2xl text-accent text-center transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
      {/* <span className="mt-2 sm:absolute top-[130px] font-bold text-xl md:text-3xl text-accent whitespace-nowrap transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"> */}
        {label}
      </span>
    </div>
  );
}
