import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/navbar", label: "Navbar Demo" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          Restaurant App
        </Link>

        <ul className="flex items-center gap-5 text-sm font-medium text-zinc-700">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-zinc-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
