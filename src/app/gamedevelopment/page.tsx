  'use client'
  import Image from "next/image";
  import { Swords, Scroll, Heart, Anvil, Gavel, Hammer, BicepsFlexed, BadgeDollarSign } from "lucide-react";

  import FeatureIcon from "@/components/FeatureIcon";
  import Section from "@/components/section";
import Link from "next/link";


  export default function GamesPage () {
    return (
<div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
<main className="flex flex-col  row-start-2 w-full">
  <Section className="text-center   ">
  <div className="container  bg-background-gray rounded shadow-lg/20 p-4 mx-auto ">

    <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">Game <br className="block sm:hidden" />Development</h1>
    <div className="flex justify-center mb-4">
        <FeatureIcon
          src="/icons/gamepad2.svg"
          alt="game pad icon"
          label=""
          />
          </div>
    <p className="text-lg w-full md:w-4/7 mx-auto font-mono text-muted-foreground font-semibold">
     From 2DHD games and pixel art to 3D modelling and Blueprints - I love making games that leave a mark 
    </p>
          </div>
  </Section>

<Section >
  <div className="rounded border-2 shadow-lg/20">

  <div className="container  rounded bg-secondary-bg  p-4 mx-auto px-6 flex sm:flex-col flex-col lg:flex-row items-center lg:items-start  gap-10">
    
<div className="bg-gradient-to-b shadow-[-3px_0px_10px_5px_rgba(0,0,0,0.55)]  from-[#d66f00] to-[#131313] p-4 rounded flex-col items-center w-full max-w-sm lg:flex-1">
      <div className="relative  shadow-[-15px_10px_25px_5px_rgba(0,0,0,0.85)]   bg-background-black/60 aspect-[3.5/5] sm:aspect-[3.5/5]  border-8 border-primary w-full overflow-visible">
        <img
          src="/assets/protagonist_bs.png"
          alt="Main visual"
          className="absolute inset-0 w-full h-full md:scale-[1.2] scale-[1.1] -translate-x-[15%] -translate-y-[5%] md:-translate-y-[10%]"
        />
      </div>
      <p className="mt-4 shadow-lg/20 shadow-slate-50/20 border-2 border-orange-300 bg-orange-400 rounded p-2 font-semibold text-sm  italic text-center px-2">
        Shoutout to one of Broken Seal's artists, <Link href="https://linktr.ee/nourelagha" target="blank" className="hover:underline decoration-primary decoration-2 underline-accent"><span className="text font-bold">Nour</span></Link>, for sharing her work on the concept art.
      </p>
    </div>

<div className="flex flex-col lg:flex-1 gap-2">

    <div className="  inset-ring-1 p-4 rounded  bg-blue-300 text-left lg:flex-1">
      <div className="border-b-2 mb-3">

      <div className="flex flex-row items-end md:justify-start gap-4">
        <h2 className="text-4xl  font-extrabold font-sans text-background-black leading-tight mb-2">
         Broken Seal
        </h2>

      </div>

      </div>


      <p className=" mb-4 font-mono font-semibold">
      Broken Seal is a 2DHD RPG game-project created by a group of people who have all studied fields relevant to game development. A demo of the game is set to be showcased at the Sweden Game Awards 2025.
      </p>
      <p className=" mb-4  font-bold">
        With this project we hope to achieve one of two things:</p>
        <div className="p-4 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">

      <ul className="list-disc px-5">
        <li className="italic font-semibold">Either generate enough interest in our game to fund a studio of our own</li>
        <p className="font-semibold italic">or</p>
        <li className="italic font-semibold">Use this project as leverage to get hired</li>
      </ul>
        </div>

      <div className=" mt-4 mb-2 rounded ">
        <p className="  font-semibold italic text-xl">
          While I do aid the artists and producers as best I can, most of my time in this project is currently spent on:
        </p>
      </div>
        <div className="p-4 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
          <ul className="list-disc px-5">
        <li className="italic font-semibold">Designing and implementing the quest, dialogue and inventory system</li>
        <li className="italic font-semibold">Testing and documenting bugs</li>
        <li className="italic font-semibold">Reviewing finished code assignments</li>
        <li className="italic font-semibold">Creating reusable resource files and scenes</li>
        <li className="italic font-semibold">Writing TDDs to enhance team efficiency</li>
      </ul>
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/csharpIcon.png" alt="Blender" className="max-w-full max-h-full object-contain" />
  </div>
      <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/trello-icon-gradient-blue@2x.png" alt="Blender" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/godot-seeklogo.png" alt="Blender" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/GitHub_Logo.png" alt="Blender" className="max-w-full max-h-full object-contain" />
  </div>
</div>  
    </div>


  </div>
</div>
  </div>

</Section>

<Section className="pt-0 rounded  ">
    <div className="container grid gap-10  grid-cols-1 md:grid-cols-2 bg-background-gray rounded shadow-lg/20 p-4 mx-auto px-6 ">
        <div className="bg-gray-50 p-4 rounded">
                <div className="border-b-2 mb-3">
                    <h2 className="text-4xl font-extrabold font-sans text-accent leading-tight">
                      C# / GDScript
                    </h2>
                </div>
                      <p className="text-md text-white/90 font-mono font-bold mb-4">
                      As I come from a .NET background it feels well within my comfort zone that Broken Seal is currently being developed with C# as opposed to GDScript.
                      </p>
        </div>
        <div className="bg-gray-50">
          <img className="w-full h-auto object-cover"
              src="/showcase/vs_code_pic.png"
              alt="Character model from the left side"
            />
          <p className="text-sm  text-center font-semibold italic py-2 px-4 bg-background-gray">
            White boxed gameplay (UE5)
          </p>
          hello
        </div>
        <div className="bg-gray-50">
          hello
        </div>
        <div className="bg-gray-50">
          hello
        </div>
</div>
</Section>

<Section className="bg-primary/30 ">
  <div className="container mx-auto  flex  sm:flex-col-reverse flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10">
    
<div className="  text-left lg:flex-1">
      <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
          <img className="w-full  rounded-t border-2 h-auto object-cover"
            src="/assets/eo_vault.jpg"
            alt="Character model from the left side"
          />
        <p className="text-sm text-background border-t-2  border-gray-500 text-center  italic py-2 px-4 bg-black">
          White boxed gameplay (UE5)
        </p>
      </div>
      <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
          <img className="w-full  rounded-t border-2 h-auto object-cover"
            src="/assets/eo_landscape.jpg"
            alt="Character model from the left side"
          />
        <p className="text-sm text-background border-t-2 border-gray-500 text-center  italic py-2 px-4 bg-black">
          White boxed worldbuilding (UE5)
        </p>
      </div>
    </div>

    <div className="lg:w-1/2 text-left border-2 border-cyan-500 space-y-6 bg-cyan-300/80 p-4 shadow-[5px_0px_6px_4px_rgba(0,0,0,0.45)]  rounded">
      <div>
        <div className="border-b-2 mb-3">

          <h2 className="text-4xl  font-extrabold font-sans text-slate-900 leading-tight">
            Eoxania
          </h2>
        </div>

      <p className="text-md text-white/90 font-mono font-bold mb-4">
        Eoxania is my dream game — an RPG that started as a D&D campaign and grew into a full-fledged worldbuilding project.
      </p>

      <p className="font-semibold italic text-xl mb-2">
        I’m currently building it solo in Unreal Engine 5, using the following tools: 
      </p>

      <p className="text-xl text-white/90 font-bold italic mb-2">
        Tools 
      </p>
        <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
          <ul className="list-disc px-5">
        <li className="italic font-semibold">Blueprints to modify & implement game logic</li>
        <li className="italic font-semibold">Blender to create white boxed objects</li>
        <li className="italic font-semibold">Quixel to import Megascans</li>
        <li className="italic font-semibold">UE5 editor to modify default 3D animations</li>
        <li className="italic font-semibold">C# to link APIs outside the engine with in-game interactions</li>
      </ul>
      </div>

      </div>
 
    <div className=" bg-background/50 p-4 rounded shadow-2xl">
      <h4 className=" text-background-black text-xl sm:text-4xl font-extrabold font-sans mb-3 leading-tight underline"> The Goal</h4>
        <p className="text-md text-background-black/90 font-semibold font-mono mb-2">
         To create a 3D world where fantasy meets steampunk, with awe-inspiring natural environments, filled with curious, magical and devious creatures alike, based on the spirits of old.
        </p>
        <p className="text-md text-background-black/90 font-semibold mb-2">
          A world where agile movements guided by the essence of your surroundings becomes a necessity in order to survive the deadly wild.         </p>
        <p className="text-md text-background-black/80 font-semibold ">
          A place where rune inscribed steampunk objects, scattered throughout the world, serve as the only reminder of a time when the humans of Eoxania was at the peak of their dominance. Yet, few exist that possess the knowledge required to use these objects, and fewer still who remember who made them.
        </p>
      </div>


<div className="flex flex-wrap gap-4 mt-4">
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/blender_icon_64x64.png" alt="Blender" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/UE-Icon-2023-Black.png" alt="Unreal Engine 5" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/GitHub_Logo.png" alt="Github" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/csharpIcon.png" alt="C#" className="max-w-full max-h-full object-contain" />
  </div>


</div>

      
    </div>
    
  </div>
</Section>





<Section className="bg-background-gray">
  <div className="container  mx-auto bg-secondary-bg/60 p-4 flex rounded flex-col lg:flex-row items-start justify-center gap-10">
    
    <div className=" bg-background-gray  text-left lg:max-w-1/2">
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
<div className="flex   flex-wrap gap-4 mt-4">

    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/gmbinder.png" alt="GMBinder" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/gimp.png" alt="Gimp" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/csslogo.png" alt="CSS" className="max-w-full max-h-full object-contain" />
  </div>

    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/512px-ChatGPT-Logo.png" alt="ChatGPT" className="max-w-full max-h-full object-contain" />
  </div>
</div>  
    </div>

    <div className="w-full max-w-2xl  rounded-lg">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 group">
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


      <p className="text-sm text-muted-foreground italic text-center py-2">
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



