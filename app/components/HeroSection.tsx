import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-heading">
      <div>
        <h1 id="hero-heading">Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <Link href="/reservations">Reserve a Table</Link>
      </div>

      <div>
        <Image
          src="/hero-food.jpg"
          alt="Little Lemon signature dishes"
          width={420}
          height={520}
        />
      </div>
    </section>
  );
}