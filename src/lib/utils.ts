import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const codeExample1 = `<div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Button text
  </button>
  <button
    type="button"
    className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Button text
  </button>
  <button
    type="button"
    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Button text
  </button>
</div>`

export const components = [
  {
    label: 'Avatar',
    href: '/components/avatar',
  },
  {
    label: 'Button',
    href: '/components/button',

  },
  {
    label: 'Cards',
    href: '/components/cards',
  },
  {
    label: 'Badges',
    href: '/components/badges',
  },
  {
    label: 'Navbar',

    href: '/components/navbar',
  },
  {
    label: 'Footer',
    href: '/components/footer',
  },
  {
    label: 'Carousel',
    href: '/components/carousel',
  },
  
  
];