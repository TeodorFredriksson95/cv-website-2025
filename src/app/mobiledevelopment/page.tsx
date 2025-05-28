"use client";

import Section from "@/components/section";
import FeatureIcon from "@/components/FeatureIcon";
import Link from "next/link";

export default function AppsAndMobilePage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <Section className="text-center   ">
          <div className="container  bg-gray-50 rounded-md border-2 border-black/50 shadow-lg/20 p-4 mx-auto ">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">
              Mobile <br className="block sm:hidden" />
              Development
            </h1>
            <div className="flex justify-center mb-4">
              <FeatureIcon
                src="/icons/mobile2.svg"
                alt="Mobile Icon"
                label=""
              />
            </div>
            <p className="text-lg w-full md:w-4/7 mx-auto font-mono text-muted-foreground font-semibold">
              I love building apps that improve everyday life and keep users
              engaged
            </p>
          </div>
        </Section>

        <Section className="bg-gray-50">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="max-w-xl border-1 border-black/50 bg-blue-200/80 shadow-lg/20 rounded p-4">
              <div className="border-b-2 mb-3">
                <h2 className="text-4xl  font-extrabold font-sans text-background-black leading-tight ">
                  Motivational Exercise
                </h2>
              </div>
              <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
                Designed to promote daily physical activity through simple
                challenges, reminders, and social interaction. Compete with
                friends, track progress, and stay motivated with gamified
                elements.
              </p>
              <p className="text-lg text-white/90 font-bold font-mono mb-2">
                Focus areas:
              </p>
              <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                <ul className="list-disc px-5">
                  <li className="italic font-semibold">
                    Incentivize daily activity
                  </li>
                  <li className="italic font-semibold">
                    Reduce barrier to entry for physical activity
                  </li>
                </ul>
              </div>
              <p className="text-lg text-white/90 font-bold font-mono mb-2">
                Key features:
              </p>
              <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                <ul className="list-disc px-5">
                  <li className="italic font-semibold">
                    Challenge friends & family to perform exercises
                  </li>
                  <li className="italic font-semibold">
                    Daily reminders and personal challenges
                  </li>
                  <li className="italic font-semibold">
                    Score system tracks who has the highest amount of exercises
                    completed
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/jsIconGreen.svg"
                    alt="Nodejs"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/javascript-seeklogo.png"
                    alt="Javascript"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/Logomark_Full Color.png"
                    alt="Firebase"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/react.png"
                    alt="React"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                  <img
                    src="/logos/ts-logo-128.png"
                    alt="TypeScript"
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
                    src="/logos/expo-seeklogo.png"
                    alt="Expo"
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
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 w-full">
              {["/assets/me_1wp.webp", "/assets/me_2wp.webp"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Motivational Exercise screenshot ${i + 1}`}
                  className="w-auto height-50 rounded shadow-md object-cover"
                />
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" bg-gradient-to-br from-primary/10 to-background-gray/50 border border-black/50 shadow-xl rounded-lg p-6">
              <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                  <h2 className="text-3xl font-extrabold text-accent mb-2">
                    The Florist
                  </h2>
                  <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
                    Designed to support florists in planning and crafting flower
                    arrangements based on occasion.
                    Users could explore and study flora in a searchable library
                    sourced via the{" "}
                    <Link
                      className="hover:underline decoration-primary font-bold underline-accent text-accent"
                      href="https://perenual.com/docs/api"
                    >
                      Perenual API
                    </Link>
                    .
                  </p>

                </div>
                <p className="text-lg text-white/90 font-bold font-mono ">
                  Focus areas:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">Digitize planning phase for florists</li>
                    <li className="italic font-semibold">
                        Tools to visualize flower compositions
                    </li>
                    <li className="italic font-semibold">
                      Tools to visualize color schema for arrangements
                    </li>
                    <li className="italic font-semibold">
                       Flower & plant research in-app
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-white/90 font-bold font-mono ">
                  Key features:
                </p>
                           <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">Extensive library of flowers and their properties</li>
                    <li className="italic font-semibold">Saving personal favorites of flower compositions</li>
    
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/Logomark_Full Color.png"
                      alt="Firebase"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/react.png"
                      alt="React"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/ts-logo-128.png"
                      alt="TypeScript"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/expo-seeklogo.png"
                      alt="Expo"
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
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-gradient-to-br from-primary/10 to-primary/30 border border-black/50 shadow-xl rounded-lg p-6">
              <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                  <h2 className="text-3xl font-extrabold text-accent mb-2">
                    Mapping Industries
                  </h2>
                  <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
                    Built during my internship at{" "}
                    <Link
                      className="hover:underline decoration-accent  text-accent"
                      target="blank"
                      href="https://www.redmind.se/en/"
                    >
                      Redmind AB
                    </Link>
                    , this project focused on backend systems and UI features to
                    manage local work orders at golf clubs world wide using GIS functions.
                  </p>

                            <p className="text-lg text-white/90 font-bold font-mono ">
                  Key features:
                </p>
                <div className="p-4 mb-2 bg-gray-50/70 inset-shadow-sm inset-shadow-black rounded">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">Create assets and place them on a map</li>
                    <li className="italic font-semibold">Use global assets to create local work worders</li>
                    <li className="italic font-semibold">Assign work orders to local staff</li>
            
                  </ul>
                </div>
  
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/Logomark_Full Color.png"
                      alt="Firebase"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/react.png"
                      alt="React"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/ts-logo-128.png"
                      alt="TypeScript"
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
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section className="bg-primary text-background py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-sans mb-6">
              Got an app idea?
            </h2>
            <p className="text-md sm:text-lg font-mono font-semibold mb-6">
              Whether you’re planning a side project, looking to expand your
              team, or just need to bounce ideas — I’d love to hear about it.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
