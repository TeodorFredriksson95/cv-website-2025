'use client';

import Section from '@/components/section';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <div className="grid grid-rows-[20px_1fr] justify-items-center min-h-screen sm:mt-16">
      <main className="flex flex-col row-start-2 w-full">

        {/* Hero Section */}
        <Section className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">
            Education
          </h1>
          <p className="text-lg font-mono text-muted-foreground font-semibold">
            Formal programs, real-world projects, and the mentors who helped me along the way.
          </p>
        </Section>

        {/* Cybersecurity */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold font-sans text-accent mb-2">
              Cybersecurity | 2025
            </h2>
            <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
              A program covering threat modeling, technical mitigation, and cyber law. Hands-on experience with pentesting using virtual machines hosted on Azure and analysis of cyber kill chains and core cybersecurity principles.
            </p>
                <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-y-2 mb-6 text-sm font-mono text-muted-foreground">
              <li>Linux Kali & Pentesting</li>
              <li>C.I.A Triad</li>
              <li>Defense in Depth</li>
              <li>Least Privilege</li>
              <li>Separation of duties</li>
              <li>Security by Design</li>
              <li>KISS</li>
              <li>Legal & Ethical Considerations</li>
              <li>Network Segmentation</li>
            </ul>

            {/* Quotes */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              



              {[
                {
                  text: "Du har skrivit en insiktsfull och personligt formulerad analys [...] riskmatrisen är både tydlig och träffsäker.",
                  author: "Robin Kamo, Cybersecurity Instructor"
                }
              ].map((q, i) => (
                <blockquote key={i} className="bg-muted/10 border-l-4 border-accent p-6 rounded-lg shadow-md">
                   <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                      <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                  </div>
                  <p className="italic text-sm leading-relaxed text-muted-foreground">“{q.text}”</p>
                  <a className='hover:underline decoration-accent' href='https://www.linkedin.com/in/kakashidota/' target='blank'>
                    <footer className="mt-4 text-xs text-accent font-semibold">{q.author}</footer>
                  </a>
                </blockquote>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/Teodor Fredriksson Cybersäkerhetsanalys för Tech-Högskolan.docx" target="_blank" className="bg-accent text-background px-4 py-2 rounded shadow hover:bg-accent/80 transition font-mono font-semibold">
                View Report 1
              </Link>
              <Link href="/Teodor Fredriksson Inlämningsuppgift 2 Cybersäkerhetsanalys för Tech-Högskolan Innehållsförteckning (2).docx" target="_blank" className="bg-accent text-background px-4 py-2 rounded shadow hover:bg-accent/80 transition font-mono font-semibold">
                View Report 2
              </Link>
            </div>
          </div>
        </Section>

        {/* .NET Program */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold font-sans text-accent mb-2">
              .NET Full Stack | Newton School of Applied Sciences (2021–2023)
            </h2>
            <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
              Practical, industry-relevant training in both backend and frontend development, cloud tools, agile workflows, and secure design patterns.
            </p>

            <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-3 gap-y-2 mb-6 text-sm font-mono text-muted-foreground">
              <li>.NET</li>
              <li>.ASP.NET Core</li>
              <li>C#</li>
              <li>Entity Framework</li>
              <li>REST APIs</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Xamarin</li>
              <li>SQL</li>
              <li>MSSQL</li>
              <li>Database Design</li>
              <li>Azure</li>
              <li>CI/CD Pipelines</li>
              <li>SCRUM</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>PowerShell</li>
            </ul>

            <div className="mt-4 p-4 border-l-4 border-accent bg-muted/10 rounded">
              <p className="text-sm leading-relaxed">
                <span className="text-accent font-semibold">Best Thesis Award</span>: Our final project — a visual low-code database editor — was awarded top honors.
              </p>
              <a className='hover:underline decoration-accent' href='https://www.kth.se/profile/subasic' target='blank'>
                  <footer className="mt-4 text-xs text-accent italic font-semibold">Nihad Subasic, Examiner & Lecturer at KTH Royal Institute of Technology</footer>
              </a>
            </div>
          </div>
        </Section>

        {/* <Section className="text-center max-w-3xl mx-auto mt-12">
          <h3 className="text-xl font-extrabold font-sans text-accent mb-2">Recommendations</h3>
          <p className="text-sm font-mono text-muted-foreground">
            I'm currently waiting on written permissions from former instructors. Their endorsements will appear here soon.
          </p>
        </Section> */}

<Section className="bg-primary text-background py-20">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold font-sans mb-6">
      To the Juniors and Dreamers
    </h2>
    <p className="text-md sm:text-lg font-mono font-semibold mb-6">
      Feeling like you don’t belong? Struggling with imposter syndrome, or unsure if you’ll ever ‘get it’? I’ve been there too.
    </p>
    <p className="text-md sm:text-lg font-mono mb-8">
      If you’re learning, building, or just need someone to remind you that you’re not alone — reach out. I’d love to connect, chat, or share some encouragement.
    </p>
    <a
      href="mailto:teofredev@gmail.com"
      className="inline-block px-6 py-3 border border-background text-background font-mono font-semibold rounded hover:bg-accent hover:border-accent hover:text-background transition"
    >
      Reach Out Anytime
    </a>
  </div>
</Section>

      </main>
    </div>
  );
}
