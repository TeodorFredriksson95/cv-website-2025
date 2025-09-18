'use client'
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { TechCategory } from '@/components/TechCategory';
import Link from 'next/link';
import Section from '@/components/section';
import LogoGrid from '@/components/LogoGrid';

export default function AboutPage() {
  return (
    <main className=" mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr_100px] gap-12 items-start">

<aside className="flex flex-col items-center gap-4  bg-secondary-green text-secondary-cream full-height p-4 shadow-lg/50 lg:shadow-lg/90  self-stretch">
        <Image
          src="/assets/cv_profilepic5.jpg"
          alt="Profile picture"
          width={160}
          height={160}
          className="rounded-full border-4 border-secondary-green shadow-secondary-purple shadow-lg object-cover"
        />
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-secondary-cream">Teodor Fredriksson</h2>
          <p className="text-sm font-semibold">Developer & Problem Solver</p>
        <div className='border-b-3 mt-2 border-accent-orange'></div>

        </div>
            <div className="flex flex-col gap-2 mt-2 items-center ">
              <div className="flex items-center gap-4 ">
                <Link
                  href="mailto:teofredev@gmail.com"
                  className="hover:text-accent-yellow transition"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </Link>

                <Link
                  href="https://github.com/TeodorFredriksson95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-yellow transition"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </Link>

                <Link
                  href="https://linkedin.com/in/teodor-fredriksson-919606b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-yellow transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>

              <a
                href="tel:+46761611369"
                className="flex items-center gap-2 text-sm font-mono font-semibold hover:text-accent-yellow  transition"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
                <span>+46 76 161 13 69</span>
              </a>
            </div>
      </aside>

      <section className=' px-8 md:p-8 md:w-2/3 mx-auto  '>
      <div className='border-b mb-3'>

        <h1 className="text-4xl font-extrabold text-secondary-purple">About Me</h1>
      </div>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed mb-4">
          I'm a developer with a passion for code, games, and solving problems. I enjoy building web applications and systems just as much as cooking up game worlds, and I love it when tech meets aesthetics.
        </p>
        <p className="text-lg font-sans text-muted-foreground  leading-relaxed mb-4">
          Outside the screen, I love playing guitar and staying active. I often get lost in music, ideas, and thoughts about the future. Animals have always been a big part of my life, and one of my long-term goals is to be a dog daddy.
        </p>


  <LogoGrid/>
      </section>

    </main>
  );
}
