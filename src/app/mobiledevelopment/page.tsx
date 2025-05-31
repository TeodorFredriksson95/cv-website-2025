"use client";

import Section from "@/components/section";
import FeatureIcon from "@/components/FeatureIcon";
import Link from "next/link";

export default function AppsAndMobilePage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <section className="text-center pt-0  ">
          <div className="  bg-secondary-green shadow-lg/20  p-8 md:p-15 ">
            <h1 className="text-4xl sm:text-5xl font-semibold  text-secondary-cream leading-tight mb-3">
              Mobile <br className="block sm:hidden" />
              Development
            </h1>
            <div className="flex justify-center mb-4 border-b-3 border-b-accent-orange w-2/10 mx-auto"></div>
            <p className="text-lg w-full md:w-4/7 mx-auto text-white/80 font-semibold">
              I love building apps that improve everyday life and keep users
              engaged
            </p>
          </div>
        </section>

        <Section className="">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="">
              <div className="border-b-2 mb-3">
                <div className="flex flex-row items-end md:justify-start gap-4">
                  <h2 className="text-4xl text-secondary-purple font-extrabold font-sans  leading-tight ">
                    Motivational Exercise
                  </h2>
                </div>
              </div>
              <p className=" font-semibold">
                Designed to promote daily physical activity through simple
                challenges, reminders, and social interaction. Compete with
                friends, track progress, and stay motivated with gamified
                elements.
              </p>
              <div className=" mt-4 rounded  ">
                <h2 className="text-2xl bg-accent-yellow p-2 font-mono font-bold ">
                  Focus areas:
                </h2>

                <div className="p-4 bg-secondary-brown inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc text-secondary-cream px-5">
                    <li className="italic ">Incentivize daily activity</li>
                    <li className="italic ">
                      Reduce barrier to entry for physical activity
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-secondary-brown mt-4 rounded shadow-lg/20 border-2">
                <p className="text-2xl p-2 font-bold bg-secondary-green text-secondary-cream  ">
                  Key features:
                </p>
                <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                  <ul className="list-disc px-5">
                    <li className="italic font-semibold">
                      Challenge friends & family to perform exercises
                    </li>
                    <li className="italic font-semibold">
                      Daily reminders and personal challenges
                    </li>
                    <li className="italic font-semibold">
                      Score system tracks who has the highest amount of
                      exercises completed
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-4  mt-4">
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/jsIconGreen.svg"
                      alt="Nodejs"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/javascript-seeklogo.png"
                      alt="Javascript"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/Logomark_Full Color.png"
                      alt="Firebase"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/react.png"
                      alt="React"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/ts-logo-128.png"
                      alt="TypeScript"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/GitHub_Logo.png"
                      alt="Github"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/expo-seeklogo.png"
                      alt="Expo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                    <img
                      src="/logos/csslogo.png"
                      alt="CSS"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="border-b-4 border-accent-orange mt-2"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded sm:grid-cols-2 w-full">
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  src="/assets/me_1wp.webp"
                  alt=""
                  className="w-full  rounded  h-auto object-cover"
                />
              </div>
              <div className=" bg-black/10 rounded p-1 inset-shadow-sm/50 inset-shadow/50 mb-4 ">
                <img
                  src="/assets/me_2wp.webp"
                  alt=""
                  className="w-full  rounded  h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <div className="">

              <div className="flex flex-col flex-1  h-full">
              <div className="border-2">
                <div>
                  <h2 className="text-3xl bg-secondary-green p-4 font-extrabold text-secondary-cream mb-2">
                    The Florist
                  </h2>
                  <p className="text-md font-mono p-4 font-semibold mb-4">
                    Designed to support florists in planning and crafting flower
                    arrangements based on occasion. Users could explore and
                    study flora in a searchable library sourced via the{" "}
                    <Link
                      className="hover:underline italic decoration-accent-orange font-bold underline-accent-orange text-secondary-purple"
                      href="https://perenual.com/docs/api"
                    >
                      Perenual API
                    </Link>
                    .
                  </p>
                </div>
                <div className="bg-secondary-brown mt-4 rounded shadow-lg/20 ">
                  <p className="text-xl p-2 font-bold bg-accent-yellow   ">
                    Focus areas:
                  </p>
                  <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                    <ul className="list-disc px-5">
                      <li className="italic font-semibold">
                        Digitize planning phase for florists
                      </li>
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
                </div>
                <div className="bg-secondary-brown  rounded-t shadow-lg/20 ">
                  <p className="text-xl p-2 font-bold text-secondary-cream bg-secondary-brown   ">
                    Key features:
                  </p>
                  <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                    <ul className="list-disc px-5">
                      <li className="italic font-semibold">
                        Extensive library of flowers and their properties

                      </li>
                      <li className="italic font-semibold">
                        Saving personal favorites of flower compositions

                      </li>
                 
                    </ul>
                  </div>
                </div>
               
              </div>
               
               
                <div className="flex  flex-wrap gap-4 mt-4">
                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/Logomark_Full Color.png"
                      alt="Firebase"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/react.png"
                      alt="React"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/ts-logo-128.png"
                      alt="TypeScript"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/expo-seeklogo.png"
                      alt="Expo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/csslogo.png"
                      alt="CSS"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">

              <div className="flex flex-col flex-1  h-full">
              <div className="border-2">
                <div>
                  <h2 className="text-3xl bg-secondary-purple p-4 font-extrabold text-secondary-cream mb-2">
                    Mapping Industries
                  </h2>
                  <p className="text-md font-mono p-4 font-semibold mb-4">
                    Built during my internship at Redmind AB, this project focused on backend systems and UI features to manage local work orders at golf clubs world wide using GIS functions.
                  </p>
                </div>
                <div className="bg-secondary-brown mt-4 rounded shadow-lg/20 ">
                  <p className="text-xl p-2 font-bold bg-accent-yellow   ">
                    Focus areas:
                  </p>
                  <div className="p-4 bg-gray-50/90 inset-shadow-sm inset-shadow-black ">
                    <ul className="list-disc px-5">
                      <li className="italic font-semibold">
Create assets and place them on a map
                      </li>
                      <li className="italic font-semibold">
Use global assets to create local work worders
                      </li>
                      <li className="italic font-semibold">
Assign work orders to local staff
                      </li>

                    </ul>
                  </div>
                </div>

               
              </div>
               
               
                <div className="flex  flex-wrap gap-4 mt-4">
                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/Logomark_Full Color.png"
                      alt="Firebase"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/react.png"
                      alt="React"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
                    <img
                      src="/logos/ts-logo-128.png"
                      alt="TypeScript"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>



                  <div className="w-14 h-14 p-2 bg-white flex items-center justify-center shadow-md shadow-black/20 rounded-md ">
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

      </main>
    </div>
  );
}
