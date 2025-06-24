import Link from "next/link";

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
          <Link
            href="/artists"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Explore Artists
          </Link>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 pb-16">
          {[
            { title: "Singers", desc: "Find vocal talents for any genre." },
            { title: "Dancers", desc: "Energetic performers for your stage." },
            { title: "Speakers", desc: "Engaging voices for conferences." },
            { title: "DJs", desc: "Keep the party going all night." },
          ].map((c) => (
            <div
              key={c.title}
              className="border rounded-lg p-6 shadow-sm flex flex-col items-start"
            >
              <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
