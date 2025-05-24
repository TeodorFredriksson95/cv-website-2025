'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function TechCategory({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:w-40 w-full  transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-primary hover:bg-primary/20 hover:cursor-pointer rounded py-3 px-2 font-bold text-md flex justify-between  items-center "
      >
  <span className={`${open ? 'text-accent' : ''}`}>{title}</span>
        <ChevronDown
          className={`w-4 h-4  transition-transform duration-300 ${
            open ? 'rotate-180 text-accent' : ''
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          open ? 'grid-rows-[1fr] mt-2' : 'grid-rows-[0fr]'
        }`}
      >
        <ul className="list-disc px-2 list-inside text-sm text-muted-foreground font-mono space-y-1 overflow-hidden">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
