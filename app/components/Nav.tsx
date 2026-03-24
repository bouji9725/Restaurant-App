import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <Link href="/" aria-label="Little Lemon homepage">
        <Image
          src="/little-lemon-logo.png"
          alt="Little Lemon logo"
          width={180}
          height={48}
          priority
        />
      </Link>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/reservations">Reservations</Link>
        </li>
        <li>
          <Link href="/order-online">Order Online</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}