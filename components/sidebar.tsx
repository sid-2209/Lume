"use client";

import Link from "next/link";

const services = [
  {
    name: "Smart Systems",
    href: "/services/smart-systems",
    description: "Automate your work, amplify your time.",
  },
  {
    name: "Intelligent Solutions",
    href: "/services/intelligent-solutions",
    description: "Bring AI into your everyday decisions.",
  },
  {
    name: "DataCraft",
    href: "/services/datacraft",
    description: "Turn raw data into clarity and growth.",
  },
];

const foundry = [
  {
    name: "Book a session",
    href: "/foundry/book-session",
    description: "Schedule time with our experts.",
  },
];

export function Sidebar() {
  return (
    <aside className="fixed right-0 top-16 flex h-[calc(100vh-4rem)] items-center border-l border-border">
      <nav className="px-8">
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </h2>
            <ul className="ml-4 space-y-6">
              {services.map((service) => (
                <li key={service.name} className="group relative">
                  <Link
                    href={service.href}
                    className="block text-lg text-foreground transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                  <div className="pointer-events-none absolute right-full top-1/2 mr-16 -translate-y-1/2 max-w-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="whitespace-nowrap text-right text-base italic text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Foundry
            </h2>
            <ul className="ml-4 space-y-6">
              {foundry.map((item) => (
                <li key={item.name} className="group relative">
                  <Link
                    href={item.href}
                    className="block text-lg text-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                  <div className="pointer-events-none absolute right-full top-1/2 mr-16 -translate-y-1/2 max-w-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="whitespace-nowrap text-right text-base italic text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}
