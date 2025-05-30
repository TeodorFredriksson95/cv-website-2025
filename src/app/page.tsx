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


        </section>
      </main>
    </motion.div>
  );
}
