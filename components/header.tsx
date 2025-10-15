import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
