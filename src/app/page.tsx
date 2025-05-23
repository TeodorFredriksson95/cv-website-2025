  import Image from "next/image";
  import { Swords, Scroll, Heart, Anvil, Gavel, Hammer, BicepsFlexed, BadgeDollarSign } from "lucide-react";

  import FeatureIcon from "@/components/FeatureIcon";
  import Section from "@/components/section";


  export default function Home() {
    return (
<div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen gap-16">
<main className="flex flex-col  row-start-2 w-full">
        
<section className="w-full px-8 py-20 sm:px-16 text-center sm:text-left">
  <div className="flex justify-center mb-10">
    <img
      src="/icons/Unidevweb_logo.png"
      alt="Unidevweb logo"
      className="w-auto max-h-20 sm:max-h-23 "
    />
  </div>

  <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-xl mx-auto gap-10">
    <a href="/games">
     <FeatureIcon
      src="/icons/gamepad2.svg"
      alt="Gamepad icon"
      label="Game Development"
    />
  </a>
    <a href="/web">
    <FeatureIcon
      src="/icons/webdev2.svg"
      alt="Web Icon"
      label="Web Development"
    />
    </a>
    <a href="/mobileandapps">
    <FeatureIcon
      src="/icons/mobile2.svg"
      alt="Mobile Icon"
      label="Mobile & Apps"
      />
      </a>
    
  </div>
</section>



        </main>
        

      </div>
    );
  }



