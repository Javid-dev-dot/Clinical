import Image from "next/image";

export default function Honoring() {
  return (
    <section id="honoring" className="bg-white">
      <div className="mx-auto grid max-w-[1800px] items-stretch lg:grid-cols-[45%_1fr]">
        {/* Left image */}
        <div className="relative aspect-4/5 w-full overflow-hidden lg:aspect-auto">
          <Image
            src="/images/honoring.jpg"
            alt="A family walking hand in hand through shallow water"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right content */}
        <div className="flex items-center px-6 py-20 lg:px-16 lg:py-28 xl:px-24">
          <h2 className="max-w-xl text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.9rem]">
            Honoring where you&rsquo;ve been{" "}
            <strong>
              <em>&amp;</em>
            </strong>{" "}
            helping shape where you&rsquo;re headed.
          </h2>
        </div>
      </div>
    </section>
  );
}
