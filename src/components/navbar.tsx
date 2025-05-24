'use client';
import { useState } from 'react';
import NavDropdown from './navDropDown';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="sticky top-0 z-100 bg-background border-b border-muted shadow-sm">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/icons/Unidevweb_logo_small.png" alt="Unidevweb logo" width={32} height={32} />
          <span className="text-xl font-extrabold text-primary">Unidevweb</span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 text-accent rounded-md hover:cursor-pointer md:hidden hover:bg-muted/20 focus:outline-none"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-sm font-mono text-muted-foreground">
            <NavDropdown />
            {[
              { href: '/web', label: 'Web', mobileOnly: true },
              { href: '/games', label: 'Games', mobileOnly: true },
              { href: '/appsandmobile', label: 'Apps & Mobile', mobileOnly: true },
              { href: '/education', label: 'Education' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(({ href, label, mobileOnly }) => (
              <li key={label} className={mobileOnly ? 'block md:hidden' : ''}>
                <Link
                  href={href}
                  className="block px-3 py-2 rounded hover:text-accent hover:bg-muted/20 transition"
                >
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
}
