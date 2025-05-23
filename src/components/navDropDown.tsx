'use client';

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function NavDropdown() {
  return (
    <Menu as="li" className="relative hidden md:block list-none">
      <MenuButton className="flex hover:cursor-pointer items-center gap-1 px-3 py-2 rounded hover:bg-muted/20  text-muted-foreground font-mono focus:outline-none hover:text-accent transition">
        Projects
        <ChevronDownIcon className="w-4 h-4 text-accent" aria-hidden="true" />
      </MenuButton>

      <MenuItems className="absolute z-10 mt-2 w-48 origin-top-right rounded-lg bg-background border border-muted shadow-xl focus:outline-none">
        <div className="py-1">
          {[
            { href: '/games', label: 'Games' },
            { href: '/web', label: 'Web' },
            { href: '/appsandmobile', label: 'Apps & Mobile' },
          ].map(({ href, label }) => (
            <MenuItem key={href}>
              {({ active }) => (
                <a
                  href={href}
                  className={`block px-4 py-2 text-sm font-mono  hover:bg-muted/20 ${
                    active
                      ? 'bg-muted text-accent'
                      : 'text-muted-foreground hover:text-accent hover:bg-muted/20'
                  } transition`}
                >
                  {label}
                </a>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
