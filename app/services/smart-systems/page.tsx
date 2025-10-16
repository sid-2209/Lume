"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { AudienceToggle } from "@/components/audience-toggle";
import { useAudience } from "@/contexts/audience-context";

interface CardData {
  id: number;
  title: string;
  description: string;
  professions: string[];
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Educators & Mentors",
    description: "Teach smarter. Guide better.",
    professions: ["Teacher", "Tutor", "Trainer", "Coach", "Academic Counselor"],
  },
  {
    id: 2,
    title: "Medical & Wellness Professionals",
    description: "Care meets intelligence.",
    professions: ["Doctors", "Physiotherapists", "Psychologists", "Nutritionists", "Fitness Trainers"],
  },
  {
    id: 3,
    title: "Independent Creators",
    description: "Build your creative world with less friction.",
    professions: ["Designers", "Writers", "Musicians", "Artists", "Photographers", "Content Creators"],
  },
  {
    id: 4,
    title: "Technical Professionals",
    description: "Smarter workflows for those who build and engineer.",
    professions: ["Engineers", "Developers", "Architects", "Data Analysts", "Scientists"],
  },
  {
    id: 5,
    title: "Consultants & Freelancers",
    description: "More time for what you do best.",
    professions: ["Career Coaches", "Financial Advisors", "Life Coaches", "Language Experts", "Independent Consultants"],
  },
  {
    id: 6,
    title: "Students & Learners",
    description: "Learn efficiently, not endlessly.",
    professions: ["Students", "Researchers", "Competitive Exam Aspirants", "Lifelong Learners"],
  },
  {
    id: 7,
    title: "Skilled Professionals",
    description: "Turn skill into momentum.",
    professions: ["Stylists", "Tailors", "Mechanics", "Electricians", "Craftsmen", "Beauticians"],
  },
  {
    id: 8,
    title: "Writers & Thinkers",
    description: "Clarity, powered by intelligence.",
    professions: ["Journalists", "Authors", "Researchers", "Academics", "Poets"],
  },
  {
    id: 9,
    title: "Performers & Public Figures",
    description: "Focus on your audience, we'll handle the rest.",
    professions: ["Actors", "Influencers", "Musicians", "Speakers", "Artists"],
  },
  {
    id: 10,
    title: "Everyday Professionals",
    description: "Simplify work that powers daily life.",
    professions: ["Office Executives", "Assistants", "Field Workers", "Clerks", "Administrative Professionals"],
  },
];

export default function SmartSystemsPage() {
  const { audienceType } = useAudience();
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setSelectedProfession(null); // Reset profession when a new card is selected
  };

  const handleProfessionClick = (profession: string) => {
    setSelectedProfession(profession);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <AudienceToggle />

      <div className="container mx-auto px-4 pt-32 pb-16">
        {audienceType === "individuals" ? (
          <>
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-medium text-foreground md:text-4xl">
                Smart Systems - For Individuals
              </h1>
              <div className="text-base text-muted-foreground md:text-lg">
                <p>Whether you teach, design, heal, or create — your work deserves the tools of tomorrow.</p>
                <p>Smart Systems bring the future of AI and automation to the people who make the world move.</p>
              </div>
            </div>

            {!selectedCard ? (
              /* Cards Grid - 2 columns with 4:5 aspect ratio */
              <div className="w-full max-w-2xl">
                <h2 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                  Choose a category to get started
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {cardsData.map((card) => (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      className="group relative overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-foreground/20 hover:cursor-pointer"
                      style={{ aspectRatio: '4/5' }}
                    >
                      <div className="flex h-full flex-col justify-between p-6 text-left">
                        <h3 className="text-lg font-medium text-foreground">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Selected Card View with Two Panels */
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                {/* Left Panel - Selected Card (maintains grid width) */}
                <div className="w-full max-w-2xl flex-shrink-0">
                  <h2 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                    You're in your element
                  </h2>
                  <div
                    className="overflow-hidden rounded-lg border border-border bg-background sm:w-[calc((100%-1.5rem)/2)] animate-in slide-in-from-bottom-4 duration-300"
                    style={{ aspectRatio: '4/5' }}
                  >
                    <div className="flex h-full flex-col justify-between p-6">
                      <h3 className="text-lg font-medium text-foreground">
                        {selectedCard.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Profession Options with Border */}
                <div className="flex-1 border-t pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                  <h2 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                    {!selectedProfession ? "Choose what best describes your craft" : "This is your craft"}
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-in slide-in-from-right-4 duration-300">
                    {selectedCard.professions.map((profession, index) => (
                      <button
                        key={index}
                        onClick={() => handleProfessionClick(profession)}
                        className="rounded-lg border border-border bg-background px-6 py-4 text-center transition-colors hover:border-foreground/20 hover:bg-muted/50 hover:cursor-pointer"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {profession}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div>
            <h1 className="text-3xl font-medium text-foreground md:text-4xl">
              Smart Systems - For MSMEs
            </h1>
            {/* Content placeholder */}
          </div>
        )}
      </div>

      <Sidebar />
    </div>
  );
}
