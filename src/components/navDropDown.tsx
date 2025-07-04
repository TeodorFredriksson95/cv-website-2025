'use client';

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react';

import { useEffect } from 'react';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function NavDropdown() {
    useEffect(() => {
    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <Menu as="li" className="relative hidden md:block list-none">
      <MenuButton className="flex hover:cursor-pointer items-center gap-1 px-3 py-2 rounded hover:bg-accent-orange/20  text-muted-foreground font-mono focus:outline-none hover:text-accent transition">
        Projects
        <ChevronDownIcon className="w-4 h-4 text-accent" />
      </MenuButton>

      <MenuItems className="absolute z-10 mt-2 w-48 origin-top-right rounded-lg text-secondary-purple font-semibold bg-white border border-muted shadow-xl focus:outline-none">
        <div className="py-1">
          {[
            { href: '/gamedevelopment', label: 'Games' },
            { href: '/webdevelopment', label: 'Web' },
            { href: '/mobiledevelopment', label: 'Mobile' },
          ].map(({ href, label }) => (
            <MenuItem key={href}>
              {({ active }) => (
                <Link
                  href={href}
                  className={`block px-4 py-2 text-sm font-mono  hover:bg-accent-orange/20 ${
                    active
                      ? 'bg-muted text-accent'
                      : 'text-muted-foreground hover:text-accent hover:bg-muted/20'
                  } transition`}
                >
                  {label}
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
