import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FeatureIcon from "@/components/FeatureIcon";
import * as motion from "motion/react-client"

export default function Home() {
  return (
    <motion.div

    >
      <main className="flex flex-col row-start-2 w-full">
        <section className="w-full px-8 py-20 sm:px-16 text-center">
          <div className="flex flex-col items-center mb-10">
            <Image
              src="/assets/cv_profilepic4.jpg"
              alt="Profile picture"
              width={160}
              height={160}
              className="rounded-full border-4 border-primary shadow-lg object-cover"
            />
            <div className="flex justify-start gap-4 mt-6 text-muted-foreground">
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
            <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent leading-tight mb-2">
              Teodor Fredriksson
            </h1>
            <div className="p-5 bg-blue-200 border-2 border-gray-600 rounded shadow-2xl">

            <p className=" font-mono text-muted-foreground font-semibold max-w-xl">
              The prospect of creation has always been a huge motivator for me. I enjoy the process of searching for and testing what looks good, sounds good, feels good. From games, to music, to APIs - it's all about the joy of crafting something. 
            </p>
          <motion.div
            className="flex inset-shadow-sm inset-shadow-black mt-5 will-change-transform bg-gray-50/70  border-2 rounded border-gray-400 p-5 flex-row flex-wrap justify-center items-center w-full max-w-xl md:gap-20 mx-auto gap-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <Link href="/gamedevelopment">
              <FeatureIcon
                src="/icons/gamepad2.svg"
                alt="Gamepad icon"
                label="Games"
                delay={0.1}
                />
              </Link>
            <Link href="/webdevelopment">
            <FeatureIcon
              src="/icons/webdev2.svg"
              alt="Web Icon"
              label="Web"
              delay={0.3}
            />
            </Link>
            <Link href="/mobiledevelopment">
            <FeatureIcon
              src="/icons/mobile2.svg"
              alt="Mobile Icon"
              label="Mobile"
              delay={0.5}
            />
            </Link>
          </motion.div>
            </div>
          </div>

          {/* ICONS SHOOT OUT FROM CENTER */}
  
        </section>
      </main>
    </motion.div>
  );
}
