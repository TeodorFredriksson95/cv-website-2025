  import Image from "next/image";
  import { Swords, Scroll, Heart, Anvil, Gavel, Hammer } from "lucide-react";

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
      <div className="flex flex-row items-center md:justify-end mb-4 gap-4">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-accent leading-tight">
          Game Development
        </h2>
        <Image
          className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] self-end"
          src="/icons/gamepad2.svg"
          alt="Game Pad Icon"
          width={75}
          height={75}
        />
      </div>

      {/* Paragraphs */}
      <p className=" font-semibold font-mono mb-4">
        I still remember being 6 years old, sitting on the edge of my seat watching my brother play Diablo II.
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
        Now, together with a wonderfully talented group of people, we've set out on a quest of our own:
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
      </ul>
    </div>
  </div>
</Section>


        </main>
        

      </div>
    );
  }






//     import Image from "next/image";
//   import { Swords, Scroll, Heart, Anvil, Gavel, Hammer } from "lucide-react";

//   import FeatureIcon from "@/components/FeatureIcon";


//   export default function Home() {
//     return (
//       <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
//         <main className=" flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
//         <h1 className="mb-4 text-shadow-md text-center w-full text-5xl font-sans font-extrabold leading-none tracking-tight text-accent md:text-8xl lg:text-8xl dark:text-white">Unidevweb</h1>

//         <div className="flex flex-col mb-10 sm:relative sm:flex-row justify-between sm:justify-center items-center w-full max-w-xl mx-auto sm:gap-20">
//             <FeatureIcon
//               src="/icons/gamepad2.svg"
//               alt="Gamepad icon"
//               label="Game Development"
//             />

//           <FeatureIcon
//             src="/icons/webdev2.svg"
//             alt="Web Icon"
//             label="Web Development"
//           />
//           <FeatureIcon
//             src="/icons/mobile2.svg"
//             alt="Mobile Icon"
//             label="Mobile & Apps"
//           />
//         </div>

//       <div>

//   </div>
//   <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 sm:px-20 py-20">

// <div className="flex flex-col items-center w-full md:w-[80vw] lg:max-w-[250px] max-w-[200px]">
//   <div className="relative aspect-[2.5/5] border-8 border-primary w-full overflow-visible">
//     <img
//       src="/icons/protagonist.png"
//       alt="Main visual"
//       className="absolute inset-0 w-full h-full scale-[1.5] -translate-x-[20%] -translate-y-[10%]"
//     />
//   </div>
//   <p className="mt-4 text-sm text-muted-foreground italic text-center px-2">
//     Shoutout to one of Broken Seal's artists, <span className="text-accent font-medium">Nour</span>, for sharing her work on the conecpt art.
//   </p>
// </div>

//     {/* Right Content */}
//     <div className="max-w-md text-left">
//      <div className="flex flex-row items-center md:justify-end md:align-baseline mb-4 gap-4">
//       <h2 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight">
//         Game Development
//       </h2>
//       <Image
//       className="w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] self-end"
//       src="/icons/gamepad2.svg"
//       alt="Game Pad Icon"
//       width={75}
//       height={75}
//       />
//       </div>
//   <p className=" font-semibold font-mono mb-4">
//     I still remember being 6 years old, sitting on the edge of my seat watching my brother play Diablo II.
//     I was scared <span className="font-bold text-accent italic text-xl">!@#$&</span>-less, but I couldn't walk away. I still remember begging my mother to enter the Cobra Car cheat codes in Age of Empires for me —
//     I had to ask her, because the instructions were in English, and I could barely tie my own shoes. And I remember when a classroom full of teenagers got swept away by Pokémon Red emulators.
//   </p>
//   <p className="text-md text-muted-foreground mb-4">
//     Games have always been the proverbial campfire around which I have huddled up close to, joined by friends and family.
//     Maybe that’s why I fell in love with making them. To spread the joy that's been given to me.
//   </p>
//     <p className="text-md text-muted-foreground mb-4">
//     Now, together with a wonderfully talented group of people, we've set out on a quest of our own:
//     </p>

//     <ul className="space-y-2">
//       <li className="flex items-center gap-2">
//         <Heart stroke=" #a12e2c" fill="#e02422 " className="w-12 h-12 " />
//         <span><span className="font-semibold">Build a game:</span> 0/1</span>
//       </li>
//       <li className="flex items-center gap-2">
//         <Swords stroke="#363535" fill="black" className="w-12 h-12 " />
//         <span><span className="font-semibold">Charm an investor:</span> 0/1</span>
//       </li>
//       <li className="flex items-center gap-2">
//         <Hammer  fill="gold" className="w-12 h-12 " />
//         <span><span className="font-semibold">Launch a studio:</span> 0/1</span>
//       </li>
//     </ul>
    

//     </div>
//   </section>

//         </main>
        

//       </div>
//     );
//   }
