"use client";

import "swiper/css";
import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";
import Link from "next/link";
import Gallery from "@/components/Gallery";

export default function GamesPage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <Section className="text-center   ">
          <div className="container  bg-gray-50 rounded-md border-2 border-black/50 shadow-lg/20 p-4 mx-auto ">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">
              Game <br className="block sm:hidden" />
              Development
            </h1>
            <div className="flex justify-center mb-4">
              <FeatureIcon
                src="/icons/gamepad2.svg"
                alt="game pad icon"
                label=""
              />
            </div>
            <p className="text-lg w-full md:w-4/7 mx-auto font-mono text-muted-foreground font-semibold">
              From 2DHD games and pixel art to 3D modelling and Blueprints - I
              love making games from scratch
            </p>
          </div>
        </Section>

        <Section>
          <div className="rounded border-0 shadow-lg/10">
            <div className="container  rounded bg-blue-50  p-4 mx-auto px-6 flex sm:flex-col flex-col lg:flex-row items-center lg:items-start  gap-10">
              <div className="bg-gradient-to-b shadow-[-3px_0px_10px_5px_rgba(0,0,0,0.55)]  from-[#d66f00] to-[#131313] p-4 rounded flex-col items-center w-full max-w-sm lg:flex-1">
                <div className="relative  shadow-[-15px_10px_25px_5px_rgba(0,0,0,0.85)]   bg-background-black/60 aspect-[3.5/5] sm:aspect-[3.5/5]  border-8 border-primary w-full overflow-visible">
                  <img
                    src="/assets/protagonist_bs.png"
                    alt="Main visual"
                    className="absolute inset-0 w-full h-full md:scale-[1.2] scale-[1.1] -translate-x-[15%] -translate-y-[5%] md:-translate-y-[10%]"
                  />
                </div>
                <p className="mt-4 shadow-lg/20 shadow-slate-50/20 border-2 border-orange-300 bg-orange-400 rounded p-2 font-semibold text-sm  italic text-center px-2">
                  Shoutout to one of Broken Seal's artists,{" "}
                  <Link
                    href="https://linktr.ee/nourelagha"
                    target="blank"
                    className="hover:underline decoration-primary decoration-2 underline-accent"
                  >
                    <span className="text font-bold">Nour</span>
                  </Link>
                  , for sharing her work on the concept art.
                </p>
              </div>

              <div className="flex flex-col lg:flex-1 gap-2">
                <div className="  border-1 border-black/50 p-4 rounded  bg-blue-200/80 shadow-lg/10 text-left lg:flex-1">
                  <div className="border-b-2 mb-3">
                    <div className="flex flex-row items-end md:justify-start gap-4">
                      <h2 className="text-4xl  font-extrabold font-sans text-background-black leading-tight ">
                        Broken Seal
                      </h2>
                    </div>
                  </div>
                  <p className=" mb-4 font-mono font-semibold">
                    Broken Seal is a 2DHD RPG game-project started by a group of
                    people who have all studied fields relevant to game
                    development. This project was born out of a collective
                    desire to improve our individual skills and grow as
                    professionals. A demo of the game is set to be showcased at
                    the Sweden Game Awards 2025.
                  </p>
         

                  <div className=" mt-4 rounded ">
                    <p className="text-lg text-muted-foreground font-mono font-bold ">
                      I am currently working on:
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                    <ul className="list-disc px-5">
                      <li className="italic font-semibold">
                        Designing and implementing the quest, dialogue and
                        inventory system using C#
                      </li>
                      <li className="italic font-semibold">
                        Debugging, testing and documenting bugs
                      </li>
                      <li className="italic font-semibold">
                        Reviewing finished code assignments
                      </li>
                      <li className="italic font-semibold">
                        Creating reusable Godot resource files and scenes
                      </li>
                      <li className="italic font-semibold">
                        Writing TDDs to enhance team efficiency
                      </li>
                    </ul>
                  </div>
                           <p className=" mt-4 text-lg font-bold">
                    With this project we hope to achieve one of two things:
                  </p>
                  <div className="p-4 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                    <ul className="list-disc px-5">
                      <li className="italic font-semibold">
                        Either generate enough interest in our game to fund a
                        studio of our own
                      </li>
                      <p className="font-semibold italic">or</p>
                      <li className="italic font-semibold">
                        Use this project as leverage to get hired
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/csharpIcon.png"
                        alt="Blender"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/trello-icon-gradient-blue@2x.png"
                        alt="Blender"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/godot-seeklogo.png"
                        alt="Blender"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/GitHub_Logo.png"
                        alt="Blender"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-primary/30 ">
          <div className="container mx-auto  flex  sm:flex-col-reverse flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10">
            <div className="  text-left lg:flex-1">
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded-t border-2 h-auto object-cover"
                  src="/assets/eo_vault.jpg"
                  alt="Character model from the left side"
                />
                <p className="text-sm text-background border-t-2  border-gray-500 text-center  italic py-2 px-4 bg-black">
                  White boxed gameplay (UE5)
                </p>
              </div>
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  className="w-full  rounded-t border-2 h-auto object-cover"
                  src="/assets/eo_landscape.jpg"
                  alt="Character model from the left side"
                />
                <p className="text-sm text-background border-t-2 border-gray-500 text-center  italic py-2 px-4 bg-black">
                  White boxed worldbuilding (UE5)
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 text-left border-1 border-black/50 space-y-6 bg-cyan-300/80 p-4 shadow-[5px_0px_6px_4px_rgba(0,0,0,0.45)]  rounded">
              <div>
                <div className="border-b-2 mb-3">
                  <h2 className="text-4xl  font-extrabold font-sans text-slate-900 leading-tight">
                    Eoxania
                  </h2>
                </div>

                <p className="text-md text-white/90 font-mono font-semibold mb-4">
                  Eoxania is my dream game — an RPG that started as a D&D
                  campaign and grew into a full-fledged worldbuilding project.
                </p>

                <p className="text-lg text-white/90 font-bold font-mono mb-2">
                  During the project I used:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Blueprints to modify & implement game logic
                    </li>
                    <li className="italic font-semibold">
                      Blender to create white boxed objects
                    </li>
                    <li className="italic font-semibold">
                      Quixel to import and edit Megascans
                    </li>
                    <li className="italic font-semibold">
                      UE5 editor to modify default 3D animations
                    </li>
                    <li className="italic font-semibold">
                      C# to link APIs outside the engine with in-game
                      interactions
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" bg-background/50 p-4 rounded shadow-2xl">
                <div className="border-b-2 mb-3">
                  <h4 className=" text-background-black text-xl sm:text-4xl font-extrabold font-sans text-shadow-2xs leading-tight">
                    {" "}
                    The Goal
                  </h4>
                </div>
                <p className="text-md italic text-background-black/90 font-semibold font-mono mb-2">
                  To create a 3D world where fantasy meets steampunk, with
                  awe-inspiring natural environments, filled with curious,
                  magical and devious creatures alike, based on the spirits of
                  old.
                </p>
                <p className="text-md italic text-background-black/90 font-semibold mb-2">
                  A world where agile movements guided by the essence of your
                  surroundings becomes a necessity in order to survive the
                  deadly wild.{" "}
                </p>
                <p className="text-md italic text-background-black/80 font-semibold ">
                  A place where rune inscribed steampunk objects, scattered
                  throughout the world, serve as the only reminder of a time
                  when the humans of Eoxania was at the peak of their dominance.
                  Yet, few exist that possess the knowledge required to use
                  these objects, and fewer still who remember who made them.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/blender_icon_64x64.png"
                    alt="Blender"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/UE-Icon-2023-Black.png"
                    alt="Unreal Engine 5"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/GitHub_Logo.png"
                    alt="Github"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/csharpIcon.png"
                    alt="C#"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-background-gray">
          <div className="container shadow-lg/10 mx-auto bg-blue-50 p-4 flex rounded flex-col lg:flex-row items-start justify-center gap-10">
            <div className=" border-1 border-black/50 p-4 rounded  bg-blue-200/80 shadow-lg/10 text-left lg:max-w-1/2">
              <div>
                <div className="border-b-2 mb-3">
                  <h2 className="text-4xl  font-extrabold font-sans text-background-black leading-tight ">
                    Concept Art
                  </h2>
                </div>
                <p className="text-md text-muted-foreground font-mono font-semibold mb-4">
                  My strength when it comes to creating visuals is not based on
                  a deep knowledge of a specific tool, but rather a stubborn
                  mentality that is willing to find and use new tools that are
                  the most efficient for me to use.
                </p>
                <p className="text-lg text-muted-foreground font-mono font-semibold mb-4">
                  To create concept art I have used:
                </p>
                  <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                    <ul className="list-disc px-5">
                      <li className="italic font-semibold">
                        Gimp to crop, mask and rearrange images
                      </li>
                      <li className="italic font-semibold">
                        CSS & HTML to create visually pleasing PDF documents
                      </li>
                      <li className="italic font-semibold">
                        Pen, paper, and uncooked rice to draw maps
                      </li>
                      <li className="italic font-semibold">
                        Inkarnate to digitize physical maps
                      </li>
                      <li className="italic font-semibold">
                        Guitar, keyboard & Audacity to create soundtracks
                      </li>
                      <li className="italic font-semibold">ChatGPT</li>
                      <li className="italic font-semibold">Firefly</li>
                    </ul>
                  </div>
              </div>
              <div className="flex   flex-wrap gap-4 mt-4">
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/gmbinder.png"
                    alt="GMBinder"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/gimp.png"
                    alt="Gimp"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/csslogo.png"
                    alt="CSS"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/chatgptcut.png"
                    alt="ChatGPT"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-2xl  rounded-lg">
              <Gallery />

              <p className="text-sm text-muted-foreground font-semibold italic text-center py-2">
                Original <span className="text-accent font-bold">D&D</span>{" "}
                concept art that shaped the world of Eoxania
              </p>
            </div>
          </div>
        </Section>

        <Section className="relative min-h-[400px] bg-black py-20 overflow-hidden">
          <div className="absolute  inset-0 z-0 flex justify-center items-center">
            <div className="w-1/2 h-full hidden sm:flex justify-start">
              <img
                src="/concepts/treespirits.png"
                alt="Forest spirits gathered"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
            <div className="w-full sm:w-1/2 h-full flex justify-end">
              <img
                src="/concepts/steampunk_grassland.jpg"
                alt="Forest spirits gathered"
                className="w-full h-full object-cover opacity-40"
              />
            </div>

            <div
              className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, transparent 100%)",
              }}
            />

            <div
              className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
                maskImage:
                  "linear-gradient(to top, black 0%, transparent 100%)",
              }}
            />

            <div
              className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-20 backdrop-blur-sm sm:backdrop-blur-sm pointer-events-none z-10"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 0%, transparent 50%)",
                maskImage:
                  "linear-gradient(to right, black 0%, transparent 50%)",
              }}
            />

            <div
              className="absolute right-0 top-0 h-full w-20 sm:w-32 md:w-40 backdrop-blur-sm sm:backdrop-blur-md pointer-events-none z-10"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to left, black 0%, transparent 100%)",
                maskImage:
                  "linear-gradient(to left, black 0%, transparent 100%)",
              }}
            />

            <div className="absolute inset-0 bg-black/30 z-0" />
          </div>

          <div className="relative  rounded z-20 flex flex-col items-center justify-center text-center h-full max-w-3xl mx-auto px-6 text-white">
            <h2 className="text-4xl sm:text-5xl text-shadow-lg font-extrabold text-red-500 mb-6">
              Want to talk games?
            </h2>
            <p className="text-md sm:text-lg text-shadow-lg text-background font-mono font-semibold mb-6">
              The gaming industry is a great source of discussion and I love
              talking about the industry politics, what makes a feature feel fun
              to use and how to make them.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
