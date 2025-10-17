"use client";

import { useState } from "react";
import Image from "next/image";
import { Sidebar } from "@/components/sidebar";
import { AudienceToggle } from "@/components/audience-toggle";
import { useAudience } from "@/contexts/audience-context";

interface ToolkitItem {
  title: string;
}

interface ProfessionToolkit {
  [profession: string]: ToolkitItem[];
}

interface CardData {
  id: number;
  title: string;
  description: string;
  essence: string;
  professions: string[];
  toolkits: ProfessionToolkit;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "Educators & Mentors",
    description: "Teach smarter. Guide better.",
    essence: "Automate class prep, student progress tracking, and scheduling — while personalizing every learner's experience through AI insights.",
    professions: ["Teachers & Tutors", "Trainers & Coaches", "Academic Counselor"],
    toolkits: {
      "Teachers & Tutors": [
        { title: "AI Lesson Builder" },
        { title: "Smart Schedule & Booking" },
        { title: "Student Progress & Grading Dashboard" },
        { title: "Content & Class Marketing Pack" },
      ],
      "Trainers & Coaches": [
        { title: "Client Program Builder" },
        { title: "1:1 Session Manager" },
        { title: "Group Program & Community Hub" },
        { title: "Lead Capture & Conversion Flow" },
      ],
      "Academic Counselor": [
        { title: "Student Profile & Matching Engine" },
        { title: "Application & Document Assistant" },
        { title: "Counselling Session Toolkit" },
        { title: "Market & Outcome Insights" },
      ],
    },
  },
  {
    id: 2,
    title: "Medical & Wellness Professionals",
    description: "Care meets intelligence.",
    essence: "Simplify record-keeping, client follow-ups, and progress analysis — freeing you to focus on care, not coordination.",
    professions: ["Doctors", "Physiotherapists", "Psychologists", "Nutritionists", "Fitness Trainers"],
    toolkits: {},
  },
  {
    id: 3,
    title: "Independent Creators",
    description: "Build your creative world with less friction.",
    essence: "Streamline content creation, feedback loops, publishing, and portfolio management with AI tools built for your craft.",
    professions: ["Designers", "Writers", "Musicians", "Artists", "Photographers", "Content Creators"],
    toolkits: {},
  },
  {
    id: 4,
    title: "Technical Professionals",
    description: "Smarter workflows for those who build and engineer.",
    essence: "Automate repetitive work — from data cleaning to documentation — and accelerate problem-solving through custom AI models.",
    professions: ["Engineers", "Developers", "Architects", "Data Analysts", "Scientists"],
    toolkits: {},
  },
  {
    id: 5,
    title: "Consultants & Freelancers",
    description: "More time for what you do best.",
    essence: "Let automation handle client scheduling, invoicing, and reports while you focus on delivering insight, not admin.",
    professions: ["Career Coaches", "Financial Advisors", "Life Coaches", "Language Experts", "Independent Consultants"],
    toolkits: {},
  },
  {
    id: 6,
    title: "Students & Learners",
    description: "Learn efficiently, not endlessly.",
    essence: "Personalized study automation, smart summaries, and progress analytics — your own AI learning companion.",
    professions: ["Students", "Researchers", "Competitive Exam Aspirants", "Lifelong Learners"],
    toolkits: {},
  },
  {
    id: 7,
    title: "Skilled Professionals",
    description: "Turn skill into momentum.",
    essence: "Manage bookings, reminders, and client communication seamlessly — letting your craft shine without the clutter.",
    professions: ["Stylists", "Tailors", "Mechanics", "Electricians", "Craftsmen", "Beauticians"],
    toolkits: {},
  },
  {
    id: 8,
    title: "Writers & Thinkers",
    description: "Clarity, powered by intelligence.",
    essence: "AI-assisted ideation, note structuring, research organization, and editing — so your mind stays focused on ideas, not process.",
    professions: ["Journalists", "Authors", "Researchers", "Academics", "Poets"],
    toolkits: {},
  },
  {
    id: 9,
    title: "Performers & Public Figures",
    description: "Focus on your audience, we'll handle the rest.",
    essence: "Smart tools for managing schedules, outreach, collaborations, and content — all tuned for your personal brand.",
    professions: ["Actors", "Influencers", "Musicians", "Speakers", "Artists"],
    toolkits: {},
  },
  {
    id: 10,
    title: "Everyday Professionals",
    description: "Simplify work that powers daily life.",
    essence: "Automate repetitive documentation, reporting, and communication to make your workday lighter and smarter.",
    professions: ["Office Executives", "Assistants", "Field Workers", "Clerks", "Administrative Professionals"],
    toolkits: {},
  },
];

export default function SmartSystemsPage() {
  const { audienceType } = useAudience();
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<string | null>(null);
  const [selectedToolkits, setSelectedToolkits] = useState<string[]>([]);
  const [toolkitConfirmed, setToolkitConfirmed] = useState(false);

  const handleCardClick = (card: CardData) => {
    setSelectedCard(card);
    setSelectedProfession(null); // Reset profession when a new card is selected
  };

  const handleProfessionClick = (profession: string) => {
    setSelectedProfession(profession);
    setSelectedToolkits([]); // Reset toolkit selection when profession changes
    setToolkitConfirmed(false); // Reset confirmation state
  };

  const handleToolkitToggle = (toolkitTitle: string) => {
    setSelectedToolkits((prev) =>
      prev.includes(toolkitTitle)
        ? prev.filter((title) => title !== toolkitTitle)
        : [...prev, toolkitTitle]
    );
  };

  const handleContinue = () => {
    setToolkitConfirmed(true);
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
                  Choose a category to get started.
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {cardsData.map((card) => (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      className="group relative overflow-hidden rounded-lg border border-border bg-background transition-colors hover:border-foreground/20 hover:cursor-pointer"
                      style={{ aspectRatio: '4/5' }}
                    >
                      {/* Background Images */}
                      {card.id === 1 && (
                        <Image
                          src="/assets/images/individuals/1_Educators_and_Mentors.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 2 && (
                        <Image
                          src="/assets/images/individuals/2_Medical_and_Wellness_Professionals.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 3 && (
                        <Image
                          src="/assets/images/individuals/3_Independent_Creators.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 4 && (
                        <Image
                          src="/assets/images/individuals/4_Technical_Professionals.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 5 && (
                        <Image
                          src="/assets/images/individuals/5_Consultants_and_Freelancers.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 6 && (
                        <Image
                          src="/assets/images/individuals/6_Students_and_Learners.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 7 && (
                        <Image
                          src="/assets/images/individuals/7_Skilled_Professionals.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 8 && (
                        <Image
                          src="/assets/images/individuals/8_Writers_and_Thinkers.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 9 && (
                        <Image
                          src="/assets/images/individuals/9_Performers_and_Public_Figures.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {card.id === 10 && (
                        <Image
                          src="/assets/images/individuals/10_Everyday_Professionals.png"
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                      {/* Content */}
                      <div className="flex h-full flex-col justify-between p-6 text-left relative z-10">
                        <div className="backdrop-blur-[10px] bg-white/70 dark:bg-black/60 rounded-md px-3 py-2 w-fit">
                          <h3 className="text-lg font-medium underline text-black dark:text-white">
                            {card.title}
                          </h3>
                        </div>
                        <div className="backdrop-blur-[10px] bg-white/70 dark:bg-black/60 rounded-md px-3 py-2 w-fit">
                          <p className="text-sm text-black dark:text-white">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Selected Card View with Two Panels */
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-start">
                {/* Left Panel - Selected Card (maintains grid width) */}
                <div className="w-full max-w-2xl flex-shrink-0 lg:sticky lg:top-32">
                  <h2 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                    You're in your element.
                  </h2>
                  <div
                    className="relative overflow-hidden rounded-lg border border-border bg-background sm:w-[calc((100%-1.5rem)/2)] animate-in slide-in-from-bottom-4 duration-300"
                    style={{ aspectRatio: '4/5' }}
                  >
                    {/* Background Images for Selected Card */}
                    {selectedCard.id === 1 && (
                      <Image
                        src="/assets/images/individuals/1_Educators_and_Mentors.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 2 && (
                      <Image
                        src="/assets/images/individuals/2_Medical_and_Wellness_Professionals.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 3 && (
                      <Image
                        src="/assets/images/individuals/3_Independent_Creators.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 4 && (
                      <Image
                        src="/assets/images/individuals/4_Technical_Professionals.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 5 && (
                      <Image
                        src="/assets/images/individuals/5_Consultants_and_Freelancers.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 6 && (
                      <Image
                        src="/assets/images/individuals/6_Students_and_Learners.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 7 && (
                      <Image
                        src="/assets/images/individuals/7_Skilled_Professionals.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 8 && (
                      <Image
                        src="/assets/images/individuals/8_Writers_and_Thinkers.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 9 && (
                      <Image
                        src="/assets/images/individuals/9_Performers_and_Public_Figures.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {selectedCard.id === 10 && (
                      <Image
                        src="/assets/images/individuals/10_Everyday_Professionals.png"
                        alt={selectedCard.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        priority
                      />
                    )}
                    {/* Content */}
                    <div className="flex h-full flex-col justify-between p-6 relative z-10">
                      <div className="backdrop-blur-[10px] bg-white/70 dark:bg-black/60 rounded-md px-3 py-2 w-fit">
                        <h3 className="text-lg font-medium underline text-black dark:text-white">
                          {selectedCard.title}
                        </h3>
                      </div>
                      <div className="backdrop-blur-[10px] bg-white/70 dark:bg-black/60 rounded-md px-3 py-2 w-fit">
                        <p className="text-sm text-black dark:text-white">
                          {selectedCard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground md:text-base">
                    {selectedCard.essence}
                  </p>

                  {/* CTA Cards - Always visible when category selected */}
                  <div className="mt-8 space-y-4">
                    {/* Card 1: Discover How Smart Systems Work */}
                    <button className="w-full rounded-lg border border-border bg-background p-6 text-left transition-colors hover:border-foreground/20">
                      <h3 className="text-xl font-medium text-foreground md:text-2xl">
                        Discover How Smart Systems Work for You
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground md:text-lg">
                        A clear, practical guide to help you plan with confidence.
                      </p>
                    </button>

                    {/* Card 2: Schedule a Consultation */}
                    <button className="w-full rounded-lg border border-border bg-background p-6 text-left transition-colors hover:border-foreground/20">
                      <h3 className="text-xl font-medium text-foreground md:text-2xl">
                        Schedule a Consultation
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground md:text-lg">
                        Don't see what you're looking for? Let's talk through your ideas and design something that fits perfectly.
                      </p>
                    </button>
                  </div>
                </div>

                {/* Right Panel - Profession Options with Border */}
                <div className="flex-1 border-t pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
                  {!selectedProfession ? (
                    <>
                      <h2 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                        Choose what best describes your craft
                      </h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-in slide-in-from-right-4 duration-300">
                        {selectedCard.professions.map((profession, index) => (
                          <button
                            key={index}
                            onClick={() => handleProfessionClick(profession)}
                            className="rounded-lg border border-border bg-background px-6 py-4 text-left transition-colors hover:border-foreground/20 hover:bg-muted/50 hover:cursor-pointer"
                          >
                            <span className="text-lg font-medium text-foreground">
                              {profession}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                        This is your craft.
                      </h2>
                      <div className="animate-in slide-in-from-right-4 duration-300">
                        <div className="w-fit rounded-lg border border-border bg-background px-6 py-4">
                          <span className="text-lg font-medium text-foreground">
                            {selectedProfession}
                          </span>
                        </div>
                        <h3 className="mt-8 mb-6 text-xl font-medium text-foreground md:text-2xl">
                          {toolkitConfirmed ? "This is your Toolkit." : "Toolkit. Which is best for you?"}{" "}
                          {!toolkitConfirmed && (
                            <span className="text-base italic font-normal text-muted-foreground">
                              Choose all that apply.
                            </span>
                          )}
                        </h3>
                        {selectedCard.toolkits[selectedProfession] && (
                          <>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-1">
                              {selectedCard.toolkits[selectedProfession]
                                .filter((toolkit) => !toolkitConfirmed || selectedToolkits.includes(toolkit.title))
                                .map((toolkit, index) => {
                                  const isSelected = selectedToolkits.includes(toolkit.title);
                                  return (
                                    <button
                                      key={index}
                                      onClick={() => !toolkitConfirmed && handleToolkitToggle(toolkit.title)}
                                      disabled={toolkitConfirmed}
                                      className={`overflow-hidden rounded-lg border border-border bg-background transition-all hover:border-foreground/20 ${
                                        isSelected ? "ring-2 ring-primary/50" : ""
                                      } ${!toolkitConfirmed ? "cursor-pointer" : "cursor-default"}`}
                                      style={{ aspectRatio: "4/5" }}
                                    >
                                      <div className="flex h-full flex-col justify-between p-6 text-left">
                                        <h4 className="text-lg font-medium text-foreground">
                                          {toolkit.title}
                                        </h4>
                                      </div>
                                    </button>
                                  );
                                })}
                            </div>
                            {/* Continue Button */}
                            {selectedToolkits.length > 0 && !toolkitConfirmed && (
                              <button
                                onClick={handleContinue}
                                className="mt-8 rounded-lg bg-foreground px-6 py-3 text-base font-medium text-background transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
                              >
                                Continue
                              </button>
                            )}

                            {/* Estimate Breakdown Section */}
                            {toolkitConfirmed && (
                              <div className="mt-12">
                                <h3 className="mb-6 text-xl font-medium text-foreground md:text-2xl">
                                  Here's a Clear Breakdown of Your Estimate
                                </h3>
                                <div className="rounded-lg border border-border bg-background p-8">
                                  <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                      <span className="text-base text-foreground">
                                        Selected Toolkits: {selectedToolkits.length}
                                      </span>
                                    </div>
                                    <div className="border-t border-border pt-4">
                                      <p className="text-sm text-muted-foreground">
                                        Detailed estimate information will be displayed here based on your selected toolkits.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </>
                  )}
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
