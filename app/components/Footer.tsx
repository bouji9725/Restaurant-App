import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <Image
          src="/little-lemon-logo.png"
          alt="Little Lemon logo"
          width={120}
          height={120}
        />
      </div>

      <div>
        <h2>Doormat Navigation</h2>
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
      </div>

      <div>
        <h2>Contact</h2>
        <address>
          <p>123 Little Lemon Street, Chicago</p>
          <p>(123) 456-7890</p>
          <p>hello@littlelemon.com</p>
        </address>
      </div>

      <div>
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <Link href="https://facebook.com" target="_blank">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="https://instagram.com" target="_blank">
              Instagram
            </Link>
          </li>
          <li>
            <Link href="https://x.com" target="_blank">
              X
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}