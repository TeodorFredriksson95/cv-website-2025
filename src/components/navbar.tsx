'use client';
import { useState } from 'react';
import NavDropdown from './navDropDown';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="sticky top-0 z-100 bg-secondary-brown border-b border-secondary-purple shadow-sm shadow-muted">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/" >
          <div>
            <p className='text-white '>Teodor Fredriksson Portfolio</p>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
  className="inline-flex items-center p-2  text-accent rounded-md hover:cursor-pointer md:hidden hover:bg-accent-orange/20 focus:outline-none group"
        >
          <span className="sr-only">Toggle navigation</span>
  <svg
    className="w-6 h-6 group-hover:stroke-white stroke-accent transition-colors duration-200"
    fill="black"
    stroke="white"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 text-sm font-mono text-white">
            <NavDropdown />
            {[
              { href: '/webdevelopment', label: 'Web', mobileOnly: true },
              { href: '/gamedevelopment', label: 'Games', mobileOnly: true },
              { href: '/mobiledevelopment', label: 'Apps & Mobile', mobileOnly: true },
              { href: '/education', label: 'Education' },
              { href: '/about', label: 'About' },
            ].map(({ href, label, mobileOnly }) => (
              <li key={label} className={mobileOnly ? 'block md:hidden' : ''}>
                <Link
                  href={href}
                  className="block px-3 py-2 rounded hover:text-accent hover:bg-accent-orange/20 transition"
                 onClick={() => setIsOpen(!isOpen)}
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
