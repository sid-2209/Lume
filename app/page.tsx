import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center">
      <div className="container mx-auto px-4">
        <SearchBar />
      </div>
    </div>
  );
}
