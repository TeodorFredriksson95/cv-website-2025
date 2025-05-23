  'use client'
  import Image from "next/image";
  import { Swords, Scroll, Heart, Anvil, Gavel, Hammer, BicepsFlexed, BadgeDollarSign } from "lucide-react";

  import FeatureIcon from "@/components/FeatureIcon";
  import Section from "@/components/section";


  export default function GamesPage () {
    return (
<div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen gap-16">
<main className="flex flex-col  row-start-2 w-full">
        
  <Section className="text-center max-w-3xl mb-20 mx-auto">
    <h1 className="text-3xl sm:text-5xl font-extrabold font-sans text-accent leading-tight">Web Development</h1>
        <FeatureIcon
          src="/icons/webdev2.svg"
          alt="Web Icon"
          label=""
        />
    <p className="text-lg font-mono text-muted-foreground font-semibold">
      From backend APIs to frontend polish — my goal is to build systems that solves a problem and feel easy to use.
    </p>
  </Section>

<div className="flex flex-row items-center justify-center gap-20">
  <img
    src="/assets/nour_forward_bs.png"
    alt="Character model from the front"
    className="max-h-[250px] w-auto"
  />
  <img
    src="/assets/nour_left_bs.png"
    alt="Character model from the left side"
    className="max-h-[250px] w-auto"
  />
  <img
    src="/assets/nour_back_bs.png"
    alt="Character model from the back"
    className="max-h-[250px] w-auto"
  />
</div>


<Section className="w-full text-center max-w-3xl mx-auto">
  <p className="text-md sm:text-lg text-muted-foreground font-mono font-semibold mb-4">
        I still remember being 6 years old, sitting on the edge of my seat, watching my brother play Diablo II.
        I was scared <span className="font-bold text-accent italic text-xl">!@#$&</span><span className="italic">-less.</span>  But I couldn't walk away.  </p>
  <p className="text-md sm:text-lg text-muted-foreground font-mono  mb-4">
      I still remember begging my mother to enter the Cobra Car cheat codes in Age of Empires for me —
        I had to ask her, because the instructions were in English, and I could barely tie my own shoes. And I remember when a classroom full of teenagers got swept away by Pokémon Red emulators.  </p>
  <p className="text-md sm:text-lg text-muted-foreground font-mono font-semibold">
        Games have always been the proverbial campfire around which I have huddled up close to, joined by friends and family.
        Maybe that’s why I fell in love with making them. To spread the joy that's been given to me.  </p>
</Section>


<Section>
  <div className="container mx-auto px-6 flex sm:flex-col flex-col lg:flex-row items-center justify-center gap-10">
    
<div className="flex flex-col items-center w-full max-w-sm lg:max-w-[450px]">
      <div className="relative aspect-[4.5/5] sm:aspect-[4/5] border-8 border-primary w-full overflow-visible">
        <img
          src="/assets/protagonist_bs.png"
          alt="Main visual"
          className="absolute inset-0 w-full h-full scale-[1.2] -translate-x-[15%] -translate-y-[10%]"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground italic text-center px-2">
        Shoutout to one of Broken Seal's artists, <span className="text-accent font-medium">Nour</span>, for sharing her work on the concept art.
      </p>
    </div>

    {/* RIGHT COLUMN (text content) */}
    <div className=" text-left">
      <div>

      <div className="flex flex-row items-end md:justify-start gap-4">
        <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
         Breaking Into the Industry
        </h2>
          <img
            src="/assets/attackleft.webp"
            alt="Animated character"
            className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] "
          />
      </div>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
          Broken Seal Studio 
        </h3>
      </div>


      {/* Paragraphs */}
      <p className=" mb-4 font-mono font-semibold">
  Broken Seal Studio is a team of artists, programmers, producers, and designers — many from game development programs — all united by the same idea:
  junior talent doesn’t mean junior capability.
  </p>
      <p className="text-md text-muted-foreground mb-4">
  I work on the programming side — developing systems for quests, inventories, dialogue, and making sure it's all editor-friendly and scalable. But in this team, we all wear a few hats. Whether it's supporting designers with scripting or collaborating on UX decisions, everyone contributes to more than just their "role."

      </p>

      <p className="text-md text-muted-foreground mb-4">
  Together, under the working name <span className="text-3xl text-primary font-extrabold">Polymorphic Games</span>, we’ve set out on a quest of our own to:
      </p>

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

<Section className="bg-primary ">
  <div className="container mx-auto px-6 flex sm:flex-col flex-col lg:flex-row items-center justify-center gap-10">
    
    {/* LEFT: GIF / Video / Image */}
    <div className="w-full flex sm:flex-col flex-col gap-10  ">
      <div className=" border-4 border-background shadow-xl">
        <video autoPlay loop muted className="w-full h-auto object-cover">
          <source src="/videos/eoxania_preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="text-sm text-background text-center italic py-2 px-4 bg-background/20">
          Whiteboxed gameplay & animation logic (UE5)
        </p>
      </div>

         <div className="border-l-4  border-indigo-900 bg-background/10 p-4  shadow-2xl">
      <h4 className=" text-background text-xl sm:text-4xl font-extrabold font-monomb-3 leading-tight"> The goal</h4>
        <p className="text-md text-background font-semibold">
         A world filled with mystical wonder, dry humor, and storytelling worth remembering — and a project that teaches me something new every time I open the editor.
        </p>
      </div>
    </div>

    {/* RIGHT: TEXT */}
    <div className=" text-left space-y-6">
      <div>
        <h2 className="text-4xl  font-extrabold font-sans text-background leading-tight mb-2">
          Eoxania
        </h2>
        {/* <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-black leading-tight"> */}
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-2 leading-tight">
          My Dream Game
        </h3>
      </div>

      <p className="text-md text-background font-mono font-bold">
        Eoxania is my dream game — a narrative RPG that started as a D&D campaign and grew into a full-fledged worldbuilding project.
      </p>

      <p className="text-md text-slate-100 font-semibold">
        I’m building it solo in Unreal Engine 5 using Blueprints — developing whiteboxed movement inspired by Assassin’s Creed, custom dialogue systems, and interactive animations.
      </p>

      <p className="text-md text-slate-100 font-semibold">
        I’ve researched animation blending, customized base UE5 assets, and designed interactions through both visual scripting and code.
      </p>


    </div>
  </div>
</Section>





{/* CONCEPT ART SECTION */}
<Section className="bg-background">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
    
    {/* LEFT: Description */}
    <div className=" text-left">
      <div>
              <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
          Concept Art
        </h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
          Visuals that inspire logic
        </h3>
      </div>
      <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
        It started with sketches and lore scribbled on paper. A concept art collection that helped shape the tone, characters, and history of the world.
      </p>
      <p className="text-md text-muted-foreground mb-4">
        These visuals helped guide design decisions long before the first line of Blueprint logic was written.
      </p>
    </div>

    {/* RIGHT: Image Grid */}
    <div className="w-full max-w-2xl">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 group">
  {[
    "naptha.jpg",
    "wolves.jpeg",
    "mailman.jpg",
    "stone_fox.jpg",
    "globalmap_scaled.jpg",
    "rune_golem.jpg",
    "moon_fox.jpg",
    "steampunk_grassland.jpg",
    "vedverket.jpg",
  ].map((img, idx) => (
    <div
      key={idx}
      className="overflow-hidden rounded-xl shadow-md will-change-transform transform transition duration-300 ease-in-out group-hover:scale-95 hover:scale-115 hover:z-10"
    >
      <img
        src={`/concepts/${img}`}
        alt={`Concept ${idx + 1}`}
        className="w-full h-auto object-cover will-change-transform transition duration-300 ease-in-out group-hover:brightness-75 hover:brightness-100"
      />
    </div>
  ))}
</div>


      <p className="text-sm text-muted-foreground italic text-center mt-4">
        Original concept art that shaped the world of Eoxania
      </p>
    </div>
  </div>
</Section>



<Section className="relative bg-black py-20 overflow-hidden">
  {/* Background images */}
  <div className="absolute inset-0 z-0 flex justify-center items-center">
    <div className="w-1/2 h-full hidden sm:flex justify-start">
      <img
        src="/concepts/treespirits.png"
        alt="Forest spirits gathered"
        className="w-full h-full object-cover opacity-50"
      />
    </div>
    <div className="w-full sm:w-1/2 h-full flex justify-end">
      <img
        src="/concepts/steampunk_grassland.jpg"
        alt="Forest spirits gathered"
        className="w-full h-full object-cover opacity-50"
      />
    </div>




{/* Top Edge Blur */}
<div
  className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
  }}
/>

{/* Bottom Edge Blur */}
<div
  className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
    maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
  }}
/>

{/* Left Edge Blur */}
<div
  className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 50%)',
    maskImage: 'linear-gradient(to right, black 0%, transparent 50%)',
  }}
/>

{/* Right Edge Blur */}
<div
  className="absolute right-0 top-0 h-full w-20 sm:w-32 md:w-40 backdrop-blur-sm sm:backdrop-blur-md pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
    maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
  }}
/>

{/* General dark overlay */}
<div className="absolute inset-0 bg-black/50 z-0" />

  </div>

  {/* Centered text overlay */}
  <div className="relative z-20 flex flex-col items-center justify-center text-center h-full max-w-3xl mx-auto px-6 text-white">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-accent mb-6">
      Want to build games?
    </h2>
    <p className="text-md sm:text-lg text-neutral-300 font-mono font-semibold mb-6">
      Do you have a prototype you want to test? A story arch that keeps playing in the theatre of your mind? A weird mechanic you can’t stop tweaking?
    </p>
    <p className="text-md sm:text-lg font-semibold italic text-neutral-300 leading-relaxed">
      Whether you're chasing an idea, looking for inspiration, or want to build something together — I'm always down to talk.
    </p>
    <a
      href="mailto:teofredev@gmail.com"
      className="mt-8 inline-block px-6 py-3 border border-primary text-primary font-mono font-semibold rounded hover:bg-primary hover:text-black transition"
    >
      Let’s build something
    </a>
  </div>
</Section>


        </main>
        

      </div>
    );
  }



