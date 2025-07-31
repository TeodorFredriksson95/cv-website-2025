"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";
import HomePageCarousel from "@/components/HomePageCarousel";
import HomePageDesktopCarousel from "@/components/HomePageDesktopCarousel";
import useMediaQuery from "./hooks/UseMediaQuery";

export default function Home() {
    const isDesktop = useMediaQuery("(min-width: 768px)");  

  return (
    <motion.div className="flex items-center justify-center">
      <main className="w-full flex flex-col-reverse md:flex-row items-center justify-center  md:gap-12">
             <div className="w-full md:w-1/2 flex justify-center">
          {isDesktop ? <HomePageDesktopCarousel /> : <HomePageCarousel />}
        </div>

        <div
          className="w-full md:w-1/2 h-full md:min-h-screen items-center md:items-start bg-secondary-green flex flex-col justify-start md:justify-center text-center md:text-left p-8 text-white 
  shadow-[0_10px_15px_-10px_rgba(0,0,0,0.7)] md:shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.7)]"
        >
          {" "}
          <h1 className="text-4xl font-bold text-shadow-lg mb-4 ">Teodor Fredriksson</h1>
          <div className="border-b-accent-orange border-b-4 w-1/10"></div>
          <p className="text-lg  text-white max-w-md">
            I love making things that look good, work as expected and make people happy.
          </p>
          
          <div className="flex gap-4 mt-6">
            <Link
              href="https://github.com/TeodorFredriksson95"
              className="hover:text-accent-yellow"
            >
              <Github />
            </Link>
            <Link
              href="https://linkedin.com/in/teodor-fredriksson-919606b9/"
              className="hover:text-accent-yellow"
            >
              <Linkedin />
            </Link>
            <Link
              href="mailto:teofredev@gmail.com"
              className="hover:text-accent-yellow"
            >
              <Mail />
            </Link>
          </div>
                    <Link
            href="tel:+46761611369"
              className="hover:text-accent-yellow mt-2 transition-colors flex items-center gap-1"
          >
            
            <Phone className="w-4 h-4" />
            <span>+46 76 161 13 69</span>
          </Link>
        </div>
      </main>
    </motion.div>
  );
}
