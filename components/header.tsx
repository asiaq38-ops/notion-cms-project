import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";

/**
 * Header component with navigation
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center gap-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              DevNotes
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/notes"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              모든 글
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <SearchBar />
          <a
            href="https://github.com/asiaq38-ops/notion-cms-project"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline" size="sm">GitHub</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
