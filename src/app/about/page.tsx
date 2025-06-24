import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-center max-w-md">Learn more about the Artist Manager platform.</p>
      <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
    </div>
  );
}
