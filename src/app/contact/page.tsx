'use client'

import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageCircleMore,
} from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-sans text-accent mb-6">
          Get In Touch
        </h1>
        <p className="text-md sm:text-lg text-muted-foreground font-mono font-semibold mb-8">
          Whether it’s about a job, a project, a game idea, or just a question — I’m always down to chat.
        </p>

        {/* Contact Links */}
        <div className="flex justify-center gap-6 sm:gap-10 mt-6 text-muted-foreground">
          <a
            href="mailto:teofredev@gmail.com"
            className="hover:text-accent transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/TeodorFredriksson95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/teodor-fredriksson-919606b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>

        </div>
      </div>
    </main>
  );
}
