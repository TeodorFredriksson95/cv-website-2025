  import Image from "next/image";
  import { Swords, Scroll, Heart, Anvil, Gavel, Hammer, BicepsFlexed, BadgeDollarSign } from "lucide-react";

  import FeatureIcon from "@/components/FeatureIcon";
  import Section from "@/components/section";


  export default function Home() {
    return (
<div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen gap-16">
<main className="flex flex-col gap-[32px] row-start-2 w-full">
        
<section className="w-full px-8 py-20 sm:px-16 text-center sm:text-left">
  <h1 className="mb-10 text-shadow-md text-5xl font-sans text-center font-extrabold leading-none tracking-tight text-accent sm:text-6xl md:text-8xl lg:text-8xl dark:text-white">
    Unidevweb
  </h1>
  <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-xl mx-auto gap-10">
     <FeatureIcon
      src="/icons/gamepad2.svg"
      alt="Gamepad icon"
      label="Game Development"
    />
    <FeatureIcon
      src="/icons/webdev2.svg"
      alt="Web Icon"
      label="Web Development"
    />
    <FeatureIcon
      src="/icons/mobile2.svg"
      alt="Mobile Icon"
      label="Mobile & Apps"
    />
  </div>
</section>

<Section>
  <div className="container mx-auto px-6  flex sm:flex-col flex-col lg:flex-row items-center justify-center gap-10">
    
    {/* LEFT COLUMN (image + caption) */}
<div className="flex flex-col items-center w-full max-w-sm lg:max-w-[450px]">
      <div className="relative aspect-[4.5/5] sm:aspect-[4/5] border-8 border-primary w-full overflow-visible">
        <img
          src="/icons/protagonist.png"
          alt="Main visual"
          className="absolute inset-0 w-full h-full scale-[1.5] -translate-x-[20%] -translate-y-[10%]"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground italic text-center px-2">
        Shoutout to one of Broken Seal's artists, <span className="text-accent font-medium">Nour</span>, for sharing her work on the concept art.
      </p>
    </div>

    {/* RIGHT COLUMN (text content) */}
    <div className="max-w-md text-left">
      <div>

      <div className="flex flex-row items-center md:justify-end gap-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-accent leading-tight">
          Game Development
        </h2>
          <img
    src="/assets/attackleft.webp"
    alt="Animated character"
    className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] self-end"
  />
        {/* <Image
          className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] self-end"
          src="/icons/gamepad2.svg"
          alt="Game Pad Icon"
          width={75}
          height={75}
        /> */}
      </div>
        <h3 className="text-2xl sm:text-4xl font-extrabold font-mono text-black mb-3 leading-tight">
          Broken Seal Studio
        </h3>
      </div>


      {/* Paragraphs */}
      <p className=" font-semibold font-mono mb-4">
        I still remember being 6 years old, sitting on the edge of my seat, watching my brother play Diablo II.
        I was scared <span className="font-bold text-accent italic text-xl">!@#$&</span>-less.  But I couldn't walk away.
      </p>
      <p className="text-md text-muted-foreground mb-4">
      I still remember begging my mother to enter the Cobra Car cheat codes in Age of Empires for me —
        I had to ask her, because the instructions were in English, and I could barely tie my own shoes. And I remember when a classroom full of teenagers got swept away by Pokémon Red emulators.
      </p>
      <p className="text-md text-muted-foreground mb-4">
        Games have always been the proverbial campfire around which I have huddled up close to, joined by friends and family.
        Maybe that’s why I fell in love with making them. To spread the joy that's been given to me.
      </p>
      <p className="text-md text-muted-foreground mb-4">
        Now, together with a wonderfully talented group of people going under the working name <span className="text-3xl text-primary font-extrabold">Polymorphic Games,</span> we've set out on a quest of our own to:
      </p>

      {/* Quest List */}
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Heart stroke="#a12e2c" fill="#e02422" className="w-12 h-12" />
          <span><span className="font-semibold">Build a game:</span> 0/1</span>
        </li>
        <li className="flex items-center gap-2">
          <Swords stroke="#363535" fill="black" className="w-12 h-12" />
          <span><span className="font-semibold">Charm an investor:</span> 0/1</span>
        </li>
        <li className="flex items-center gap-2">
          <Hammer fill="gold" className="w-12 h-12" />
          <span><span className="font-semibold">Launch a studio:</span> 0/1</span>
        </li>
        <li className="flex items-center gap-2">
          <BadgeDollarSign fill="#13c213" className="w-12 h-12" />
          <span><span className="font-semibold">Get a job</span> 0/1</span>
        </li>
      </ul>
    </div>
  </div>
</Section>

<Section className="bg-primary">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
    
    <div className="p-[3px] w-full max-w-sm lg:max-w-[450px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-xl">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl overflow-hidden">
        <iframe
          src="https://giphy.com/embed/jsSPIrsUTiRUdAJ4ua/video"
          className="rounded-xl w-[480px] h-[271px] border-none"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="max-w-md text-left">
      <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-background leading-tight">
        Unreal Engine 5
      </h2>
      <p className="text-md text-sky-50 mb-4">
        Now, together with a wonderfully talented group of people going under the working name we've set out on a quest of our own to:
      </p>
    </div>
    
  </div>
</Section>


        </main>
        

      </div>
    );
  }



