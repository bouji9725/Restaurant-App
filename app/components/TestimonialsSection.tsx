const testimonials = [
  { name: "Maria", rating: "5/5", text: "Amazing food and lovely atmosphere." },
  { name: "James", rating: "5/5", text: "The reservation experience was simple and fast." },
  { name: "Sophia", rating: "4/5", text: "Great service and delicious specials." },
  { name: "David", rating: "5/5", text: "I would absolutely come back again." },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-[var(--ll-beige)] px-4 py-16 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="testimonials-heading"
          className="mb-8 text-center font-serif text-5xl leading-none text-[#333333] md:text-6xl"
        >
          Testimonials
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl bg-[var(--ll-surface)] p-4 shadow-sm"
            >
              <p className="mb-2 text-sm font-semibold text-[#333333]">
                Rating: {review.rating}
              </p>
              <h3 className="mb-2 text-lg font-bold text-[#333333]">
                {review.name}
              </h3>
              <p className="text-sm text-[#333333]">{review.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}