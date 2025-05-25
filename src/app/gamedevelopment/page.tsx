  'use client'
  import Image from "next/image";
  import { Swords, Scroll, Heart, Anvil, Gavel, Hammer, BicepsFlexed, BadgeDollarSign } from "lucide-react";

  import FeatureIcon from "@/components/FeatureIcon";
  import Section from "@/components/section";
import Link from "next/link";


  export default function GamesPage () {
    return (
<div className="grid grid-rows-[20px_1fr]  justify-items-center min-h-screen sm:mt-16">
<main className="flex flex-col  row-start-2 w-full">
        
  <Section className="text-center max-w-3xl md:mb-10 mx-auto">
    <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">Game <br className="block sm:hidden" />Development</h1>
    <div className="flex justify-center mb-4">
        <FeatureIcon
          src="/icons/gamepad2.svg"
          alt="game pad icon"
          label=""
          />
          </div>
    <p className="text-lg font-mono text-muted-foreground font-semibold">
     From 2DHD games and pixel art to 3D modelling and Blueprints - I love making games that leave a mark 
    </p>
  </Section>

<Section>
  <div className="container mx-auto px-6 flex sm:flex-col flex-col lg:flex-row items-center justify-center gap-10">
    
<div className="flex flex-col items-center w-full max-w-sm lg:max-w-.8/2">
      <div className="relative aspect-[3.5/5] sm:aspect-[3.5/5]  border-8 border-primary w-full overflow-visible">
        <img
          src="/assets/protagonist_bs.png"
          alt="Main visual"
          className="absolute inset-0 w-full h-full md:scale-[1.2] scale-[1.1] -translate-x-[15%] -translate-y-[5%] md:-translate-y-[10%]"
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground italic text-center px-2">
        Shoutout to one of Broken Seal's artists, <Link href="https://linktr.ee/nourelagha" target="blank" className="hover:underline decoration-primary underline-accent"><span className="text-accent font-bold">Nour</span></Link>, for sharing her work on the concept art.
      </p>
    </div>

    <div className=" text-left lg:max-w-1/2">
      <div>

      <div className="flex flex-row items-end md:justify-start gap-4">
        <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
         Broken Seal Studio
        </h2>

      </div>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
           Breaking Into the Industry 
        </h3>
      </div>


      <p className=" mb-4 font-mono font-semibold">
  Broken Seal Studio is a team of artists, programmers, producers, and designers — many with experience from game development programs. We're all united by the same idea:
  junior experience doesn’t mean junior potential.
  </p>
      <p className="text-md text-muted-foreground mb-4">
  I work on the programming side of things with C# in the Godot engine, developing systems for quests, inventories, dialogue, and making sure it's all editor-friendly and scalable. But in this team, we all wear a few hats. Whether it's designers helping out with scripts, or programmers trying to draw a straight line. In the end, it's about coming together as a team to create something wonderful.

      </p>

<p className="text-md text-muted-foreground mb-4">
  Together, under the working name <span className="text-xl  text-primary font-extrabold">Polymorphic Games,</span> we’ve set out on a quest of our own to:
</p>

<ul className="space-y-3">
  {[
    { Icon: Heart, text: 'Build a 2DHD game:', fill: '#e02422', stroke: '#a12e2c' },
    { Icon: Swords, text: 'Charm an investor:', fill: 'black', stroke: '#363535' },
    { Icon: Hammer, text: 'Launch a studio:', fill: 'gold' },
    { Icon: BadgeDollarSign, text: 'Get a job:', fill: '#13c213' }
  ].map(({ Icon, text, fill, stroke }) => (
    <li key={text} className="flex items-center gap-3">
      <Icon
        className="w-10 h-10 sm:w-12 sm:h-12"
        {...(fill && { fill })}
        {...(stroke && { stroke })}
      />
      <span className="font-semibold font-mono text-sm sm:text-md">
        {text} 0/1
      </span>
    </li>
  ))}
</ul>

             <div className="flex flex-wrap gap-3 text-sm font-mono text-background mt-4">
        <span className="bg-accent px-4 py-2 rounded-lg  font-semibold shadow-md shadow-black/20">Godot</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">C# 8.0</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Ink</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Trello</span>
        <span className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Agile</span>
      </div>
    </div>
  </div>
</Section>

<Section className="bg-primary ">
  <div className="container mx-auto px-6 flex  sm:flex-col-reverse flex-col-reverse lg:flex-row items-center justify-center gap-10">
    
    <div className="lg:w-1/2 w-full flex sm:flex-col flex-col gap-10  ">
      <div className="  shadow-xl">
          <img className="w-full h-auto object-cover"
            src="/assets/eo_vault.jpg"
            alt="Character model from the left side"
          />
        <p className="text-sm  text-center italic py-2 px-4 bg-gray-50">
          Whiteboxed gameplay (UE5)
        </p>
      </div>
      <div className="  shadow-xl">
        <img className="w-full h-auto object-cover"
            src="/assets/eo_landscape.jpg"
            alt="Character model from the left side"
          />
        <p className="text-sm  text-center italic py-2 px-4 bg-gray-50">
          Whiteboxed worldbuilding (UE5)
        </p>
      </div>

            
    </div>

    <div className="lg:w-1/2 text-left space-y-6">
      <div>
        <h2 className="text-4xl  font-extrabold font-sans text-background leading-tight mb-3">
          Eoxania
        </h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-2 leading-tight">
          My Dream Game
        </h3>

      <p className="text-md text-background font-mono font-bold mb-4">
        Eoxania is my dream game — an RPG that started as a D&D campaign and grew into a full-fledged worldbuilding project.
      </p>

      <p className="text-md text-slate-100 font-semibold mb-2">
        I’m building it solo in Unreal Engine 5, using Blueprints to develop whiteboxed environments, animations and movement inspired by Assassin’s Creed.
      </p>

      <p className="text-md text-slate-100 font-semibold">
        I’ve researched animation blending, customized base UE5 assets, and designed interactions through both visual scripting and code.
      </p>
      </div>
 
    <div className=" bg-background/50 p-4 rounded shadow-2xl">
      <h4 className=" text-background-black text-xl sm:text-4xl font-extrabold font-sans mb-3 leading-tight underline"> The Goal</h4>
        <p className="text-md text-background-black/90 font-semibold font-mono mb-2">
         To create a 3D world where fantasy meets steampunk, with awe-inspiring natural environments, filled with curious, magical and devious creatures alike, based on the spirits of old.
        </p>
        <p className="text-md text-background-black/90  mb-2">
          A world where agile movements guided by the essence of your surroundings becomes a necessity in order to survive the deadly wild.         </p>
        <p className="text-md text-background-black/80  ">
          A place where rune inscribed steampunk objects, scattered throughout the world, serve as the only reminder of a time when the humans of Eoxania was at the peak of their dominance. Yet, few exist that possess the knowledge required to use these objects, and fewer still who remember who made them.
        </p>
      </div>
           <div className="flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mt-4">
        <span className="bg-background px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Unreal Engine 5</span>
        <span className="bg-background px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Blender</span>
        <span className="bg-background px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">C++</span>
        <span className="bg-background px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">C#</span>
        <span className="bg-background px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Blueprints</span>
      </div>
    </div>
    
  </div>
</Section>





<Section className="bg-background">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
    
    <div className=" text-left lg:max-w-1/2">
      <div>
              <h2 className="text-4xl  font-extrabold font-sans text-accent leading-tight mb-2">
          Concept Art
        </h2>
        <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-black mb-3 leading-tight">
          Visuals That Inspire Logic
        </h3>
      <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
  Storytelling and art have always helped scratch my creative itch. Whether it’s imagining worlds, designing characters, or sketching mechanics, I find joy in bringing ideas to life visually.
      </p>
      <p className="text-md text-muted-foreground mb-4">
  To me, creative problem solving means stepping beyond your dedicated role to shape the final result. I love multi-faceted tasks that allow me to contribute across disciplines, whether it's visualizing an environment on paper or prototyping a mechanic in code. That’s why you’ll often find me with a GIMP window open right next to my code editor.
      </p>
      <p className="text-md text-muted-foreground mb-4">
To me, visuals inspire logic.
      </p>


      </div>
      <div className="flex flex-wrap gap-3 text-sm font-mono text-background mt-4">
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Inkarnate</span>
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">GM Binder</span>
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">ChatGPT</span>
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Firefly</span>
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Figma</span>
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Gimp</span>
        <span className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">Pen & Paper</span>
      </div>
    </div>

    <div className="w-full max-w-2xl">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 group">
  {[
    "naptha.jpg",
    "wolves.jpeg",
    "mailman.jpg",
    "globalmap_scaled.jpg",
    "rune_golem.jpg",
    "eviltrees_1.jpg",
    "steampunk_grassland.jpg",
    "vedverket.jpg",
    "forest_fox_image.jpg",
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
        Original <span className="text-accent font-semibold">D&D</span> concept art that shaped the world of Eoxania
      </p>
    </div>
  </div>
</Section>



<Section className="relative bg-black py-20 overflow-hidden">
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




<div
  className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
  }}
/>

<div
  className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
    maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
  }}
/>

<div
  className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 50%)',
    maskImage: 'linear-gradient(to right, black 0%, transparent 50%)',
  }}
/>

<div
  className="absolute right-0 top-0 h-full w-20 sm:w-32 md:w-40 backdrop-blur-sm sm:backdrop-blur-md pointer-events-none z-10"
  style={{
    WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
    maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
  }}
/>

<div className="absolute inset-0 bg-black/30 z-0" />

  </div>

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
    <Link
      href="mailto:teofredev@gmail.com"
      className="mt-8 inline-block px-6 py-3 border border-primary text-primary font-mono font-semibold rounded hover:bg-primary hover:text-black transition"
    >
      Let’s build something
    </Link>
  </div>
</Section>


        </main>
        

      </div>
    );
  }



