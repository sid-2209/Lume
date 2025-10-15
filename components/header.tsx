"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSidebar } from "@/contexts/sidebar-context";

export function Header() {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-2xl">{siteConfig.name}</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="text-foreground transition-colors hover:text-primary"
          >
            Sign in
          </Link>
          {/* Mobile Menu Toggle - Only visible on mobile */}
          <button
            onClick={toggle}
            className="flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
