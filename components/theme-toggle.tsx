"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative h-8 w-16 rounded-full border-2 border-border bg-background" />
    );
  }

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="relative h-8 w-16 rounded-full border-2 border-border bg-muted transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      type="button"
    >
      <div
        className={`absolute top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-foreground transition-all duration-300 ease-in-out ${
          isDark ? "left-[calc(100%-1.75rem)]" : "left-1"
        }`}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-background" />
        ) : (
          <Sun className="h-4 w-4 text-background" />
        )}
      </div>
    </button>
  );
}
