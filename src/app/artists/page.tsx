import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ArtistsPage() {
  return (
    <section className="mx-auto max-w-2xl py-16 px-8 flex flex-col items-center gap-4 text-center">
      <h1 className="text-3xl font-bold">Artists</h1>
      <p className="text-muted-foreground">This is a placeholder page for artist listings.</p>
      <Button asChild variant="outline">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  );
}
