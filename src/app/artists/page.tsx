import Link from "next/link";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Artists</h1>
      <p className="text-center max-w-md">This is a placeholder page for artist listings.</p>
      <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
}
