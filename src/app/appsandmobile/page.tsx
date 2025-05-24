'use client';

import Section from '@/components/section';
import FeatureIcon from '@/components/FeatureIcon';
import Link from 'next/link';

export default function AppsAndMobilePage() {
  return (
    <div className="grid grid-rows-[20px_1fr]  justify-items-center min-h-screen sm:mt-16">

<main className="flex flex-col  row-start-2 w-full">

      {/* Hero Section */}
      <Section className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-3">
          Mobile Development
        </h1>
        <div className="flex justify-center mb-4">
          <FeatureIcon
            src="/icons/mobile2.svg"
            alt="Mobile Icon"
            label=""
          />
        </div>
        <p className="text-lg font-mono text-muted-foreground font-semibold">
          Exploring how mobile devices can connect, motivate, and empower users — through utility, competition, or creativity.
        </p>
      </Section>

      {/* Project: Motivational Exercise */}
<Section>
  <div className="flex flex-col lg:flex-row items-start gap-10">
    <div className="max-w-xl">
      <h2 className="text-3xl font-extrabold text-accent mb-2">Motivational Exercise</h2>
      <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
        Designed to promote daily physical activity through simple challenges, reminders, and social interaction.
        Compete with friends, track progress, and stay motivated with gamified elements.
      </p>

      <p className="text-md text-muted-foreground mb-2 font-semibold">Focus areas:</p>
      <ul className="list-disc list-inside text-md text-muted-foreground mb-5 space-y-1">
        <li>Non-intrusive UX that respects the user's attention</li>
        <li>Incentivize physical activity through positive reinforcement</li>
        <li>Drive engagement through social encouragement and friendly challenges</li>
      </ul>

      <p className="text-md font-mono font-semibold mb-2">Key Features:</p>
      <ul className="list-disc list-inside text-sm font-mono text-muted-foreground mb-4">
        <li>Daily reminders & motivational pings</li>
        <li>Score tracking system for friendly competition</li>
        <li>Low barrier to entry</li>
      </ul>

      <div className="flex flex-wrap gap-2 text-sm font-mono text-background">
        {["React Native", "Expo", "Firebase", "ExpressJS", "NodeJS", "TypeScript", "CSS"].map(tech => (
          <span key={tech} className="bg-accent px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">{tech}</span>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 w-full">
      {["/assets/me_1.png", "/assets/me_2.png"].map((src, i) => (
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

    {/* The Florist */}
<div className=" bg-gradient-to-br from-primary/10 to-background border shadow-xl rounded-lg p-6">
  <div className="flex flex-col flex-1 justify-between h-full">

    {/* Top content */}
    <div>
      <h2 className="text-3xl font-extrabold text-accent mb-2">The Florist</h2>
      <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
        Designed to support florists in planning and crafting flower arrangements based on occasion using an intuitive interface. Users could explore and study flora in a searchable library sourced via the Perenual API.
      </p>
      <ul className="list-disc list-inside text-sm font-mono text-muted-foreground mb-4">
        <li>Plant database exploration via external API</li>
        <li>Event-focused floral planning interface</li>
      </ul>
    </div>

    {/* Bottom-aligned tech badges */}
    <div className="mt-auto flex flex-wrap gap-2 text-sm font-mono text-background pt-4">
      {["React Native", "Expo", "TypeScript", "Perenual API"].map((tech) => (
        <span key={tech} className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">{tech}</span>
      ))}
    </div>
  </div>
</div>


    {/* Mapping Industries */}
{/* Mapping Industries */}
<div className="flex flex-col bg-gradient-to-br from-muted/10 to-background border shadow-xl rounded-lg p-6">
  <div className="flex flex-col flex-1 justify-between h-full">
    <div>
      <h2 className="text-3xl font-extrabold text-accent mb-2">Mapping Industries</h2>
      <p className="text-md font-mono text-muted-foreground font-semibold mb-4">
        Built during my internship, this project focused on backend systems and UI features to manage local work orders at golf clubs world wide.
      </p>
      <ul className="list-disc list-inside text-sm font-mono text-muted-foreground mb-4">
        <li>Backend REST APIs and Firebase auth</li>
        <li>GUI powered by GIS functions</li>
        <li>Agile workflow with peer development</li>
      </ul>
    </div>

    {/* This stays stuck to the bottom */}
    <div className="mt-auto flex flex-wrap gap-2 text-sm font-mono text-background pt-4">
      {["NodeJS", "React", "TypeScript", "Firebase"].map((tech) => (
        <span key={tech} className="bg-primary px-4 py-2 rounded-lg font-semibold shadow-md shadow-black/20">
          {tech}
        </span>
      ))}
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
      Whether you’re planning a side project, looking to expand your team, or just need to bounce ideas — I’d love to hear about it.
    </p>
    <p className="text-md sm:text-lg font-mono mb-8">
      If it involves code, creativity, or creative probelm solving — I’m in.
    </p>
    <Link
      href="mailto:teofredev@gmail.com"
      className="inline-block px-6 py-3 border border-background text-background font-mono font-semibold rounded hover:bg-accent hover:border-accent hover:text-background transition"
    >
      Let’s talk
    </Link>
  </div>
</Section>


    </main>
    </div>

  );
}
