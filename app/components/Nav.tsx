import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/order-online", label: "Order Online" },
  { href: "/login", label: "Login" },
];

export default function Nav() {
  return (
    <>
      <Link href="/" aria-label="Little Lemon homepage" className="shrink-0">
        <Image
          src="/little-lemon-logo.png"
          alt="Little Lemon logo"
          width={180}
          height={50}
          priority
        />
      </Link>

      <nav aria-label="Main navigation">
        <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[#333333] md:gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition hover:text-[#495E57]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}