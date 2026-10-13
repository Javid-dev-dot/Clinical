import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-cream-light">
      <div className="mx-auto grid min-h-[70vh] max-w-[1800px] items-stretch lg:grid-cols-[45%_1fr]">
        {/* Left image, full-bleed */}
        <div className="relative aspect-4/5 w-full overflow-hidden lg:aspect-auto lg:min-h-[70vh]">
          <Image
            src="/images/hero-1.jpg"
            alt="A family together on the beach"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="interactive-image object-cover object-center"
          />
        </div>

        {/* Right content */}
        <div className="flex items-center py-16 pr-6 pl-8 lg:py-24 lg:pr-10 lg:pl-16 xl:pl-24">
          <div className="reveal-on-scroll max-w-xl">
            <p className="eyebrow text-xs text-ink sm:text-sm">
              Online &amp; In-Person Counseling in Newbury Park &amp; Across CA
            </p>

            <h1 className="mt-6 text-[2.4rem] leading-[1.25] sm:text-5xl lg:text-[3.4rem] xl:text-[3.6rem]">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <strong>
                <em>Thrive</em>
              </strong>
              .
            </h1>

            <p className="mt-7 max-w-md leading-[1.8] text-ink">
              Specialized therapy for adults, couples, teens, and children to
              reflect, heal, and grow.
            </p>

            <Link href="/contact" className="btn-primary mt-8">
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative second image, peeking in from the right edge */}
      <div
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-[14%] overflow-hidden xl:block"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-2.jpg"
          alt=""
          fill
          sizes="14vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
