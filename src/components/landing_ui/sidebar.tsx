"use client";

import Link from "next/link";
import { Montserrat } from 'next/font/google'
import { usePathname } from "next/navigation";

import { cn, components } from "@/lib/utils";
import { codeData } from "@/lib/data/components/data";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });



 const Sidebar = () => {

  const pathname = usePathname();

  return (
    <div className="space-y-4 py-8 flex flex-col h-full mt-16 bg-[#111827] text-white w-full overflow-y-auto border-r border-gray-800">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {codeData.map((component) => (
            <Link
              key={component.title} 
              href={component.urlTitle}
              className={cn(
                "text-lg  group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === component.urlTitle ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                {component.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;