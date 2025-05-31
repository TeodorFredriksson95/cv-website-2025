"use client";

import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";
import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <section className="text-center pt-0  ">
          <div className="  bg-secondary-green shadow-lg/20  p-8 md:p-15 ">
            <h1 className="text-4xl sm:text-5xl font-semibold  text-secondary-cream leading-tight mb-3">
              Education
        </h1>
            <div className="flex justify-center mb-4 border-b-3 border-b-accent-orange w-2/10 mx-auto"></div>
            <p className="text-lg w-full md:w-4/7 mx-auto text-white/80 font-semibold">
              My learning has been shaped by formal education, real-world
              projects, and mentors who believed in learning by doing{" "}
            </p>
          </div>
        </section>
        <Section>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className=" rounded ">
              <div className="flex-1 flex flex-col gap-6 max-w-xl mx-auto">
                <div className="max-w-xl border-2 border-black shadow-lg/20 ">
                  <h2 className="text-3xl bg-secondary-green  p-4 text-secondary-cream lg:text-2xl font-extrabold font-sans  mb-3 border-b-2">
                    .NET Full Stack | Newton School of Applied Sciences
                    <span className="font-semibold text-md italic">(2021–2023)</span>
                  </h2>
                  <p className="text-md p-4 font-mono text-muted-foreground font-semibold ">
                    Practical, industry-relevant training in both backend and
                    frontend development, cloud tools, agile workflows, and
                    secure design patterns.
                  </p>
                  <div className="flex p-4 flex-wrap gap-4">
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
                        src="/logos/csharpIcon.png"
                        alt="C#"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/MYSQL.png"
                        alt="MySQL"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/htmllogo.png"
                        alt="Html"
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
                        src="/logos/Microsoft_Azure.svg"
                        alt="Azure"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/dotnet-logo.png"
                        alt="dotnet"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="   border-secondary-brown border-r-1 border-b-1 border-t-1 rounded-lg shadow-md  border-l-4 border-l-accent">
                  <div className="flex items-center bg-accent-orange/80 rounded-t p-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-secondary-cream"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="border-b-1 border-black  bg-accent-orange/80">
                    <h3 className="text-lg px-2 italic  font-bold ">
                      "Highly recommended to any employer"
                    </h3>
                    <h4 className="text-md text-black/80 italic px-2 font-bold  mb-2 ">
                      Low-code thesis project
                    </h4>
                  </div>
                  <div className="p-2 bg-gray-50/90 rounded-lg  ">

                  <p className="italic  mb-2">
                    "The group demonstrated a scientific and analytical
                    approach, delivering a professional thesis report. /.../
                    Their work reflects the maturity of fully qualified
                    engineers and they are highly recommended to any employer."
                  </p>
                  <div className="border-t-1 mt-2 mb-2"></div>
                  <p className="italic text-sm font-semibold mb-4">
                    The above quote has been translated from Swedish.
                  </p>
                  <Link
                    className="text-md text-secondary-green font-bold hover:text-accent-orange hover:cursor-pointer underline hover:decoration-accent-orange"
                    href="https://www.kth.se/profile/subasic/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - Nihad Subasic, Examiner & Lecturer at KTH Royal Institute
                    of Technology
                  </Link>
                  <a
                    href="/Low_Code_applikationer_och_deras_relevans_i_nutid.docx.pdf"
                    download
                    className="font-semibold text-secondary-green italic mt-2 hover:text-accent-orange hover:cursor-pointer underline hover:decoration-accent-orange   "
                  >
                    <h4 className="font-semibold italic mt-2 underline hover:cursor-pointer ">
                      Download Low-code thesis project (SE)
                    </h4>
                  </a>
                </div>
                  </div>

              </div>
            </div>

            <div className=" ">
              <div className="flex-1 flex flex-col gap-6 max-w-xl mx-auto">
                <div className=" border-2 border-black  shadow-md    ">
                  <h2 className="text-3xl bg-secondary-purple p-4 text-secondary-cream lg:text-2xl font-extrabold font-sans  border-b-2">
                    Cybersecurity | Nackademin <span className="font-semibold text-md italic">(2025-3 — 2025-5)</span>
                  </h2>
                  <p className="text-md p-4 font-mono text-muted-foreground font-semibold mb-4">
                    A program covering threat modeling, technical mitigation,
                    and cyber law. Hands-on experience with pentesting using
                    virtual machines hosted on Azure, analysis of cyber kill
                    chains and core cybersecurity principles.
                  </p>
                  <div className="flex flex-wrap gap-4 p-4">
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/cyber-triad-1.png"
                        alt="Nodejs"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/linux.png"
                        alt="Javascript"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>


                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-background rounded-md shadow-md shadow-black/20">
                      <img
                        src="/logos/Microsoft_Azure.svg"
                        alt="Azure"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                  </div>
                </div>
                      <div className="   border-secondary-brown border-r-1 border-b-1 border-t-1 rounded-lg shadow-md  border-l-4 border-l-accent">
                  <div className="flex items-center bg-accent-orange/80 rounded-t p-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-secondary-cream"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="border-b-1 border-black  bg-accent-orange/80">
                    <h3 className="text-lg px-2 italic  font-bold ">
"Brilliant Work!"
                    </h3>
                    <h4 className="text-md italic text-black/80 px-2 font-bold  mb-2 ">
                      - Analysis on cyber kill chain
                    </h4>
                  </div>
                  <div className="p-2 bg-gray-50/90 rounded-lg  ">

                  <p className="italic  font  ">
                  “This is a brilliantly executed analysis that demonstrates both technical expertise and a strong ability to clearly communicate complex concepts. The risk matrix is both precise and insightful, showing excellent strategic thinking.”
                  </p>
                       <div className="border-t-1 mt-2 mb-2"></div>
                  <p className="italic text-sm font-semibold mb-4">
                    The above quote has been translated from Swedish.
                  </p>
                  <Link
                    className="text-md text-secondary-green hover:text-accent-orange  font-bold hover:underline decoration-accent-orange"
                    href="https://www.linkedin.com/in/kakashidota/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - Robin Kamo, Cybersecurity Instructor
                  </Link>
                  <a
                    href="/assets/Teodor Fredriksson Threat Analysis And Cyber Kill Chain (SE).zip"
                    download
                    className="font-semibold text-secondary-green italic mt-2 underline hover:decoration-accent-orange hover:cursor-pointer"
                  >
                    <h4 className="font-semibold italic mt-2 hover:text-accent-orange hover:cursor-pointer underline hover:decoration-accent-orange">
                      Download assignment on threat analysis and the cyber kill chain (SE)
                    </h4>
                  </a>
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
