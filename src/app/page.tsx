import Link from "next/link";
import { Mic2, Zap, Megaphone, Disc3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const categories = [
  { title: "Singers", desc: "Find vocal talents for any genre.", icon: Mic2 },
  { title: "Dancers", desc: "Energetic performers for your stage.", icon: Zap },
  { title: "Speakers", desc: "Engaging voices for conferences.", icon: Megaphone },
  { title: "DJs", desc: "Keep the party going all night.", icon: Disc3 },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="text-center py-20 bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Discover Amazing Talent</h1>
        <p className="max-w-xl mx-auto mb-6">
          Your one-stop platform to book and manage performers for any event.
        </p>
        <Button asChild size="lg" variant="secondary" className="text-primary">
          <Link href="/artists">Explore Artists</Link>
        </Button>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 -mt-8 pb-16">
        {categories.map(({ title, desc, icon: Icon }) => (
          <Card key={title} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Icon className="size-8 text-primary" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>
    </div>
  );
}
