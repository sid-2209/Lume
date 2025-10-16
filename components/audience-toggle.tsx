"use client";

import { useAudience } from "@/contexts/audience-context";

export function AudienceToggle() {
  const { audienceType, setAudienceType } = useAudience();

  return (
    <div className="fixed left-0 right-0 top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        <div className="inline-flex rounded-lg border border-border bg-muted p-1">
          <button
            onClick={() => setAudienceType("individuals")}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
              audienceType === "individuals"
                ? "bg-foreground text-background shadow-sm"
                : "text-foreground hover:bg-background/50"
            }`}
          >
            For Individuals
          </button>
          <button
            onClick={() => setAudienceType("msmes")}
            className={`rounded-md px-6 py-2 text-sm font-medium transition-all ${
              audienceType === "msmes"
                ? "bg-foreground text-background shadow-sm"
                : "text-foreground hover:bg-background/50"
            }`}
          >
            For MSMEs
          </button>
        </div>
      </div>
    </div>
  );
}
