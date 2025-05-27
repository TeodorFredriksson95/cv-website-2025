import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
    
    export default function SoME(){

    return (

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
    );

    }
