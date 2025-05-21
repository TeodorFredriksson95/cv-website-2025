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
  <div className="container mx-auto  flex sm:flex-col flex-col lg:flex-row items-center justify-center gap-10">
    
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
        I was scared <span className="font-bold text-accent italic text-xl">!@#$&</span><span className="italic">-less.</span>  But I couldn't walk away.
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
  <div className="container mx-auto sm:px-6 md:px-0 flex flex-col lg:flex-row items-center justify-center gap-10">
    
    <div className=" p-[3px] w-full max-w-sm lg:max-w-[450px] rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-xl">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl overflow-hidden">
        <iframe
          src="https://giphy.com/embed/jsSPIrsUTiRUdAJ4ua/video"
          className="rounded-xl w-full md:w-[480px] md:h-[271px] border-none"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    <div className="max-w-md text-left">
      <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-background leading-tight">
        Unreal Engine 5
      </h2>
           <h3 className="text-2xl sm:text-4xl font-extrabold font-mono text-background mb-3 leading-tight">
          Eoxania
        </h3>
      <p className="text-md text-sky-50 mb-4">
        I guess you could say it wasn't until I tried Unreal Engine 5 that game development felt like something I was actually supposed to do. Able to do.
      </p>
    </div>
    
  </div>
</Section>


<Section className="bg-background">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10">

    {/* LEFT SIDE — Textual Narrative */}
    <div className="max-w-md text-left">
      <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-4">
        From Imagination to Engine
      </h2>
      <p className="text-md text-muted-foreground mb-4">
        It all started with a D&D campaign. A few maps, scribbled lore, and a handful of NPC sketches. I wanted to bring it to life. Not just in words — but in code, animation, and logic gates.
      </p>
      <p className="text-md text-muted-foreground mb-4">
        That’s when Unreal Engine 5 clicked for me. Game development isn’t just programming — it’s <span className="italic font-semibold">the definition</span> of creative problem solving. 
        It’s math in service of magic. 
      </p>
      <p className="text-md text-muted-foreground mb-4">
        Want a sword to swing with weight and grace? That’s calculus. Want particles to shimmer just right? That’s shaders and trigonometry. But you do it anyway — because you want the game to feel <span className="italic">so damn good</span>.
      </p>
    </div>

    {/* RIGHT SIDE — Visuals (Carousel or Grid?) */}
    <div className="w-full max-w-xl">
      <div className="grid grid-cols-2 gap-4">
        <img src="/concepts/naptha.jpg" alt="D&D map" className="rounded-xl shadow-md" />
        <img src="/concepts/wolves.jpeg" alt="Character concept" className="rounded-xl shadow-md" />
        <img src="/concepts/mailman.jpg" alt="UI mockup" className="rounded-xl shadow-md" />
        <img src="/concepts/rune_golem.jpg" alt="Combat idea sketch" className="rounded-xl shadow-md" />
      </div>
      <p className="text-sm text-muted-foreground italic text-center mt-4">
        Original campaign concept art that sparked the game idea
      </p>
    </div>
  </div>
</Section>



        </main>
        

      </div>
    );
  }



