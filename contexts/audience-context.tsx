"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AudienceType = "individuals" | "msmes";

interface AudienceContextType {
  audienceType: AudienceType;
  setAudienceType: (type: AudienceType) => void;
}

const AudienceContext = createContext<AudienceContextType | undefined>(undefined);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audienceType, setAudienceType] = useState<AudienceType>("individuals");

  return (
    <AudienceContext.Provider value={{ audienceType, setAudienceType }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (context === undefined) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return context;
}
