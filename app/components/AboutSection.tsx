import Image from "next/image";

export default function AboutSection() {
  return (
    <section aria-labelledby="about-heading">
      <div>
        <h2 id="about-heading">Little Lemon</h2>
        <p>Chicago</p>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in
          Chicago. We focus on traditional recipes with a modern twist and a warm,
          welcoming dining experience.
        </p>
      </div>

      <div>
        <Image
          src="/about-mario.jpg"
          alt="Mario at Little Lemon"
          width={260}
          height={320}
        />
        <Image
          src="/about-adrian.jpg"
          alt="Adrian at Little Lemon"
          width={260}
          height={320}
        />
      </div>
    </section>
  );
}
