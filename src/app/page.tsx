'use client'

import { Github, Linkedin, Mail, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/components/FeatureIcon";
import * as motion from "motion/react-client";
import HomePageCarousel from "@/components/HomePageCarousel";


export default function Home() {
  return (
    <motion.div className="">
      <main className="flex flex-col row-start-2 w-full ">
        <section className="w-full px-8 py-20 sm:px-16 text-center">
          <HomePageCarousel />
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/assets/cv_profilepic4.jpg"
              alt="Profile picture"
              width={160}
              height={160}
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="flex flex-col gap-2 mt-6 items-center text-white ">
              <div className="flex items-center  gap-4">
                <Link
                  href="mailto:teofredev@gmail.com"
                  className="hover:text-accent transition"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </Link>

                <Link
                  href="https://github.com/TeodorFredriksson95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </Link>

                <Link
                  href="https://linkedin.com/in/teodor-fredriksson-919606b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>

              <a
                href="tel:+46761611369"
                className="flex items-center gap-2 text-sm font-mono font-semibold hover:text-accent transition"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
                <span>+46 76 161 13 69</span>
              </a>
            </div>

            <h1 className="text-4xl text-text-dark sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-2">
              Teodor Fredriksson
            </h1>
            <div className="p-5 bg-blue-200/80 border-2 border-gray-600 rounded shadow-2xl">
              <p className=" font-mono text-muted-foreground font-semibold max-w-xl">
                The prospect of creation has always been a huge motivator for
                me. I enjoy the process of searching for and testing what looks
                good, sounds good, feels good. From games, to music, to APIs -
                it's all about the joy of crafting something.
              </p>

            </div>
          </div>

        </section>
      </main>
    </motion.div>
  );
}
