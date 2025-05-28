'use client'
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TechCategory } from '@/components/TechCategory';
import Link from 'next/link';
import Section from '@/components/section';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr_100px] gap-12 items-start">

      <aside className="flex flex-col items-center gap-4">
        <Image
          src="/assets/cv_profilepic4.jpg"
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
          <Link href="https://github.com/TeodorFredriksson95" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </Link>
          <Link href="https://linkedin.com/in/teodor-fredriksson-919606b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </Link>
          <Link href="mailto:teofredev@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </Link>
        </div>
      </aside>

      <section>
        <h1 className="text-4xl font-extrabold text-accent mb-4">About Me</h1>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed mb-4">
          I'm a developer with a passion for code, games, and solving problems. I enjoy building web applications and systems just as much as cooking up game worlds, and I love it when tech meets aesthetics.
        </p>
        <p className="text-lg font-sans text-muted-foreground  leading-relaxed mb-4">
          Outside the screen, I love playing guitar and staying active. I often get lost in music, ideas, and thoughts about the future. Animals have always been a big part of my life, and one of my long-term goals is to be a dog daddy.
        </p>
        <p className="text-lg font-sans text-muted-foreground  leading-relaxed">
          Want to talk game ideas, collaborations, or code (or dog breeds)?
        </p>

        <div className="flex md:py-16 py-8 flex-wrap gap-4 mt-4  justify-start">
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/jsIconGreen.svg" alt="Nodejs" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/javascript-seeklogo.png" alt="Javascript" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/blender_icon_64x64.png" alt="blender" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/Logomark_Full Color.png" alt="Firebase" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/react.png" alt="React" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/UE-Icon-2023-Black.png" alt="Unreal Engine 5" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/ts-logo-128.png" alt="TypeScript" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/GitHub_Logo.png" alt="Github" className="max-w-full max-h-full object-contain" />
  </div>
  <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/csharpIcon.png" alt="C#" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/godot-seeklogo.png" alt="Godot" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/trello-icon-gradient-blue@2x.png" alt="trello" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/MYSQL.png" alt="MySQL" className="max-w-full max-h-full object-contain" />
  </div>


    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/htmllogo.png" alt="Html" className="max-w-full max-h-full object-contain" />
  </div>

    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/expo-seeklogo.png" alt="Expo" className="max-w-full max-h-full object-contain" />
  </div>

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
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/Microsoft_Azure.svg" alt="Azure" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/dotnet-logo.png" alt="dotnet" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/PHP-logo.svg" alt="PHP" className="max-w-full max-h-full object-contain" />
  </div>
    <div className="w-16 h-16 p-2 flex items-center justify-center bg-background rounded-2xl shadow-md shadow-black/20">
    <img src="/logos/wordpress.png" alt="Wordpress" className="max-w-full max-h-full object-contain" />
  </div>
        </div> 
      </section>


      {/* <aside className="">
        
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

      </aside> */}
    </main>
  );
}
