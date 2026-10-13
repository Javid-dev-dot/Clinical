import Image from "next/image";

export default function Intro() {
  return (
    <section id="intro" className="bg-cream-light">
      <div className="mx-auto grid max-w-[1800px] items-stretch lg:grid-cols-[1fr_38%]">
        {/* Left content */}
        <div className="py-20 pr-6 pl-6 lg:py-28 lg:pr-16 lg:pl-10">
          <h2 className="max-w-2xl text-[2rem] leading-[1.2] sm:text-[2.4rem] lg:text-[2.9rem]">
            You&rsquo;re holding onto hope that life can be better than it is
            right now.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="eyebrow text-xs leading-[1.8] text-ink sm:text-sm">
                At Conejo Valley Family Counseling we want to make that hope a
                reality.
              </p>
              <p className="mt-6 leading-[1.8]">
                Whether you&rsquo;re an adult seeking personal growth, looking to
                work through your trauma, a couple working on your relationship,
                or a parent looking for support for your child, we provide a
                compassionate and safe space to help you navigate all of
                life&rsquo;s ups and downs.
              </p>
            </div>

            <div>
              <p className="leading-[1.8]">
                First and foremost, we believe what you&rsquo;re going through is
                real, valid, and worthy of support. Our team offers clients in
                the Newbury Park area and across CA an environment to discover a
                new life and a deeper sense of self in the midst of their
                struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a
                transformative path forward.
              </p>
            </div>
          </div>
        </div>

        {/* Right image, full-bleed */}
        <div className="relative aspect-4/5 w-full overflow-hidden lg:aspect-auto lg:min-h-[70vh]">
          <Image
            src="/images/intro.jpg"
            alt="Gentle ocean waves rolling onto the shore"
            fill
            sizes="(max-width: 1024px) 100vw, 38vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
