'use client'

import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem
} from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function NavDropdown() {
  return (
<Menu as="li" className="relative hidden md:block list-none">
      <MenuButton className="flex  hover:cursor-pointer items-center gap-1 px-3 py-2 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent focus:outline-none md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        Projects
        <ChevronDownIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />
      </MenuButton>

      <MenuItems className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-800">
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <a
                href="/games"
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-white'
                }`}
              >
                Games
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="/web"
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-white'
                }`}
              >
                Web
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="/appsandmobile"
                className={`block px-4 py-2 text-sm ${
                  active ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' : 'text-gray-700 dark:text-white'
                }`}
              >
                Apps & Mobile
              </a>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
