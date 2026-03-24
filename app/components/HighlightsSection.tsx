import Image from "next/image";
import Link from "next/link";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    image: "/greek salad.jpg",
    alt: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    image: "/bruchetta.svg",
    alt: "Bruchetta",
    description:
      "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    image: "/lemon dessert.jpg",
    alt: "Lemon dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export default function HighlightsSection() {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="bg-[var(--ll-surface)] px-4 pb-16 pt-32 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2
            id="highlights-heading"
            className="font-serif text-5xl leading-none text-[#333333] md:text-6xl"
          >
            This week&apos;s specials!
          </h2>

          <Link
            href="/order-online"
            className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F4CE14] px-6 font-bold text-black transition hover:opacity-90"
          >
            Online Menu
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specials.map((dish) => (
            <article
              key={dish.title}
className="overflow-hidden rounded-2xl bg-[var(--ll-beige)] shadow-md"            >
              <Image
                src={dish.image}
                alt={dish.alt}
                width={300}
                height={220}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#333333]">
                    {dish.title}
                  </h3>
                  <span className="font-bold text-[#EE9972]">{dish.price}</span>
                </div>

                <p className="mb-6 text-sm leading-6 text-[#333333]">
                  {dish.description}
                </p>

                <Link
                  href="/order-online"
                  className="font-bold text-[#333333] transition hover:text-[#495E57]"
                >
                  Order a delivery
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}