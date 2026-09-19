import { ReactNode } from "react";

export function TerminalFrame({
  children,
  command,
}: {
  children: ReactNode;
  command: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-default bg-surface shadow-xl">
      {/* Window Header */}
      <div className="flex items-center border-b border-default bg-elevated px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 flex-1 text-center font-mono text-xs text-muted/70">
          rajairfanahmed@dev:~/portfolio $ {command}
        </div>
        <div className="w-[52px]" /> {/* Spacer to center the title against the dots */}
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm leading-relaxed text-primary md:p-8 md:text-base">
        {children}
      </div>
    </div>
  );
}
