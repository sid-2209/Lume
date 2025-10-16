"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/contexts/sidebar-context";

const services = [
  {
    name: "Smart Systems",
    href: "/services/smart-systems",
    description: "Automate your work, amplify your time",
  },
  {
    name: "Intelligent Solutions",
    href: "/services/intelligent-solutions",
    description: "Bring AI into your everyday decisions",
  },
  {
    name: "DataCraft",
    href: "/services/datacraft",
    description: "Turn raw data into clarity and growth",
  },
];

const foundry = [
  {
    name: "Book a session",
    href: "/foundry/book-session",
    description: "Let us help you build what's next",
  },
];

export function Sidebar() {
  const { isOpen, close } = useSidebar();
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-16 z-50 flex h-[calc(100vh-4rem)] w-72 items-center border-l border-border bg-background transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="px-8">
        <div className="space-y-12">
          {/* Services */}
          <div className="space-y-8">
            <Link href="/services">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                Services
              </h2>
            </Link>
            <ul className="ml-4 space-y-6">
              {services.map((service) => {
                const isActive = pathname === service.href;
                return (
                  <li key={service.name} className="group relative">
                    <Link
                      href={service.href}
                      className={`block text-lg transition-colors hover:text-primary ${
                        isActive ? "font-bold text-primary" : "text-foreground"
                      }`}
                    >
                      {service.name}
                    </Link>
                    <div className="pointer-events-none absolute right-full top-1/2 mr-16 -translate-y-1/2 max-w-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="whitespace-nowrap text-right text-base italic text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Foundry */}
          <div className="space-y-8">
            <Link href="/foundry">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                Foundry
              </h2>
            </Link>
            <ul className="ml-4 space-y-6">
              {foundry.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} className="group relative">
                    <Link
                      href={item.href}
                      className={`block text-lg transition-colors hover:text-primary ${
                        isActive ? "font-bold text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="pointer-events-none absolute right-full top-1/2 mr-16 -translate-y-1/2 max-w-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="whitespace-nowrap text-right text-base italic text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Inside Lume */}
          <div className="space-y-8">
            <Link href="/inside-lume">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                Inside Lume
              </h2>
            </Link>
          </div>

          {/* Let's Talk */}
          <div className="space-y-8">
            <Link href="/lets-talk">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                Let&apos;s Talk
              </h2>
            </Link>
          </div>

          {/* FAQs */}
          <div className="space-y-8">
            <Link href="/faqs">
              <h2 className="text-xs font-semibold tracking-widest text-muted-foreground transition-colors hover:text-primary cursor-pointer">
                <span className="uppercase">FAQ</span>s
              </h2>
            </Link>
          </div>
        </div>
      </nav>
    </aside>
    </>
  );
}
