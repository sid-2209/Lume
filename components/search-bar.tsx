"use client";

import { useState } from "react";
import { Search, CornerDownLeft } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // Handle search functionality here
      console.log("Search query:", query);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <h1 className="mb-6 text-3xl font-semibold text-foreground md:text-4xl">
        How can we help?
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex h-16 items-center gap-4 rounded-full border-2 border-border bg-muted px-6 transition-colors hover:border-foreground/20 focus-within:border-foreground/40">
          <Search className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask us anything..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Search"
          />
          <button
            type="submit"
            aria-label="Submit search"
            className="flex-shrink-0 transition-opacity hover:opacity-70"
          >
            <CornerDownLeft className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </form>
    </div>
  );
}
