import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-[#EDEFEE] px-4 py-16 md:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
        <div className="max-w-xl">
          <h2
            id="about-heading"
            className="font-serif text-5xl leading-none text-[#333333] md:text-6xl"
          >
            Little Lemon
          </h2>

          <p className="mb-4 font-serif text-4xl leading-none text-[#333333]">
            Chicago
          </p>

          <p className="text-base leading-7 text-[#333333]">
            Little Lemon is a family-owned Mediterranean restaurant located in
            Chicago. We focus on traditional recipes with a modern twist and a
            warm, welcoming dining experience.
          </p>
        </div>

        <div className="relative min-h-[420px]">
          <Image
            src="/about-mario.jpg"
            alt="Mario at Little Lemon"
            width={260}
            height={320}
            className="absolute bottom-0 left-0 rounded-2xl object-cover shadow-lg"
          />
          <Image
            src="/about-adrian.jpg"
            alt="Adrian at Little Lemon"
            width={260}
            height={320}
            className="absolute right-8 top-0 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}