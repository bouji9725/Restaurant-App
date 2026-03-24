import Link from "next/link";
import Image from "next/image";

export default function HighlightsSection() {
  return (
    <section aria-labelledby="highlights-heading">
      <div>
        <h2 id="highlights-heading">This week&apos;s specials!</h2>
        <Link href="/order-online">Online Menu</Link>
      </div>

      <div>
        <article>
          <Image
            src="/greek-salad.jpg"
            alt="Greek salad"
            width={265}
            height={185}
          />
          <div>
            <h3>Greek Salad</h3>
            <p>$12.99</p>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and rosemary
            croutons.
          </p>
          <Link href="/order-online">Order a delivery</Link>
        </article>

        <article>
          <Image
            src="/bruchetta.jpg"
            alt="Bruchetta"
            width={265}
            height={185}
          />
          <div>
            <h3>Bruchetta</h3>
            <p>$5.99</p>
          </div>
          <p>
            Our Bruchetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <Link href="/order-online">Order a delivery</Link>
        </article>

        <article>
          <Image
            src="/lemon-dessert.jpg"
            alt="Lemon dessert"
            width={265}
            height={185}
          />
          <div>
            <h3>Lemon Dessert</h3>
            <p>$5.00</p>
          </div>
          <p>
            This comes straight from grandma&apos;s recipe book, every last ingredient
            has been sourced and is as authentic as can be imagined.
          </p>
          <Link href="/order-online">Order a delivery</Link>
        </article>
      </div>
    </section>
  );
}
