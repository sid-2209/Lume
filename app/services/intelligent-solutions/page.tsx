"use client";

import { Sidebar } from "@/components/sidebar";
import { AudienceToggle } from "@/components/audience-toggle";
import { useAudience } from "@/contexts/audience-context";

export default function IntelligentSolutionsPage() {
  const { audienceType } = useAudience();

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <AudienceToggle />

      <div className="container mx-auto px-4 pt-32">
        {audienceType === "individuals" ? (
          <div>
            <h1 className="text-3xl font-medium text-foreground md:text-4xl">
              Intelligent Solutions - For Individuals
            </h1>
            {/* Content placeholder */}
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-medium text-foreground md:text-4xl">
              Intelligent Solutions - For MSMEs
            </h1>
            {/* Content placeholder */}
          </div>
        )}
      </div>

      <Sidebar />
    </div>
  );
}
