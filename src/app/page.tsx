
  import FeatureIcon from "@/components/FeatureIcon"; 
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';


  export default function Home() {
    return (
<div className="  justify-items-center min-h-screen gap-16">
<main className="flex flex-col  row-start-2 w-full">

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
    <p className="text-lg font-mono text-muted-foreground font-semibold max-w-xl">
      I build games, websites, and cross-platform systems
    </p>
  </div>

  <div className="flex flex-row flex-wrap justify-center items-center w-full max-w-xl md:gap-20 mx-auto gap-10">
    <Link href="/gamedevelopment">
      <FeatureIcon
        src="/icons/gamepad2.svg"
        alt="Gamepad icon"
        label="Games"
      />
    </Link>
    <Link href="/webdevelopment">
      <FeatureIcon
        src="/icons/webdev2.svg"
        alt="Web Icon"
        label="Web"
      />
    </Link>
    <Link href="/mobiledevelopment">
      <FeatureIcon
        src="/icons/mobile2.svg"
        alt="Mobile Icon"
        label="Apps"
      />
    </Link>
  </div>

</section>




        </main>
        

      </div>
    );
  }



