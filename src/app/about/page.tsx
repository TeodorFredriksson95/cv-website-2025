'use client'
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TechCategory } from '@/components/TechCategory';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[200px_1fr_300px] gap-12 items-start">

      {/* LEFT: Sidebar */}
      <aside className="flex flex-col items-center gap-4">
        <Image
          src="/assets/profilbild.jpg"
          alt="Profile picture"
          width={160}
          height={160}
          className="rounded-full border-4 border-primary shadow-lg object-cover"
        />
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-accent">Teodor Fredriksson</h2>
          <p className="text-sm text-muted-foreground font-mono">Developer & Problem Solver</p>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/TeodorFredriksson95" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </a>
          <a href="https://linkedin.com/in/teodor-fredriksson-919606b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </a>
          <a href="mailto:teofredev@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </a>
        </div>
      </aside>

      {/* MIDDLE: Bio Text */}
      <section>
        <h1 className="text-4xl font-extrabold text-accent mb-4">About Me</h1>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed mb-4">
          I'm a developer with a passion for code, games, and solving problems. I enjoy building web applications and systems just as much as crafting game worlds — thriving at the intersection of technology and aesthetics.
        </p>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed mb-4">
          Outside the screen, I love playing guitar and staying active. I often get lost in music, ideas, and thoughts about the future. Animals have always been a big part of my life, and if there’s one thing for sure — I plan to be a proud dog dad someday.
        </p>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed">
          Want to talk game ideas, collaborations, or code (or dog breeds)?
        </p>
        <a
          href="mailto:teofredev@gmail.com"
          className="mt-6 inline-block px-6 py-3 border border-primary text-primary font-mono font-semibold rounded hover:bg-primary hover:text-black transition"
        >
          Reach Out
        </a>
      </section>

      {/* RIGHT: Tech Stack */}

      <aside className="">
        
        <TechCategory title="Tools" items={[
          'Azure',
          'Git & GitHub',
          'Trello',
          'Miro',
          'Docker',
          'SCRUM'
        ]} />
                      <TechCategory title="Cybersecurity" items={[
          'Kali Linux',
          'Cyber Kill Chain',
          'The 5 Security Principles',
          'C.I.A Triad'
        ]} />
          <TechCategory title="Backend" items={[
          '.NET',
          'C#',
          'NodeJS',
          'ExpressJS',
          'SQL',
          'Firebase',
          'REST APIs'
        ]} />
        <TechCategory title="Frontend" items={[
          'React',
          'React Native',
          'TypeScript',
          'Expo',
          'NextJS',
          'Tailwind CSS',
          'Bootstrap',
          'HTML & CSS'
        ]} />





        <TechCategory title="Design" items={[
          'Figma',
          'Firefly',
          'Inkarnate',
          'Gimp'
        ]} />

      </aside>
    </main>
  );
}
