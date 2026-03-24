import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/order-online", label: "Order Online" },
  { href: "/login", label: "Login" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ll-green)] px-4 py-12 text-[var(--ll-surface)] md:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-[140px_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logo.svg"
            alt="Little Lemon logo"
            width={120}
            height={120}
          />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-[var(--ll-surface)]">
            Doormat Navigation
          </h3>
          <ul className="space-y-2 text-sm text-[#333333]">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#495E57]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-[#333333]">Contact</h3>
          <address className="space-y-2 text-sm not-italic text-[#333333]">
            <p>123 Little Lemon Street, Chicago</p>
            <p>(123) 456-7890</p>
            <p>hello@littlelemon.com</p>
          </address>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-[#333333]">
            Social Media Links
          </h3>
          <ul className="space-y-2 text-sm text-[#333333]">
            <li>
              <Link href="https://facebook.com" className="hover:text-[#495E57]">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" className="hover:text-[#495E57]">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://x.com" className="hover:text-[#495E57]">
                X
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}