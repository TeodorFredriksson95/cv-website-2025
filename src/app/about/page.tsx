import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react'; 

export default function AboutPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
      
      <aside className="flex flex-col items-center gap-4">
        <Image
          src="/assets/profilbild.jpg"
          alt="Profile picture"
          width={160}
          height={160}
          className="rounded-full border-4 border-primary shadow-lg object-cover"
        />
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-accent">Teo Fredriksson</h2>
          <p className="text-sm text-muted-foreground font-mono">Utvecklare & problemlösare</p>
        </div>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com/TeodorFredriksson95" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </a>
          <a href="https://linkedin.com/in/teodor-fredriksson-919606b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </a>
          <a href="mailto:teofredev@gmail.com" aria-label="Email">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-accent transition" />
          </a>
        </div>
      </aside>

      {/* RIGHT: Bio Text */}
      <section>
        <h1 className="text-4xl font-extrabold text-accent mb-4">Om mig</h1>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed mb-4">
          Jag är en utvecklare med en förkärlek för kod, spel och problemlösning.
          Jag bygger lika gärna webbapplikationer och system som spelvärldar, och jag trivs som bäst när teknik möter estetik.
        </p>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed mb-4">
          Utanför skärmen älskar jag att spela gitarr och att träna och tappar ofta bort mig i musik, idéer och tankar om framtiden. Djur har alltid varit en del av mitt liv och om det är en sak som är säker, är det att jag en dag tänker bli en stolt hundpappa.
        </p>
        <p className="text-lg font-mono text-muted-foreground font-semibold leading-relaxed">
          Vill du snacka spelidéer, samarbeten eller projekt, eller bara kod i allmänhet (eller hundraser)?
        </p>
        <a
          href="mailto:teofredev@gmail.com"
          className="mt-6 inline-block px-6 py-3 border border-primary text-primary font-mono font-semibold rounded hover:bg-primary hover:text-black transition"
        >
          Hör av dig
        </a>
      </section>
    </main>
  );
}
