import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section
      id="quote"
      className="relative flex items-center justify-center overflow-hidden bg-ink"
    >
      <Image
        src="/images/quote.jpg"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* The theme's dark section overlay sits at 54% opacity */}
      <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />

      <blockquote className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <p className="text-[1.6rem] leading-[1.5] text-white sm:text-[2rem] lg:text-[2.4rem]">
          You deserve a place where your story is heard, valued, and understood.{" "}
          <em className="font-light">
            Nothing will be too heavy for us to carry together.
          </em>
        </p>
      </blockquote>
    </section>
  );
}
