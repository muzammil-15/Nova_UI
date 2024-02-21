import CodeSnippet from "@/components/landing_ui/codesnipit";
import { codeExample1 } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full mt-10 md:mt-20">
      <div className="flex flex-col gap-5 justify-center h-full max-w-screen-xl mx-auto md:mx-20 p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[600] text_primary">
          Getting Started with NovaUI
        </h2>
        <p className="text_primary text-base md:text-lg ">
          Welcome to NovaUI, your one-stop shop for pre-styled, ready-to-use
          components powered by{" "}
          <Link href={"https://ui.shadcn.com/"} target="_blank" className=" underline font-[600]">
            Shadcn UI
          </Link>{" "}
          you can quickly enhance your web applications with beautiful and
          functional UI elements without the need for extensive coding. This
          guide will walk you through the steps to get started with NovaUI Components to just copy-paste in
          minutes.
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[600] text_primary">
          How to Use?
          
        </h2>
        <p className="text_primary text-base md:text-lg">All you need to use NovaUI components is <Link href={"https://ui.shadcn.com/"} target="_blank" className=" underline  font-[600]">
            Shadcn UI
          </Link>{" "}. NovaUI provides ready-to-use components that you can directly copy and paste into your react code. Each component has specific attributes for customization, ensuring a seamless integration into your applications.</p>

          <h3>Example:</h3>
          <CodeSnippet code={codeExample1} language="html"/>
      </div>

    </main>
  );
}
