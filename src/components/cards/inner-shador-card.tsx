import { cn } from "@/lib/utils";
import { ReactNode } from "react";


export default function ModernInnerShadowCardVariant1({title, body}: {title: string, body: string | ReactNode}) {
  return (
    <div
      className={cn(
        "group max-w-lg rounded-2xl border border-neutral-500/10 p-6 dark:border-white/10 ",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "group transform-gpu transition-transform hover:scale-[1.01]",
        "bg-gray-50 dark:bg-neutral-800/80",
      )}
    >
      {/* <div className="-rotate-6 h-40 translate-y-12 text-center font-bold text-neutral-500 text-neutral-500/20 text-xl tracking-tighter ">
        To replace with some content
      </div> */}
      <h6 className="mb-2 origin-left transform-gpu font-semibold text-gray-600 text-xl tracking-tighter transition-all group-hover:scale-90 dark:text-gray-300">
        {title}
      </h6>
      <p className=" text-sm tracking-tight dark:text-gray-400">
        {body}
      </p>
    </div>
  );
}