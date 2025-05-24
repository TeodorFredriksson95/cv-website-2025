import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background px-6 py-10 border-t border-muted-foreground/10 mb:mt-16">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground font-mono text-sm">
        
        <div className="text-center sm:text-left">
          <p className="mb-1 font-semibold text-accent">Unidevweb Portfolio</p>
          <p>Built with React, TypeScript, Tailwind, and 04.00 AM epiphanies.</p>
        </div>

        <div className="flex gap-6 items-center">
          <Link
            href="mailto:teofredev@gmail.com"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </Link>
          <Link
            href="https://github.com/teodorfredriksson95"
            target="_blank"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/teodor-fredriksson-919606b9/"
            target="_blank"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
