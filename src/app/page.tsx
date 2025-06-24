import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="py-4 px-8 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">Artist Manager</h1>
        <nav className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/artists" className="hover:underline">Artists</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="text-center py-16 px-8">
          <h2 className="text-4xl font-bold mb-4">Discover and book amazing talent</h2>
          <p className="max-w-xl mx-auto mb-6">
            Manage your favorite performers and connect with artists for your next event.
          </p>
          <Button asChild>
            <Link href="/artists">Explore Artists</Link>
          </Button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-16">
          {[
            { title: "Singers", desc: "Find vocal talents for any genre." },
            { title: "Dancers", desc: "Energetic performers for your stage." },
            { title: "Speakers", desc: "Engaging voices for conferences." },
            { title: "DJs", desc: "Keep the party going all night." },
          ].map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
                <CardDescription>{c.desc}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
