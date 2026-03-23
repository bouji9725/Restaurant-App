import Navbar from "../components/Navbar";

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-semibold text-zinc-900">Navbar Route</h1>
        <p className="mt-3 text-zinc-700">
          This page is routed at /navbar and uses the shared Navbar component.
        </p>
      </main>
    </div>
  );
}
