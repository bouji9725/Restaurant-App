import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Welcome to Restaurant App
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700">
          The new navbar component is now active on the homepage. Use the link
          below to navigate to the dedicated navbar route.
        </p>

        <Link
          href="/navbar"
          className="mt-8 inline-flex w-fit rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Open Navbar Route
        </Link>
      </main>
    </div>
  );
}
