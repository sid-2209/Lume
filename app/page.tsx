import { SearchBar } from "@/components/search-bar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <div className="container mx-auto px-4">
        <SearchBar />
      </div>
      <Sidebar />
    </div>
  );
}
