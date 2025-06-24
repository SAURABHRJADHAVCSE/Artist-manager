import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-2xl py-16 px-8 flex flex-col items-center gap-4 text-center">
      <h1 className="text-3xl font-bold">About Artist Manager</h1>
      <p className="text-muted-foreground">
        Artist Manager helps event organizers connect with talented performers of all kinds.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  );
}
