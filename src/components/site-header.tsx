import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Artist Manager
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/artists" className="hover:underline">
            Artists
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
