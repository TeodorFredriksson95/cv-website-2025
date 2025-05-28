import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background px-6 py-10 border-t border-muted-foreground/10">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground font-mono text-sm">

        <div className="text-center sm:text-left">
          <p className="mb-1 font-semibold text-accent">Teodor Fredriksson Portfolio</p>
          <p>Built with React, TypeScript and Tailwind CSS</p>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2">
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

          {/* Phone Number Below */}
          <Link
            href="tel:+46761611369"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <Phone className="w-4 h-4" />
            <span>+46 76 161 13 69</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}
