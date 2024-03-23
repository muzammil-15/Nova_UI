import Sidebar from "@/components/landing_ui/sidebar";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "components",
  description: "Nova UI a component base library using Tailwind Css and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <main className="h-full relative ">
        <div className="hidden h-full w-72 md:flex  md:flex-col md:fixed md:inset-y-0 z-80">
            <Sidebar />
          </div>
          <div className="md:pl-72 pb-10">
            {children}    
          </div>
        </main>

  );
}
