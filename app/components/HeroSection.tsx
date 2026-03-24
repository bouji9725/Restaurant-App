import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[#495E57] px-4 py-10 md:px-6 md:py-12"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <h1
            id="hero-heading"
            className="font-serif text-6xl leading-none text-[#F4CE14] md:text-7xl"
          >
            Little Lemon
          </h1>

          <p className="mb-4 font-serif text-4xl leading-none text-[#EDEFEE]">
            Chicago
          </p>

          <p className="mb-8 max-w-sm text-base text-white md:text-lg">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link
            href="/reservations"
            className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F4CE14] px-6 font-bold text-black transition hover:opacity-90"
          >
            Reserve a Table
          </Link>
        </div>

        <div className="md:mb-[-5rem] md:justify-self-end">
          <Image
            src="/restaurant.jpg"
            alt="Little Lemon signature dishes"
            width={520}
            height={460}
            className="w-full max-w-[560px] rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}