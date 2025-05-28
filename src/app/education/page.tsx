"use client";

import FeatureIcon from "@/components/FeatureIcon";
import Section from "@/components/section";
import Link from "next/link";

export default function EducationPage() {
  return (
    <div className="grid grid-rows-[_1fr]  justify-items-center min-h-screen ">
      <main className="flex flex-col  row-start-2 w-full">
        <Section className="text-center   ">
          <div className="container  bg-gray-50 rounded-md border-2 border-black/50 shadow-lg/20 p-4 mx-auto ">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">
              Education
            </h1>
            <div className="flex justify-center mb-4">
              <FeatureIcon
                src="/icons/student.svg"
                alt="Student cap icon"
                label=""
              />
            </div>
            <p className="text-lg w-full md:w-4/7 mx-auto font-mono text-muted-foreground font-semibold">
              My learning has been shaped by formal education, real-world
              projects, and mentors who believed in learning by doing{" "}
            </p>
          </div>
        </Section>
        <Section>
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="bg-gray-50 p-5 rounded shadow-lg">
              <div className="flex-1 flex flex-col gap-6 max-w-xl mx-auto">
                <div className="max-w-xl border-1 border-black/50 bg-blue-200/80 shadow-lg/20 rounded p-4">
                  <h2 className="text-3xl lg:text-2xl font-extrabold font-sans  mb-3 border-b-2 pb-1">
                    .NET Full Stack | Newton School of Applied Sciences
                    <span className="font-semibold text-md italic">(2021–2023)</span>
                  </h2>
                  <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
                    Practical, industry-relevant training in both backend and
                    frontend development, cloud tools, agile workflows, and
                    secure design patterns.
                  </p>
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

                <div className="p-4 bg-secondary-bg/50 rounded-lg border-black/50 border-r-1 border-b-1 border-t-1 shadow-md border-l-4 border-l-accent">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="border-b-1 border-black mb-2">
                    <h3 className="text-lg italic font-bold text-primary-changed mb-2">
                      "Highly recommended to any employer"
                    </h3>
                  </div>
                  <p className="italic  font-semibold text-muted-foreground mb-2">
                    "The group demonstrated a scientific and analytical
                    approach, delivering a professional thesis report. /.../
                    Their work reflects the maturity of fully qualified
                    engineers and they are highly recommended to any employer."
                  </p>
                  <p className="italic text-sm text-muted-foreground mb-2">
                    The above quote has been translated from Swedish.
                  </p>
                  <Link
                    className="text-md text-accent font-bold hover:underline decoration-primary"
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
                    className="font-semibold italic mt-2 underline hover:cursor-pointer hover:text-black/80"
                  >
                    <h4 className="font-semibold italic mt-2 underline hover:cursor-pointer hover:text-black/80">
                      Download Low-code thesis project (SE)
                    </h4>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded shadow-lg">
              <div className="flex-1 flex flex-col gap-6 max-w-xl mx-auto">
                <div className="p-4 bg-blue-200/80 border-1 border-black/50 rounded-lg shadow-md    ">
                  <h2 className="text-3xl lg:text-2xl font-extrabold font-sans  mb-3 border-b-2 pb-1">
                    Cybersecurity | Nackademin <span className="font-semibold text-md italic">(2025-3 — 2025-5)</span>
                  </h2>
                  <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
                    A program covering threat modeling, technical mitigation,
                    and cyber law. Hands-on experience with pentesting using
                    virtual machines hosted on Azure, analysis of cyber kill
                    chains and core cybersecurity principles.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-4">
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

                {/* Cybersecurity Recommendation */}
                <div className="p-4 bg-secondary-bg/50 rounded-lg border-black/50 border-r-1 border-b-1 border-t-1 shadow-md border-l-4 border-l-accent">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="border-b-1 border-black mb-2">
                    <h3 className="text-lg italic font-bold text-primary-changed mb-2">
                      "Brilliant Work!"
                    </h3>
                  </div>
                  <p className="italic  font-semibold text-muted-foreground mb-2">
                    “This is a brilliantly executed analysis that demonstrates
                    both technical expertise and a strong ability to clearly
                    communicate complex concepts. The risk matrix is both
                    precise and insightful, showing excellent strategic
                    thinking.”
                  </p>
                  <p className="italic text-sm text-muted-foreground mb-2">
                    The above quote has been translated from Swedish.
                  </p>
                  <Link
                    className="text-md text-accent font-bold hover:underline decoration-primary"
                    href="https://www.linkedin.com/in/kakashidota/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    - Robin Kamo, Cybersecurity Instructor
                  </Link>
                  <a
                    href="/assets/Teodor Fredriksson Threat Analysis And Cyber Kill Chain (SE).zip"
                    download
                    className="font-semibold italic mt-2 underline hover:cursor-pointer hover:text-black/80"
                  >
                    <h4 className="font-semibold italic mt-2 underline hover:cursor-pointer hover:text-black/80">
                      Download assignment on threat analysis and the cyber kill chain (SE)
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-primary text-background py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-sans mb-6">
              Want to talk code?
            </h2>
            <p className="text-md sm:text-lg font-mono font-semibold mb-6">
              Senior or junior, if you ever want to talk code, games, styles, or
              just want to do a feedback trade, I'm always down for a chat.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
